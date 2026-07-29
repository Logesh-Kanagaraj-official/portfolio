import * as THREE from "three";
import { gsap } from "gsap";

/**
 * Skin Color Configuration
 * Provides realistic skin tone options and applies them to 3D character materials
 */

// Skin tone palette with realistic color values
export const SKIN_TONES = {
  light: "#ffd4b8",      // Light peachy tone
  fair: "#f4c2a0",       // Fair beige tone
  medium: "#d8a888",     // Medium warm tone
  tan: "#c89872",        // Tan brown tone
  brown: "#a67c5c",      // Brown tone
  dark: "#8b6f57",       // Dark rich tone
  default: "#d8a888",    // Default medium tone
} as const;

export type SkinTone = keyof typeof SKIN_TONES;

/**
 * Material names that typically represent skin in 3D character models
 */
const SKIN_MATERIAL_PATTERNS = [
  "skin",
  "body",
  "face", 
  "head",
  "arm",
  "hand",
  "leg",
  "foot",
  "neck",
  "flesh",
];

/**
 * Check if a material name suggests it's a skin material
 */
function isSkinMaterial(materialName: string): boolean {
  const lowerName = materialName.toLowerCase();
  return SKIN_MATERIAL_PATTERNS.some(pattern => lowerName.includes(pattern));
}

/**
 * Apply skin color to character materials using GSAP for smooth transitions
 * @param character - The loaded 3D character object
 * @param skinTone - The skin tone to apply (defaults to "default")
 * @param duration - Animation duration in seconds (defaults to 1.5s)
 */
export function applySkinColor(
  character: THREE.Object3D,
  skinTone: SkinTone = "default",
  duration: number = 1.5
): void {
  const targetColor = SKIN_TONES[skinTone];
  const colorObject = new THREE.Color(targetColor);

  let skinMaterialsFound = 0;

  // Traverse all meshes in the character model
  character.traverse((child: any) => {
    if (child.isMesh) {
      const mesh = child as THREE.Mesh;
      const material = mesh.material as THREE.MeshStandardMaterial;

      // Check if this material is likely a skin material
      if (material && material.name && isSkinMaterial(material.name)) {
        skinMaterialsFound++;

        // Store original color if not already stored
        if (!material.userData.originalColor) {
          material.userData.originalColor = material.color.clone();
        }

        // Animate color change with GSAP
        gsap.to(material.color, {
          r: colorObject.r,
          g: colorObject.g,
          b: colorObject.b,
          duration: duration,
          ease: "power2.inOut",
        });

        // Optionally adjust material properties for more realistic skin
        material.roughness = Math.max(0.6, material.roughness); // Skin is not too shiny
        material.metalness = Math.min(0.1, material.metalness); // Skin is not metallic
      }
    }
  });

  if (skinMaterialsFound > 0) {
    console.log(
      `✅ Applied "${skinTone}" skin tone to ${skinMaterialsFound} material(s)`
    );
  } else {
    console.warn(
      "⚠️ No skin materials found. Character materials might use different naming conventions."
    );
  }
}

/**
 * Reset character skin to original colors
 * @param character - The loaded 3D character object
 * @param duration - Animation duration in seconds
 */
export function resetSkinColor(
  character: THREE.Object3D,
  duration: number = 1.5
): void {
  character.traverse((child: any) => {
    if (child.isMesh) {
      const mesh = child as THREE.Mesh;
      const material = mesh.material as THREE.MeshStandardMaterial;

      if (material && material.userData.originalColor) {
        const originalColor = material.userData.originalColor as THREE.Color;
        gsap.to(material.color, {
          r: originalColor.r,
          g: originalColor.g,
          b: originalColor.b,
          duration: duration,
          ease: "power2.inOut",
        });
      }
    }
  });
}

/**
 * Apply a subtle emissive glow to skin materials (useful for lighting effects)
 * @param character - The loaded 3D character object
 * @param emissiveColor - The emissive color to apply
 * @param intensity - Emissive intensity (0-1)
 */
export function applySkinEmissive(
  character: THREE.Object3D,
  emissiveColor: string = "#ffc5a3",
  intensity: number = 0.1
): void {
  const emissive = new THREE.Color(emissiveColor);

  character.traverse((child: any) => {
    if (child.isMesh) {
      const mesh = child as THREE.Mesh;
      const material = mesh.material as THREE.MeshStandardMaterial;

      if (material && material.name && isSkinMaterial(material.name)) {
        gsap.to(material, {
          emissive: emissive,
          emissiveIntensity: intensity,
          duration: 1,
          ease: "power2.inOut",
        });
      }
    }
  });
}

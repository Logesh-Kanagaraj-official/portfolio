import * as THREE from "three";
import { RGBELoader } from "three-stdlib";
import { gsap } from "gsap";

const setLighting = (scene: THREE.Scene) => {
  // More vibrant purple/pink directional light for colorful character
  const directionalLight = new THREE.DirectionalLight(0xfb8dff, 0);
  // Give a stronger default intensity for more vibrant colors
  directionalLight.intensity = 1.2;
  directionalLight.position.set(-0.47, -0.32, -1);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  scene.add(directionalLight);

  // More vibrant pink/purple point light
  const pointLight = new THREE.PointLight(0xe68dff, 1.2, 100, 2.5);
  pointLight.position.set(3, 12, 4);
  pointLight.castShadow = true;
  scene.add(pointLight);

  // Additional rim light for vibrant purple/pink glow
  const rimLight = new THREE.PointLight(0xff8de6, 0.8, 50, 2);
  rimLight.position.set(-5, 10, -3);
  scene.add(rimLight);

  // Additional accent light for depth
  const accentLight = new THREE.PointLight(0xc481ff, 0.6, 40, 2.5);
  accentLight.position.set(0, 8, -5);
  scene.add(accentLight);

  new RGBELoader()
    .setPath("/models/")
    .load("char_enviorment.hdr", function (texture) {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
  // Higher environment intensity for more vibrant, colorful character
  scene.environmentIntensity = 0.9;
  scene.environmentRotation.set(5.76, 85.85, 1);
    });

  function setPointLight(screenLight: any) {
    if (screenLight.material.opacity > 0.9) {
      pointLight.intensity = screenLight.material.emissiveIntensity * 25;
    } else {
      pointLight.intensity = 0;
    }
  }
  const duration = 2;
  const ease = "power2.inOut";
  function turnOnLights() {
    gsap.to(scene, {
      environmentIntensity: 1.2,
      duration: duration,
      ease: ease,
    });
    gsap.to(directionalLight, {
      intensity: 2,
      duration: duration,
      ease: ease,
    });
    gsap.to(".character-rim", {
      y: "55%",
      opacity: 1,
      delay: 0.2,
      duration: 2,
    });
  }

  return { setPointLight, turnOnLights };
};

export default setLighting;

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BufferGeometry,
  MathUtils,
  PointsMaterial,
  Float32BufferAttribute,
  Points,
  Color,
  Raycaster,
  Vector2,
  TextureLoader,
  SpriteMaterial,
  Sprite,
} from "three";
import styles from "./Sky.module.css";
import { useRef, useEffect } from "react";

export default function Sky() {
  const mountRef = useRef(null);
  const raycaster = new Raycaster();
  const mouse = new Vector2();
  useEffect(() => {
    const mount = mountRef.current;

    const scene = new Scene();
    scene.background = new Color(0x000000);

    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 1;

    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const starsGeometry = new BufferGeometry();
    const starsMaterial = new PointsMaterial({ color: 0x888888 });

    const starVertices = [];
    for (let i = 0; i < 100000; i++) {
      const x = MathUtils.randFloatSpread(2000);
      const y = MathUtils.randFloatSpread(2000);
      const z = MathUtils.randFloatSpread(2000);
      starVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      "position",
      new Float32BufferAttribute(starVertices, 3)
    );

    const stars = new Points(starsGeometry, starsMaterial);
    scene.add(stars);
    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    const textureLoader = new TextureLoader();

    const haloMaterial = new SpriteMaterial({
      // map: haloTexture,
      color: 0xffffff,
      transparent: true,
      opacity: 0.75,
    });
    const halo = new Sprite(haloMaterial);
    halo.scale.set(10, 10, 1);
    scene.add(halo);
    halo.visible = false;
    window.addEventListener("mousemove", onMouseMove, false);
    const animate = () => {
      requestAnimationFrame(animate);

      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(stars);

      if (intersects.length > 0) {
        const intersect = intersects[0];
        halo.position.copy(intersect.point);
        halo.visible = true;
      } else {
        halo.visible = false;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 清理函数
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={styles.canvasContainer}></div>;
}

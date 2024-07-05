import React, { useEffect, useRef } from "react";
import { render } from "react-dom";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import Image1 from "../../../photos/p1.png"
import Image2 from "../../../photos/p2.jpg"

export const Animation: React.FC = () => {
  const componentReference = useRef<HTMLCanvasElement | undefined>(undefined);
  

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: componentReference?.current,
      alpha: true,
    });
    const texture = new THREE.TextureLoader().load(Image1)
    const texture1 = new THREE.TextureLoader().load(Image2)

    renderer.setSize(componentReference.current?.clientWidth, componentReference.current?.clientHeight);
    camera.position.setZ(30);

    // create object
    const geometry = new THREE.SphereGeometry(17, 150, 100);
    const materials = new THREE.MeshBasicMaterial({
      opacity: 0,
      map : texture
      
    });
    const torus = new THREE.Mesh(geometry, materials);
    scene.add(torus);

    // controllers
    // const controls = new OrbitControls(camera, renderer.domElement);

    function animation() {
      requestAnimationFrame(animation);
      torus.rotateX(0.001);
      torus.rotateY(0.002);
      torus.rotateZ(0.001);
      // controls.update();
      renderer.render(scene, camera);
    }
    animation();
  }, [componentReference]);

  return (
    <canvas className="sm:w-[600px] w-full h-[200px] flex justify-start items-center sm:h-[400px]"
      ref={componentReference}
     
    ></canvas>
  );
};

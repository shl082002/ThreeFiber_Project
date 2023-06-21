import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
// import { BsGlobeAsiaAustralia } from "react-icons/bs";
import * as THREE from "three";
// import * as random from "maath/random/dist/maath-random.esm";


function Rig({ children }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (state.mouse.x * Math.PI) / 20,
      0.05
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      (state.mouse.y * Math.PI) / 20,
      0.05
    );
  });
  return <group ref={ref}>{children}</group>;
}

const Models = ({ url, ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(url);
  useFrame((state) => {
    group.current.children.forEach((child, index) => {
      child.position.y += Math.sin(index * 1000 + state.clock.elapsedTime) / 50;
      child.rotation.x +=
        (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 2000;
      child.rotation.y +=
        (Math.cos(index * 1000 + state.clock.elapsedTime) * Math.PI) / 3000;
      child.rotation.z +=
        (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) / 4000;
    });
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials.M_Curly}
        geometry={nodes.Curly.geometry}
        position={[-30, -15, -10]}
        rotation={[1.76, 0.07, -0.19]}
      />{" "}
      //for spiral shape
      {/* <mesh
        material={materials.M_DNA}
        geometry={nodes.DNA.geometry}
        position={[19.9, -12.6, -17.01]}
        rotation={[1.26, 0.91, -1.86]}
      /> // for dna shape */}
      <mesh
        material={materials.M_Headphone}
        geometry={nodes.Headphones.geometry}
        position={[30, -5, 15]}
        rotation={[1.55, 0.32, -0.76]}
        scale={[1.5, 1.5, 1.5]}
      />{" "}
      // for headphone
      <mesh
        material={materials.M_Notebook}
        geometry={nodes.Notebook.geometry}
        position={[-15, -10, 10]}
        rotation={[1.83, -0.23, 0.91]}
      />{" "}
      //for laptop
      <mesh
        material={materials.M_Rocket}
        geometry={nodes.Rocket003.geometry}
        position={[25, 20, -30]}
        rotation={[1.14, 0.81, 0.44]}
        scale={[1.5, 1.5, 1.5]}
      />{" "}
      // rocket
      <mesh
        material={materials.M_Roundcube}
        geometry={nodes.Roundcube001.geometry}
        position={[-30, 0, -12.07]}
        rotation={[1.55, 0.05, 0.5]}
        scale={[0.5, 0.5, 0.5]}
      />{" "}
      //windmill
      {/* <mesh
        material={materials.M_Table}
        geometry={nodes.Table.geometry}
        position={[0.59, -3.79, -27.84]}
        rotation={[0.98, 0.15, -1.24]}
        scale={[0.5, 0.5, 0.5]}
      /> */}
      <mesh
        material={materials.M_Headset}
        geometry={nodes.VR_Headset.geometry}
        position={[6.92, -20, 27.59]}
        rotation={[1.29, 0.08, -0.64]}
        scale={[5, 5, 5]}
      />{" "}
      //VR
      <mesh
        material={materials.M_Zeppelin}
        geometry={nodes.Zeppelin.geometry}
        position={[-23.64, -17.96, 17.51]}
        rotation={[2.72, -0.8, 2.71]}
        scale={[1, 0.75, 0.5]}
      />
    </group>
  );
};

const ModelsCanvas = () => {
  return (
    <div className="w-full h-screen z-[1]">
      <Canvas camera={{ position: [0, -10, 65], fov: 50 }} dpr={[1, 2]}>
        <pointLight position={[100, 100, 100]} intensity={0.8} />
        <hemisphereLight
          color="#2ad7da"
          groundColor="#1c292a"
          position={[-7, 10, -40]}
          intensity={1.25}
        />
        <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
          <group position={[0, 10, 0]}>
            <Rig>
              <Models url="/compressed.glb" />
            </Rig>
            {/* <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -35, 0]}
              opacity={0.25}
              width={100}
              height={100}
              blur={2}
              far={50}
            /> */}
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};
export default ModelsCanvas;

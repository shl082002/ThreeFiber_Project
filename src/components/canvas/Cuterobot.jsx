import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  OrbitControls,
  Preload,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import {
  BsMeta,
  BsFillShieldLockFill,
  BsFillLightbulbFill,
} from "react-icons/bs";
import { GrSettingsOption } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa";

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

const Cuterobot = () => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/CuteRobot.glb");
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
    <group ref={group} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <lineSegments
          geometry={nodes.Object_2.geometry}
          material={materials["Material.002"]}
          scale={[25, 25, 25]}
          position={[0,0,6]}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Material.001"]}
          scale={[25, 25, 25]}
          position={[0,0,6]}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Material.002"]}
          scale={[25, 25, 25]}
          position={[0,0,6]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Material.002"]}
          scale={[25, 25, 25]}
          position={[0,0,6]}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials["Material.002"]}
          scale={[25, 25, 25]}
          position={[0,0,6]}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["Material.002"]}
          scale={[25, 25, 25]}
          position={[0,0,6]}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["Material.002"]}
          scale={[25, 25, 25]}
          position={[0,0,6]}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials["Material.002"]}
          scale={[25, 25, 25]}
          position={[0,0,6]}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials["Material.002"]}
          scale={[25, 25, 25]}
          position={[0,0,6]}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials["Material.002"]}
          scale={[25, 25, 25]}
          position={[0,0,6]}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials["Material.003"]}
          scale={[25, 25, 25]}
          position={[0,0,6]}
        />
      </group>
    </group>
  );
};

const RoboCanvas = () => {
  return (
    <div className="w-full h-max grid sm:grid-cols-2 grid-cols-1 main-body">
      <div className="flex flex-col justify-center items-center text-white sm:p-[2rem]">
        <div className="flex items-center justify-center my-[2rem]">
          <div className="flex items-center justify-start">
            <BsMeta className="sm:text-[10rem] text-[8rem] mx-[2rem]" />
          </div>
          <div className="flex flex-col">
            <span className="sm:text-[2.5rem] text-[2rem] px-[1rem]">
              Interactive Metaverse
            </span>
            <span className="text-[1rem] px-[1rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Adipisci, eius.
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center my-[2rem]">
          <div className="flex items-center justify-start">
            <BsFillLightbulbFill className="sm:text-[10rem] text-[8rem] mx-[2rem]" />
          </div>
          <div className="flex flex-col">
            <span className="sm:text-[2.5rem] text-[2rem] px-[1rem]">AI Creative Tools</span>
            <span className="text-[1rem] px-[1rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Adipisci, eius.
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center my-[2rem]">
          <div className="flex items-center justify-start">
            <BsFillShieldLockFill className="sm:text-[10rem] text-[8rem] mx-[2rem]" />
          </div>
          <div className="flex flex-col">
            <span className="sm:text-[2.5rem] text-[2rem] px-[1rem]">
              3rd-Party Integration
            </span>
            <span className="text-[1rem] px-[1rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Adipisci, eius.
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center my-[2rem]">
          <div className="flex items-center justify-start">
            <FaGlobe className="sm:text-[10rem] text-[8rem] mx-[2rem]" />
          </div>
          <div className="flex flex-col">
            <span className="sm:text-[2.5rem] text-[2rem] px-[1rem]">VR/AR on the Web</span>
            <span className="text-[1rem] px-[1rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Adipisci, eius.
            </span>
          </div>
        </div>
      </div>
      <div className="invisible sm:visible">
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
            <Rig>
              <Cuterobot url="/CuteRobot.glb" />
            </Rig>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};
export default RoboCanvas;

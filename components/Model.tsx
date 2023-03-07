"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import useMediaQuery from "@lib/hooks/useMediaQuery";

// Auto-generated by: https://github.com/pmndrs/gltfjsx
export default function Model({ url, ...props }) {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const group = useRef();
    const { nodes, materials } = useGLTF(url);

    useFrame((state) => {
        group.current.children.forEach((child, index) => {
            child.position.y +=
                Math.sin(index * 1000 + state.clock.elapsedTime) / 50;
            child.rotation.x +=
                (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) /
                2000;
            child.rotation.y +=
                (Math.cos(index * 1000 + state.clock.elapsedTime) * Math.PI) /
                3000;
            child.rotation.z +=
                (Math.sin(index * 1000 + state.clock.elapsedTime) * Math.PI) /
                4000;
        });
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                material={materials.M_Curly}
                geometry={nodes.Curly.geometry}
                position={isMobile ? [-10, -15, -17.01] : [19.9, 0, -17.01]}
                rotation={[1.76, 0.07, -0.19]}
            />
            <mesh
                material={materials.M_DNA}
                geometry={nodes.DNA.geometry}
                position={isMobile ? [0, -25, 27.59] : [-10, -15.17, 27.59]}
                rotation={[1.26, 0.91, -1.86]}
            />
            <mesh
                material={materials.M_Headphone}
                geometry={nodes.Headphones.geometry}
                position={isMobile ? [15, 1.99, 4.03] : [20.22, 1.99, 4.03]}
                rotation={[1.55, 0.32, -0.76]}
            />
            <mesh
                material={materials.M_Notebook}
                geometry={nodes.Notebook.geometry}
                position={[-21.4, -14.96, -13.21]}
                rotation={[1.83, -0.23, 0.91]}
            />
            <mesh
                material={materials.M_Rocket}
                geometry={nodes.Rocket003.geometry}
                position={[17.58, 15.26, -25.21]}
                rotation={[1.14, 0.81, 0.44]}
            />
            <mesh
                material={materials.M_Roundcube}
                geometry={nodes.Roundcube001.geometry}
                position={
                    isMobile ? [-15, 4.1, -12.07] : [-21.17, -4.1, -12.07]
                }
                rotation={[1.55, 0.05, 0.45]}
                scale={[0.5, 0.5, 0.5]}
            />
            <mesh
                material={materials.M_Table}
                geometry={nodes.Table.geometry}
                position={[0.59, -3.79, -27.84]}
                rotation={[0.98, 0.15, -1.24]}
                scale={[0.5, 0.5, 0.5]}
            />
            <mesh
                material={materials.M_Headset}
                geometry={nodes.VR_Headset.geometry}
                position={[6.92, -15.17, 27.59]}
                rotation={[1.29, 0.08, -0.64]}
                scale={[5, 5, 5]}
            />
            {/* <mesh
                material={materials.M_Zeppelin}
                geometry={nodes.Zeppelin.geometry}
                position={isMobile ? [10, -10, 17.51] : [-23.64, -17.96, 17.51]}
                rotation={[2.72, -0.8, 2.71]}
                scale={[0, 0, 0]}
            /> */}
        </group>
    );
}
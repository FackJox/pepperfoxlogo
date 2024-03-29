/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Nikolai Jonasson (https://sketchfab.com/nikolaijonasson)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/female-marble-statue-polished-but-old-41b024813afd49fb827d942219d89b93
title: Female Marble Statue (Polished but old)
*/

import * as THREE from "three";
import { useRef } from "react";
import { useGLTF, useTexture, shaderMaterial } from "@react-three/drei";
import { useFrame, extend, useThree } from "@react-three/fiber";
import CheckerboardFragment from "../shaders/checkerboard/fragment.glsl";
import CheckerboardVertex from "../shaders/checkerboard/vertex.glsl";
import { MSDFTextGeometry, MSDFTextMaterial } from "three-msdf-text";

import fnt from "../../assets/fonts/ITCAvantGardeStd-Bold-msdf.fnt"
import png from "../../assets/fonts/ITCAvantGardeStd-Bold.png"

const CheckerboardShaderMaterial = shaderMaterial(
	{ 
		uTime: 0,
		lightPos: new THREE.Vector3(),
		cameraPos: new THREE.Vector3(),
	},
	CheckerboardVertex,
	CheckerboardFragment
);
extend({ CheckerboardShaderMaterial });

export function Checkerboard(props) {
	const camera = useThree((state) => state.camera);
	console.log("camera pos", camera);

	const checkerboardShaderMaterialRef = useRef();

	// console.log(femaleVibrantShaderMaterialRef.current)

	useFrame((state, delta) => {
		checkerboardShaderMaterialRef.current.uTime += delta;
		checkerboardShaderMaterialRef.current.cameraPos = camera.position;
	});

	const { lightPos } = { ...props };


Promise.all([
    loadFontAtlas("png"),
    loadFont("fnt"),
]).then(([atlas, font]) => {
    const geometry = new MSDFTextGeometry({
        text: "Seriously Spicy\nCuriously Crafty",
        font: font.data,
    });

    const material = new MSDFTextMaterial();
    material.uniforms.uMap.value = atlas;

    // const mesh = new THREE.Mesh(geometry, material);
});

function loadFontAtlas(path) {
    const promise = new Promise((resolve, reject) => {
        const loader = new THREE.TextureLoader();
        loader.load(path, resolve);
    });

    return promise;
}

function loadFont(path) {
    const promise = new Promise((resolve, reject) => {
        const loader = new THREE.FontLoader();
        loader.load(path, resolve);
    });

    return promise;
}


	return (
		<mesh
		geometry={geometry}
		material={material}
		>

		<checkerboardShaderMaterial
			ref={checkerboardShaderMaterialRef}
			side={THREE.DoubleSide}
			lightPos={lightPos}
			// abstractTexture={abstractTexture}
			/>
			</mesh>
	);
}

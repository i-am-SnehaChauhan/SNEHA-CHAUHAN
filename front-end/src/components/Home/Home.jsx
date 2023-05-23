import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../images/moon.jpg";
import venusImage from "../../images/venus.jpg";
import spaceImage from "../../images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    /* Moon Geometry */
    const moongeometry = new THREE.SphereGeometry(3, 64, 64);
    const moonmaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moongeometry, moonmaterial);

    /* Venus Geometry */
    const venusgeometry = new THREE.SphereGeometry(2, 64, 64);
    const venusmaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusgeometry, venusmaterial);
    venus.position.set(8, 5, 5);

    const pointlight = new THREE.PointLight(0xffffff, 1);
    pointlight.position.set(8, 5, 5);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    pointLight2.position.set(-8, -5, -5);
    // const lightHelper = new THREE.PointLightHelper(pointlight);

    // const controls = new OrbitControls(camera, renderer.domElement);
    scene.add(moon);
    scene.add(venus);
    scene.add(pointlight);
    scene.add(pointLight2);
    scene.background = spaceTexture;
    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });
    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();
  }, []);
  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1, 2, 3, 4]}/>
      </div>
      <div className="homeSkills"></div>
        <Typography variant="h3">SKILLS</Typography>
    </div>
  );
};

export default Home;

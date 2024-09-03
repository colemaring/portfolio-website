import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { STLExporter } from "three/examples/jsm/exporters/STLExporter";
import { CSG } from "three-csg-ts";
import "./stencil/stencilstyle.css";

let scene;

const StencilCreator = () => {
  const canvasRef = useRef(null);
  const [fontSize, setFontSize] = useState(10);
  const [fontChoice, setFontChoice] = useState("Stencilia-A");
  const [textPosX, setTextPosX] = useState(0);
  const [textPosY, setTextPosY] = useState(0);
  const [text, setText] = useState("SampleText");
  const [backPlateX, setBackPlateX] = useState(120);
  const [backPlateY, setBackPlateY] = useState(50);
  const [backPlateZ, setBackPlateZ] = useState(1.3);

  // On input change
  useEffect(() => {
    if (canvasRef.current) {
      const fontLoader = new FontLoader();
      const canvas = canvasRef.current;

      // Initialize scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0xd4d4d4);

      // Create the camera
      const camera = new THREE.PerspectiveCamera(
        45,
        canvas.width / canvas.height,
        0.1,
        1000
      );
      camera.position.set(0, 150, 100); // Adjusted to look at the center of the scene

      // Create some light
      const ambient = new THREE.AmbientLight(0xffffff, 0.5);
      const light = new THREE.PointLight(0xffffff, 0.5);
      light.position.set(0, 300, 0);
      scene.add(ambient);
      scene.add(light);

      // Add grid to the scene
      const gridHelper = new THREE.GridHelper(200, 30);
      scene.add(gridHelper);

      // Create the renderer
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });
      renderer.setSize(canvas.width, canvas.height);

      // Create the orbit controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 0, 0); // Set the target to the center of the scene
      controls.maxPolarAngle = Math.PI / 2;
      controls.update();

      // Window resize listener
      const handleResize = () => {
        const width = canvasRef.current.parentElement.clientWidth; // Use the parent element's width
        const height = canvasRef.current.parentElement.clientHeight; // Use the parent element's height
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        controls.update(); // Update the controls after resizing
      };

      window.addEventListener("resize", handleResize);
      handleResize(); // Call once to set the initial size

      // Animation loop
      function animate() {
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      animate();

      // Update the stencil and text
      function updateStencil() {
        deleteStencil();
        updateText();
      }

      function deleteStencil() {
        tempBackplate();
        for (let i = scene.children.length - 1; i >= 0; i--) {
          if (scene.children[i].type === "Mesh") {
            if (scene.children[i].name === "temp") {
              continue;
            }
            scene.remove(scene.children[i]);
          }
        }
      }

      // placeholder back plate to show while new one is being created
      function tempBackplate() {
        const geometry = new THREE.BoxGeometry(
          backPlateX,
          backPlateY,
          backPlateZ
        );

        const material = new THREE.MeshStandardMaterial({ color: 0x7882ab });
        const tempPlate = new THREE.Mesh(geometry, material);
        tempPlate.position.set(0, backPlateZ / 2, 0);
        tempPlate.rotation.set(Math.PI / 2, Math.PI, Math.PI);
        tempPlate.name = "temp";

        scene.add(tempPlate);

        setTimeout(() => {
          scene.remove(tempPlate);
        }, 5);
      }

      // called on input change
      function updateText() {
        const fileName = "fonts/" + fontChoice + ".json";

        fontLoader.load(
          fileName,
          (droidFont) => {
            const textGeometry = new TextGeometry(text, {
              height: 100,
              size: fontSize,
              font: droidFont,
            });

            const geometry = new THREE.BoxGeometry(
              backPlateX,
              backPlateY,
              backPlateZ
            );
            const plateMaterial = new THREE.MeshStandardMaterial({
              color: 0x7882ab,
            });
            const plate = new THREE.Mesh(geometry, plateMaterial);
            plate.position.set(0, backPlateZ / 2, 0);

            const textMaterial = new THREE.MeshNormalMaterial();
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
            textMesh.geometry.center();

            textMesh.position.x = textPosX - 0; // only works when subtracting a number???
            textMesh.position.y = textPosY - 0;
            textMesh.position.z = -1;
            textMesh.updateMatrix();
            plate.updateMatrix();

            const subRes = CSG.subtract(plate, textMesh);
            subRes.rotation.set(Math.PI / 2, Math.PI, Math.PI);

            scene.add(subRes);
          },
          undefined,
          (error) => {
            console.error("Error loading font:", error);
          }
        );
      }

      // Update stencil on any input change
      updateStencil();

      // Clean up on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [
    fontSize,
    fontChoice,
    textPosX,
    textPosY,
    text,
    backPlateX,
    backPlateY,
    backPlateZ,
  ]);

  // global exporter to use in exportSTL()
  var exporter = new STLExporter();
  window.exporter = exporter;

  function orientSceneForExport() {
    scene.rotation.set(-Math.PI / 2, Math.PI, Math.PI);
    scene.updateMatrixWorld();
  }

  function orientSceneAfterExport() {
    scene.rotation.set(Math.PI, Math.PI, Math.PI);
    scene.updateMatrixWorld();
  }

  function exportSTL() {
    orientSceneForExport();
    const str = exporter.parse(scene);
    orientSceneAfterExport();

    const blob = new Blob([str], { type: "text/plain" });
    const link = document.createElement("a");
    link.style.display = "none";
    document.body.appendChild(link);
    link.href = URL.createObjectURL(blob);
    link.download = text + ".stl";
    link.click();
  }

  return (
    <div id="mainContainer">
      <div id="leftSide">
        <div id="boxContainer">
          <div id="marginContainer">
            <div id="outerTextInputContainer">
              <p className="headerFont">Text options</p>
              <br />
              <div id="textInputAndFontContainer">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <select
                  id="fontSelection"
                  value={fontChoice}
                  onChange={(e) => setFontChoice(e.target.value)}
                >
                  <option value="Stencilia-A">Stencilia-A</option>
                  <option value="Bulletproof">Bulletproof</option>
                  <option value="Gunplay">Gunplay</option>
                  <option value="USAAF">USAAF</option>
                  <option value="OldSchoolUnitedStencil">
                    OldSchoolUnitedStencil
                  </option>
                  <option value="OldSchoolUnitedStencilItallic">
                    OldSchoolUnitedStencilItallic
                  </option>
                  <option value="MarbellaArmy">MarbellaArmy</option>
                  <option value="Pixel-7">Pixel-7</option>
                  <option value="PunkIsDead">PunkIsDead</option>
                  <option value="Revamped">Revamped</option>
                  <option value="Lordcorps">Lordcorps</option>
                  <option value="BOMBORA">BOMBORA</option>
                  <option value="Stencilia-Bold">Stencilia-Bold</option>
                </select>
                <div id="fontSizeContainer">
                  <label className="descFont" htmlFor="fontSlider">
                    Font Size
                  </label>
                  <input
                    type="range"
                    id="fontSlider"
                    value={fontSize}
                    min="6"
                    max="38"
                    onChange={(e) => setFontSize(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div id="fontPositionContainer">
              <p className="headerFont">Text position</p>
              <br />
              <input
                type="range"
                id="textPosX"
                value={textPosX}
                min="-50"
                max="50"
                onChange={(e) => setTextPosX(e.target.value)}
              />
              <label htmlFor="textPosX" className="descFont">
                X Offset
              </label>
              <br />
              <input
                type="range"
                id="textPosY"
                value={textPosY}
                min="-50"
                max="50"
                onChange={(e) => setTextPosY(e.target.value)}
              />
              <label htmlFor="textPosY" className="descFont">
                Y Offset
              </label>
              <br />
            </div>
            <div id="backPlateSizeContainer">
              <p className="headerFont">Backplate Size</p>
              <br />
              <input
                type="range"
                id="backPlateX"
                value={backPlateX}
                min="20"
                max="200"
                onChange={(e) => setBackPlateX(e.target.value)}
              />
              <label htmlFor="backPlateX" className="descFont">
                Length
              </label>
              <br />
              <input
                type="range"
                id="backPlateY"
                value={backPlateY}
                min="10"
                max="80"
                onChange={(e) => setBackPlateY(e.target.value)}
              />
              <label htmlFor="backPlateY" className="descFont">
                Width
              </label>
              <br />
              <input
                type="range"
                id="backPlateZ"
                value={backPlateZ}
                min="0.5"
                max="5"
                step="0.5"
                onChange={(e) => setBackPlateZ(e.target.value)}
              />
              <label htmlFor="backPlateZ" className="descFont">
                Height
              </label>
              <br />
            </div>
          </div>
        </div>
        <button
          id="exportButton"
          className="button"
          onClick={() => {
            exportSTL();
          }}
        >
          Export as STL
        </button>
        <br />
      </div>
      <div id="rightSide">
        <canvas ref={canvasRef} className="webgl"></canvas>
      </div>
    </div>
  );
};

export default StencilCreator;

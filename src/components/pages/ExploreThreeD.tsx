import { useState, Suspense, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Stage,
  useProgress,
  Html,
} from "@react-three/drei";
import "../pages/explorethreeD/ExploreThreeD.css";
import "../pages/home/reuse/Home.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const models3D = [
  lazy(() => import("./explorethreeD/SmartlineR3D")),
  lazy(() => import("./explorethreeD/SmartlineL3D")),
  lazy(() => import("./explorethreeD/SmartlineLX3D")),
  lazy(() => import("./explorethreeD/SmartlineH3D")),
  lazy(() => import("./explorethreeD/SmartlineC3D")),
];

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center className="loader">
      {progress} % loaded
    </Html>
  );
}

const ModelScene = ({ currentModelIndex }: { currentModelIndex: number }) => {
  const ModelComponent = models3D[currentModelIndex];
  return (
    <Suspense fallback={<Loader />}>
      <gridHelper args={[200, 50, "rebeccapurple"]} />
      <ambientLight intensity={0.85} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        shadow-mapSize={2048}
        castShadow
      />
      <Stage environment={"sunset"}>
        <Suspense fallback={<Loader />}>
          <ModelComponent />
        </Suspense>
      </Stage>
      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.75}
        scale={100}
        blur={3}
        far={4}
      />
      <OrbitControls />
    </Suspense>
  );
};

function ExploreThreeD() {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  const handleNext = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models3D.length);
  };

  const handlePrev = () => {
    setCurrentModelIndex(
      (prevIndex) => (prevIndex - 1 + models3D.length) % models3D.length
    );
  };

  return (
    <>
      <section className="model-section">
        <div className="threeD-scene-container">
          <Canvas
            dpr={[1, 2]}
            shadows="soft"
            camera={{ position: [0, 0, 10], fov: 70 }}
          >
            <Suspense fallback={<Loader />}>
              <ModelScene currentModelIndex={currentModelIndex} />
            </Suspense>
          </Canvas>
        </div>
        <div className="controls">
          <div className="button-prev" onClick={handlePrev}>
            <FaArrowCircleLeft size={"32"} color="white" />
          </div>
          <div className="button-next" onClick={handleNext}>
            <FaArrowCircleRight size={"32"} color="white" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ExploreThreeD;

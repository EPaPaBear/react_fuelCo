import { ReactNode } from "react";
import "./Dispensers.css";
import { Canvas } from "@react-three/fiber";
import { Stage, ContactShadows, CameraControls } from "@react-three/drei";

interface SummaryAnd3dView {
  children: ReactNode;
  threeDModel?: any;
  props?: any;
}

/* function Model(props: any) {
  const { scene } = useGLTF("/models/test/untitled.glb");
  return <primitive object={scene} {...props} />;
} */

function SummaryViewSection({
  children,
  threeDModel,
  props,
}: SummaryAnd3dView) {
  return (
    <section className="summary-3d-view">
      <div className="threeD-view">
        <Canvas
          dpr={[1, 2]}
          shadows="soft"
          camera={{ position: [0, 0, 5], fov: 60 }}
        >
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            shadow-mapSize={2048}
            castShadow
          />
          <CameraControls
            minDistance={0}
            enabled={true}
            verticalDragToForward={false}
            dollyToCursor={false}
            infinityDolly={false}
          />
          <Stage environment={"sunset"}>
            <primitive object={threeDModel} {...props} />
          </Stage>
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.75}
            scale={100}
            blur={3}
            far={4}
          />
        </Canvas>
      </div>
      <div className="summary">{children}</div>
    </section>
  );
}

export default SummaryViewSection;

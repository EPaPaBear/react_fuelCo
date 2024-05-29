import { useGLTF } from "@react-three/drei";

const SmartlineH3D = (props: any) => {
  const { scene } = useGLTF("/models/test/smartlineH.glb");
  return <primitive object={scene} {...props} />;
};

useGLTF.preload("/models/test/smartlineH.glb");

export default SmartlineH3D;

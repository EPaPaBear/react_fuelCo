import { useGLTF } from "@react-three/drei";

const SmartlineR3D = (props: any) => {
  const { scene } = useGLTF("/models/test/smartlineR.glb");
  return <primitive object={scene} {...props} />;
};

useGLTF.preload("/models/test/smartlineR.glb");

export default SmartlineR3D;

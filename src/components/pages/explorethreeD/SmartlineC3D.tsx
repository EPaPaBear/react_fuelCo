import { useGLTF } from "@react-three/drei";

const SmartlineC3D = (props: any) => {
  const { scene } = useGLTF("/models/test/smartlineC.glb");
  return <primitive object={scene} {...props} />;
};

useGLTF.preload("/models/test/smartlineHC.glb");

export default SmartlineC3D;

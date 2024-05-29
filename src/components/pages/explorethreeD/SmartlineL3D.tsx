import { useGLTF } from "@react-three/drei";

const SmartlineL3D = (props: any) => {
  const { scene } = useGLTF("/models/test/smartlineL.glb");
  return <primitive object={scene} {...props} />;
};

useGLTF.preload("/models/test/smartlineL.glb");

export default SmartlineL3D;

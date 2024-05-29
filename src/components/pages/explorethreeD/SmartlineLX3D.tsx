import { useGLTF } from "@react-three/drei";

const SmartlineLX3D = (props: any) => {
  const { scene } = useGLTF("/models/test/smartlineLX.glb");
  return <primitive object={scene} {...props} />;
};

useGLTF.preload("/models/test/smartlineLX.glb");

export default SmartlineLX3D;

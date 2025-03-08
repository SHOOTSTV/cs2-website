import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function WeaponModel({
  modelName,
  modelPath,
}: {
  modelName: string;
  modelPath: string;
}) {
  const model = useGLTF(modelPath);
  model.scene.position.set(0, modelName === "AK-47" ? 0 : -0.5, -0.5);

  return (
    <div className="w-full h-[300px] md:h-[500px]">
      <Canvas
        className="cursor-pointer touch-none"
        frameloop="demand"
        camera={{
          position: [0, 0, 7],
          fov: 25,
          near: 0.1,
        }}
      >
        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} />
        <primitive
          object={model.scene}
          scale={3}
          rotation={[0, Math.PI / 4, 0]}
        />
      </Canvas>
    </div>
  );
}

export default WeaponModel;

/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
// import { threed } from "../../../public/desktop_pc/scene.gltf";
const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 0}
          minPolarAngle={Math.PI / 3}
        />
        <mesh>
          <hemisphereLight intensity={2.5} color="white" groundColor="red" />
          <pointLight intensity={2} position={[10, 10, 10]} color="white" />
          <primitive
            object={computer.scene}
            scale={0.6}
            position={[4, -3.5, -2.5]}
            rotation={[0.1, -1.5, -0.1]}
          />
        </mesh>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

// const ComputersCanvas = () => {
//   return (
//     <Canvas
//       frameLoop="demand"
//       shadows
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

export default Computers;

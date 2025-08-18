import { useState, useEffect } from "react";
import * as THREE from "three";

const Star = () => {
  const [coordinates, setCoordinates] = useState<[number, number, number]>([
    0, 0, 0,
  ]);

  useEffect(() => {
    const [x, y, z] = Array(3)
      .fill(0)
      .map(() => THREE.MathUtils.randFloatSpread(300));
    setCoordinates([x, y, z]);
  }, []);

  const color = new THREE.Color().setHex(0xffe29f);
  const [x, y, z] = coordinates;

  return (
    <mesh position={[x, y, z]}>
      {/* <sphereGeometry args={[0.25, 5, 5]} /> */}
      <icosahedronGeometry args={[0.25, 24]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={4}
      />
    </mesh>
  );
};

export default Star;

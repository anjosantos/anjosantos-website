import * as THREE from "three";

const Star = () => {
  const color = new THREE.Color().setHex( 0xffe29f );;
  const [x, y, z] = Array(3)
    .fill(0)
    .map(() => THREE.MathUtils.randFloatSpread(300));

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

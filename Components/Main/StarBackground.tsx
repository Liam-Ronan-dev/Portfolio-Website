'use client';

import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

const StarBackground = (props: any) => {
  //Uses useRef hook to create a mutable object called 'ref'
  const ref: any = useRef();

  //Uses useState hook to create a state variable called sphere. The function is creating a sphere of random points using the 'random.inSphere' function from the imported library - generates 5000 random points within a radius of 1.2
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  //Uses the useFrame hook from '@react-three/fiber' to perform actions on every frame of animation loop. this function adjusts rotation on 'ref'. it subtracts a fraction of the 'delta' value(time elapsed since last frame) from rotation in the X & Y axis. Continuous rotation effect for the object
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 12;
    ref.current.rotation.y -= delta / 12;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Three JS component for rendering point clouds. takes various props including:
            - Ref: References the three js object, used to manipulate its properties
            - Positions: An array of positions representing points in 3D space
            - Stride: No. of elements between each set of c-ordinates in the 'positions' array (in this case 3 for x,y,z co-ordinates) 
            - frustumCulled: A boolean indicating whether the points outside the view frustum should be culled (not rendered)*/}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        {/* This is a material used for rendering points. It's applied to the '<Points>' component. the props include:
                - transparent: makes material transparent
                - color: sets the color of points
                - size: sets the size of the points
                - sizeAttenuation: makes points smaller as they move farther from the camera
                - DepthWrite: Disables writing to the depth buffer */}
        <PointMaterial
          transparent
          color="#FFD700"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-full fixed inset-0 z-[-1]">
    {/* Three.js component provided by react-three/fiber, sets up Three.js scene */}
    <Canvas camera={{ position: [0, 0, 1] }}>
      {/* React component - specifies a fallback prop. Meaning if the content inside the suspense has not yet loaded, nothing will be rendered(null = placeholder) */}
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;

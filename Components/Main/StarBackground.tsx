"use client";
//Summary = In summary, @react-three/fiber is a library that integrates React and Three.js, providing components and hooks for building 3D scenes in a React application. @react-three/drei extends the capabilities of @react-three/fiber with additional components and utilities for common 3D graphics tasks. The specific components imported from @react-three/drei (Points, PointMaterial, Preload) suggest the implementation of a 3D point cloud with custom materials and preloading of assets.
/* 
    - useRef = React hook that provides way to create a mutable object properties
    that persist across renders without causing re-renders when the values change 
   - Suspense = feature that allows components to suspend rendering while waiting for some async work to complete eg: lazyLoading
*/
import React, { useState, useRef, Suspense } from "react";
/* 
    - Canvas = React component that sets up a Three.js WebGL Renderer inside a react Context
    - useFrame = hook provided by @react-three/fiber allows you to perform operations in every frame of the animation loop. updates state of objects or perform other animations within the 3D Scene
*/
import { Canvas, useFrame } from "@react-three/fiber";
/* 
    - Points = Used to render point clouds in a three.js scene. Point clouds are collections of points in 3D space that can be used to represent various effects
    - PointMaterial = allows customization of the individual points in a 'Points' component
    - Preload = Used for preloading assets, textures, or models before rendering the main content. Ensures resources are loaded and ready to use when needed
*/
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
//Uses useRef hook to create a mutable object called 'ref'
  const ref: any = useRef();

    //Uses useState hook to create a state variable called sphere. The function is creating a sphere of random points using the 'random.inSphere' function from the imported library - generates 5000 random points within a radius of 1.2
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

   //Uses the useFrame hook from '@react-three/fiber' to perform actions on every frame of animation loop. this function adjusts rotation on 'ref'. it subtracts a fraction of the 'delta' value(time elapsed since last frame) from rotation in the X & Y axis. Continuous rotation effect for the object
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/18;
    ref.current.rotation.y -= delta/18;
  })


  return (
    //Group component from three js that groups multiple objects and aplly transformations to the entire group. The 'rotation' prop is used to specify a rotation for the group. The rotation is '[0, 0, Math.PI / 4]', which is a rotation around the z-axis by an angle of  π/4 radians (45 degrees).
    <group rotation={[0,0, Math.PI / 4]}>
        {/* Three JS component for rendering point clouds. takes various props including:
        - Ref: References the three js object, likely used to manipulate its properties
        - Positions: An array of positions representing points in 3D space
        - Stride: No. of elements between each set of c-ordinates in the 'positions' array (in this case 3 for x,y,z co-ordinates) 
        - frustumCulled: A boolean indicating whether the points outside the view frustum should be culled (not rendered)*/}
        <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
        >
              {/* This is a material used for rendering points. It's applied to the '<Points>' component. the props include:
            - transparent: makes material transparent
            - color: sets the color of points
            - size: sets the size of the points
            - sizeAttenuation: makes points smaller as they move farther from the camera
            - DepthWrite: Disables writing to the depth buffer */}
            <PointMaterial
                transparent
                color="$fff"
                size={0.002}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    </group>
  )
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        {/* Three.js component provided by react-three/fiber, sets up Three.js scene */}
        <Canvas camera={{position: [0, 0, 1]}}>
             {/* React component - specifies a fallback prop. Meaning if the content inside the suspense has not yet loaded, nothing will be rendered(null = placeholder) */}
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;
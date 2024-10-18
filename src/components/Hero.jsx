import { Suspense } from "react";
import HackerRoom from "./HackerRoom";
import { Leva, useControls } from "leva";
import CanvasLoader from "./CanvasLoader";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

function Hero() {
	const x = useControls("HackerRoom", {
		positionX: { value: 2.5, min: -10, max: 10 },
		positionY: { value: 2.5, min: -10, max: 10 },
		positionZ: { value: 2.5, min: -10, max: 10 },
		rotationX: { value: 0, min: -10, max: 10 },
		rotationY: { value: 0, min: -10, max: 10 },
		rotationZ: { value: 0, min: -10, max: 10 },
		scale: { value: 1, min: 0.1, max: 10 },
	});

	return (
		<section className="relative flex flex-col w-full min-h-screen">
			<div className="flex flex-col w-full gap-3 mx-auto mt-20 sm:mt-36 c-space">
				<p className="text-2xl font-medium text-center text-white sm:text-3xl font-generalsans">
					Hi, I&apos;m Ashish Kumar{" "}
					<span className="waving-hand">👋</span>
				</p>
				<p className="hero_tag text-gray_gradient">
					Student & Developer based in India.
				</p>
			</div>

			<div className="absolute inset-0 w-full h-full">
				<Leva />
				<Canvas className="w-full h-full">
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera makeDefault position={[0, 0, 30]} />
						<HackerRoom
							// scale={0.1}
							// position={[0, 0, 0]}
							// rotation={[0, 280, 0]}
							scale={[0.1, 0.1, 0.1]}
							position={[2, -8, 2]}
							rotation={[8.5, -3, 0.8]}
						/>
						<ambientLight intensity={1} />
						<directionalLight
							position={[10, 10, 10]}
							intensity={0.5}
						/>
					</Suspense>
				</Canvas>
			</div>
		</section>
	);
}

export default Hero;

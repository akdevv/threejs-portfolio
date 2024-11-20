import Button from "./Button";
import { Suspense } from "react";
import HeroCamera from "./HeroCamera";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index";
import { PerspectiveCamera } from "@react-three/drei";

import Cube from "./3d-models/Cube";
import Rings from "./3d-models/Rings";
import Target from "./3d-models/Target";
import ReactLogo from "./3d-models/ReactLogo";
import HackerRoom from "./3d-models/HackerRoom";
import CanvasLoader from "./3d-models/CanvasLoader";

function Hero() {
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	// const x = useControls("HackerRoom", {
	// 	positionX: { value: 2.5, min: -10, max: 10 },
	// 	positionY: { value: 2.5, min: -10, max: 10 },
	// 	positionZ: { value: 2.5, min: -10, max: 10 },
	// 	rotationX: { value: 0, min: -10, max: 10 },
	// 	rotationY: { value: 0, min: -10, max: 10 },
	// 	rotationZ: { value: 0, min: -10, max: 10 },
	// 	scale: { value: 1, min: 0.1, max: 10 },
	// });

	return (
		<section className="relative flex flex-col w-full min-h-screen" id="home">
			<div className="flex flex-col w-full gap-3 mx-auto mt-20 sm:mt-36 c-space">
				<p className="text-2xl font-medium text-center text-white sm:text-3xl font-generalsans">
					Hi, I&apos;m Ashish Kumar{" "}
					<span className="waving-hand">👋</span>
				</p>
				<p className="hero_tag text-gray_gradient">
					Student & Developer.
				</p>
			</div>

			<div className="absolute inset-0 w-full h-full">
				{/* Leva controls to rotate, scale & postion of 3d models from browser */}
				{/* <Leva /> */}
				<Canvas className="w-full h-full">
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera makeDefault position={[0, 0, 30]} />
						<HeroCamera isMobile={isMobile}>
							<HackerRoom
								scale={sizes.deskScale}
								position={sizes.deskPosition}
								rotation={[0, -Math.PI, 0]}
							/>
						</HeroCamera>
						<group>
							<Target position={sizes.targetPosition} />
							<ReactLogo position={sizes.reactLogoPosition} />
							<Cube position={sizes.cubePosition} />
							<Rings position={sizes.ringPosition} />
						</group>

						<ambientLight intensity={1} />
						<directionalLight
							position={[10, 10, 10]}
							intensity={0.5}
						/>
					</Suspense>
				</Canvas>
			</div>

			<div className="absolute left-0 right-0 z-10 w-full bottom-7 c-space">
				<a href="#about" className="w-fit">
					<Button
						isBeam
						name="Let's work together"
						containerClass="sm:w-fit w-full sm:min-w-96"
					/>
				</a>
			</div>
		</section>
	);
}

export default Hero;

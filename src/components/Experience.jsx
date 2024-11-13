import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants/index.js";

function Experience() {
	return (
		<section className="my-20 c-space">
			<div className="w-full text-white-600">
				<h3 className="head-text">My Work Experience</h3>

				<div className="work-container">
					<div className="work-canvas">
						<Canvas></Canvas>
					</div>
				</div>

				<div className="work-content">
					<div className="py-5 sm:py-10 sm:px-5 px-2.5">
						{workExperiences.map(
							({
								id,
								icon,
								name,
								pos,
								duration,
								title,
								animation,
							}) => (
								<div
									key={id}
									className="work-content_container group"
								>
									<div className="flex flex-col items-center justify-start h-full py-2">
										<div className="work-content_logo">
											<img
												src={icon}
												alt="logo"
												className="w-full h-full"
											/>
										</div>
										<div className="work-content_bar" />
									</div>

									<div className="sm:p-5 px-2.5 py-5">
										<p className="font-bold text-white-800">
											{name}
										</p>
										<p className="mb-5 text-sm">
											{pos} -- {duration}
										</p>
										<p className="transition duration-500 ease-in-out group-hover:text-white">
											{title}
										</p>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience;

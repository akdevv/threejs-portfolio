export const navLinks = [
	{
		id: 1,
		name: "Home",
		href: "#home",
	},
	{
		id: 2,
		name: "About",
		href: "#about",
	},
	{
		id: 3,
		name: "Work",
		href: "#work",
	},
	{
		id: 4,
		name: "Contact",
		href: "#contact",
	},
];

export const clientReviews = [
	{
		id: 1,
		name: "Emily Johnson",
		position: "Marketing Director at GreenLeaf",
		img: "assets/review1.png",
		review: "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
	},
	{
		id: 2,
		name: "Mark Rogers",
		position: "Founder of TechGear Shop",
		img: "assets/review2.png",
		review: "Adrian's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional! Fantastic work.",
	},
	{
		id: 3,
		name: "John Dohsas",
		position: "Project Manager at UrbanTech ",
		img: "assets/review3.png",
		review: "I can't say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
	},
	{
		id: 4,
		name: "Ether Smith",
		position: "CEO of BrightStar Enterprises",
		img: "assets/review4.png",
		review: "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
	},
];

export const myProjects = [
	{
		title: "Evently - Event Management App",
		desc: "Evently is a cutting-edge event management platform that simplifies the process of organizing and managing events. It offers a wide range of features, including event creation, ticketing, and attendee management.",
		subdesc:
			"Built with Next.js, TailwindCSS, and Firebase, Evently provides a seamless experience for event organizers and attendees alike. It's the perfect solution for any event, from small meetups to large conferences.",
		href: "https://event-manager-sigma.vercel.app/",
		texture: "/textures/project/project1.mp4",
		logo: "/assets/project-logo1.png",
		logoStyle: {
			backgroundColor: "#2A1816",
			border: "0.2px solid #36201D",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/spotlight1.png",
		tags: [
			{
				id: 1,
				name: "React.js",
				path: "/assets/react.svg",
			},
			{
				id: 2,
				name: "TailwindCSS",
				path: "assets/tailwindcss.png",
			},
			{
				id: 3,
				name: "TypeScript",
				path: "/assets/typescript.png",
			},
			{
				id: 4,
				name: "Framer Motion",
				path: "/assets/framer.png",
			},
		],
	},
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
	return {
		deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
		deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
		cubePosition: isSmall
			? [4, -5, 0]
			: isMobile
			? [5, -5, 0]
			: isTablet
			? [5, -5, 0]
			: [9, -5.5, 0],
		reactLogoPosition: isSmall
			? [3, 4, 0]
			: isMobile
			? [5, 4, 0]
			: isTablet
			? [5, 4, 0]
			: [12, 3, 0],
		ringPosition: isSmall
			? [-5, 7, 0]
			: isMobile
			? [-10, 10, 0]
			: isTablet
			? [-12, 10, 0]
			: [-24, 10, 0],
		targetPosition: isSmall
			? [-5, -10, -10]
			: isMobile
			? [-9, -10, -10]
			: isTablet
			? [-11, -7, -10]
			: [-13, -13, -10],
	};
};

export const workExperiences = [
	{
		id: 1,
		name: "Celebal Technologies",
		pos: "React.js Intern",
		duration: "May - Jun 2024",
		title: "Celebal Technologies is a leading software development company that specializes in building innovative solutions for businesses. As a React.js Intern, I worked on a variety of projects, including web applications and mobile apps.",
		icon: "/assets/celebal.png",
		animation: "victory",
	},
	{
		id: 2,
		name: "Sneaco",
		pos: "Software Developer Intern",
		duration: "Jul - Sep 2024",
		title: "Contributed to both frontend and backend development of the company's website, enhancing full-stack skills",
		icon: "/assets/sneaco.png",
		animation: "clapping",
	},
	{
		id: 3,
		name: "Freelancer",
		pos: "Self Employed",
		duration: "Oct 2024 - Present",
		title: "Worked on various projects, including web development, mobile app development, and UI/UX design. Developed a wide range of applications for clients across different industries.",
		icon: "/assets/fiverr.svg",
		animation: "salute",
	},
];

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
// import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Projects />
			{/* <Clients /> */}
			<Experience />
			<Contact />
			<Footer />
		</>
	);
}

export default App;

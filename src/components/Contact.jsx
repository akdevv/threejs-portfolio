// import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
	const formRef = useRef();

	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);

		try {
			// await emailjs.send(
			// 	"service_id",
			// 	"template_id",
			// 	{
			// 		from_name: form.name,
			// 		to_name: "Your Name",
			// 		from_email: form.email,
			// 		to_email: "Your Email",
			// 		message: form.message,
			// 	},
			// 	"public_key"
			// );

			setLoading(false);
			alert("Message sent successfully!");

			setForm({
				name: "",
				email: "",
				message: "",
			});
		} catch (error) {
			setLoading(false);
			console.error(error);
			alert("An error occurred. Please try again.");
		}
	};

	return (
		<section className="my-20 c-space">
			<div className="relative flex flex-col items-center justify-center min-h-screen">
				<img
					src="/assets/terminal.png"
					alt="terminal background"
					className="absolute inset-0 min-h-screen"
				/>
				<div className="contact-container">
					<h3 className="head-text">Let&apos;s talk</h3>
					<p className="mt-3 text-lg text-white-600">
						Whether you are looking to build a new website, improve
						your existing platform, or bring a unique project to
						life, I&apos;m here to help.
					</p>

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="flex flex-col mt-12 space-y-7"
					>
						<label className="space-y-3">
							<span className="field-label">Full Name</span>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								required
								className="field-input"
								placeholder="John Doe"
							/>
						</label>

						<label className="space-y-3">
							<span className="field-label">Email address</span>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								required
								className="field-input"
								placeholder="johndoe@gmail.com"
							/>
						</label>

						<label className="space-y-3">
							<span className="field-label">Your message</span>
							<textarea
								name="message"
								value={form.message}
								onChange={handleChange}
								required
								rows={5}
								className="field-input"
								placeholder="Share your thoughts or inquiries..."
							/>
						</label>

						<button
							className="field-btn"
							type="submit"
							disabled={loading}
						>
							{loading ? "Sending..." : "Send Message"}
							<img
								src="/assets/arrow-up.png"
								alt="arrow-up"
								className="field-btn_arrow"
							/>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;

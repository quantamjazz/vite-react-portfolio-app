import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
	return (
		<Router>
			<div className="container">
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/projects">Projects</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>

				<Route exact path="/" component={HomePage} />
				<Route path="/about" component={About} />
				<Route path="/projects" component={Projects} />
				<Route path="/contact" component={Contact} />
			</div>
		</Router>
	);
}

function HomePage() {
	return (
		<div>
			<h1>Welcome to my portfolio!</h1>
			<p>Here are some links to learn more about me:</p>
			<ul>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
}

export default Home;

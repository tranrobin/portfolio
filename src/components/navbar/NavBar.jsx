import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function CustomeNavBar() {
	return (
		<Navbar
			style={{ backgroundColor: "#232f3e", opacity: 0.95 }}
			expand="lg"
			variant="dark"
			fixed="top"
		>
			<div className="container">
				<Link to="/" style={{ textDecoration: "none" }}>
					<Navbar.Brand style={{ color: "#ff9900" }}>
						<strong>Minh (Mark) Pham</strong>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="basic-Navbar-nav" />
				<Navbar.Collapse id="basic-Navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="/" style={{ color: "#ff9900" }}>
							Home
						</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						<Nav.Link href="/myprj">My project</Nav.Link>
						<NavDropdown title="Blog" id="basic-nav-dropdown">
							<NavDropdown.Item href="blog-home.html">
								Blog Home
							</NavDropdown.Item>
							<NavDropdown.Item href="blog-post.html">
								Blog Post
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Portfolio" id="basic-nav-dropdown">
							<NavDropdown.Item href="#">Portfolio Overview</NavDropdown.Item>
							<NavDropdown.Item href="#">Portfolio Item</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./index.css";

export default function () {
	return (
		<Container
			fluid
			style={{ margin: "0 auto" }}
			className="form-container d-flex flex-column"
		>
			<Row className="contact-header text-center">
				<h6 className="pt-5">Contact me!</h6>
				<h1>Get in touch by saying hello!</h1>
			</Row>
			<Row className="contact-content">
				<Col md={6} className="contact-form">
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter name"
								className="form-control"
							/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Subject</Form.Label>
							<Form.Control type="text" placeholder="Enter subject" />
						</Form.Group>
						<Form.Group
							controlId="exampleForm.ControlTextarea1"
							className="pb-3"
						>
							<Form.Label>Message</Form.Label>
							<Form.Control as="textarea" rows={3} />
						</Form.Group>
						<button className="styled-button">
							<i className="bi bi-send" aria-hidden="true"></i> Send
						</button>
					</Form>
				</Col>
				<Col md={4} className="contact-info">
					<h3>Where to find me</h3>
					<p>
						I'm currently looking for new opportunities, my inbox is always
						open. Whether you have a question or just want to say hi, I'll try
						my best to get back to you!
					</p>
					<h2>Email</h2>
					<p>example@gmail.com</p>
					<h2>Phone</h2>
					<p>+1 (123) 456-7890</p>
				</Col>
			</Row>
			<Row className="contact-footer">
				<p className="text-white text-center m-0">
					© 2021 Mark Pham. All rights reserved.
				</p>
			</Row>
		</Container>
	);
}

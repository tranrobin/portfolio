import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
	return (
		<Container fluid className="" style={{ backgroundColor: "#232f3e" }}>
			<Row>
				<Col md={12} className="footer-content text-center">
					<p className="m-0" style={{ color: "#f2f2f2", opacity: "0.8" }}>
						© 2023 - Designed & Developed by{" "}
						<a href="#" style={{ color: "#ff9900" }}>
							Mark Pham
						</a>
					</p>
				</Col>
			</Row>
		</Container>
	);
}

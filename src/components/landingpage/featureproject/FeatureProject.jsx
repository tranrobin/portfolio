import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import featureImg from "../../../assets/images/Cloud 5.png";
import "./index.css";

export default function FeatureProject() {
	return (
		<Container fluid className="feature-project-container">
			<Row>
				<h2 className="text-center">Featured Project</h2>
			</Row>
			<Row className="d-flex justify-content-center">
				<Col md={6}>
					<Card className="custom-card">
						<Card.Img
							className="rounded-0 border-0 card-image"
							variant="top"
							src={featureImg}
						/>
						<Card.Body className="hover-info bottom-0">
							<Card.Title className="cus-card-title">Title</Card.Title>
							<Card.Text className="cus-card-subtitle">subTitile</Card.Text>
							<Card.Text className="cus-card-description">
								Discription
							</Card.Text>
							<Card.Link href="#" className="btn btn-warning text-black">
								View more
							</Card.Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

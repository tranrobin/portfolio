import React from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import "./recent.css";
import sql from "../../../assets/images/sql.png";
import end2end from "../../../assets/images/end2end.png";
import visual from "../../../assets/images/visual.png";
import python from "../../../assets/images/python.png";

export default function RecentWorks() {
	const recentWorks = [
		{
			title: "Project 1",
			subTitile: "This is a project 1",
			discription:
				"This is a discription, This is a discription, This is a discription, This is a discription,",
			image: end2end,
			link: "/myprj",
		},
		{
			title: "Project 2",
			subTitile: "This is a project 2",
			discription:
				"This is a discription, This is a discription, This is a discription, This is a discription,",
			image: sql,
			link: "/myprj",
		},
		{
			title: "Project 3",
			subTitile: "This is a project 3",
			discription:
				"This is a discription, This is a discription, This is a discription, This is a discription,",
			image: python,
			link: "/myprj",
		},
		{
			title: "Project 4",
			subTitile: "This is a project 4",
			discription:
				"This is a discription, This is a discription, This is a discription, This is a discription,",
			image: visual,
			link: "/myprj",
		},
	];

	return (
		<div className="half-white-half-dark">
			<Container className="pb-5">
				<Row className="text-center text-white py-5">
					<Col>
						<h6 className="fw-bolder mb-0" style={{ color: "#ff9900" }}>
							Recent Works
						</h6>
						<h2 className="fw-bolder mb-0">Here are some of my recent works</h2>
					</Col>
				</Row>
				<Col md={6} xs={12} className="offset-md-3 mb-5 mb-lg-0 text-center">
					<Row xs={1} md={2} className="g-1">
						{recentWorks.map((item, index) => (
							<Col key={index}>
								<Card className="custom-card">
									<Card.Img
										className="rounded-0 border-0 card-image"
										variant="top"
										src={item.image}
										style={{ objectFit: "cover" }}
									/>
									<Card.Body className="hover-info bottom-0">
										<Card.Title className="cus-card-title">
											{item.title}
										</Card.Title>
										<Card.Text className="cus-card-subtitle">
											{item.subTitile}
										</Card.Text>
										<Card.Text className="cus-card-description">
											{item.discription}
										</Card.Text>
										<Card.Link
											href={item.link}
											className="btn btn-warning text-black"
										>
											View more
										</Card.Link>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Col>
			</Container>
		</div>
	);
}

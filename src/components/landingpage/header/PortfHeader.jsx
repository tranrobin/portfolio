import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import pro5Img from "../../../assets/images/pbm.png";
import "./header.css";

export default function PortfHeader() {
	return (
		<header
			className="py-5 background-image "
			style={{ backgroundColor: "#000000", height: "100%" }}
		>
			<Container>
				<Row className="gx-5 align-items-center justify-content-center">
					<Col lg={8} xl={7} xxl={6}>
						<div className="my-5 text-center ">
							<h1
								className="display-5 fw-bolder mb-2"
								style={{ color: "#f2f2f2" }}
							>
								Hi, I'm Mark Pham
							</h1>
							<p
								className="lead fw-normal text-white-50 mb-4 fs-4"
								style={{ color: "#f2f2f2" }}
							>
								Business Intelligence & Analytics Enthusiast <br /> Texas
								Christian University class of 2025 (Spring) <br />
								MIS & Mathematics Major | Fintech Minor
								<br />
								Certified Scrum Product Owner (CSPO)®
							</p>
							<hr className="divider text-white" />
							<div className="d-grid gap-3 d-sm-flex justify-content-sm-center ">
								<Button
									size="lg"
									className="px-4 "
									variant="outline-light"
									href="#summary"
								>
									Let's begin
								</Button>
								<Button
									variant="outline-light"
									size="lg"
									className="px-4"
									href="#about"
								>
									About me
								</Button>
								<Button
									size="lg"
									className="px-4 me-sm-3"
									variant="outline-light"
									href="https://markpham-resume.s3.amazonaws.com/Minh_Pham+Resume.pdf"
									target="_blank"
								>
									My resume
								</Button>
							</div>
						</div>
					</Col>
				</Row>
				<Row
					className="row-cols-md-3 row-cols-1 d-flex justify-content-center "
					style={{ color: "#f2f2f2" }}
				>
					<Col md={3}>
						<Row className="text-center">
							<p className="stats-number m-0">700+</p>
						</Row>
						<Row className="text-center">
							<p className="stats-title m-0">Solved SQL problems</p>
						</Row>
					</Col>
					<Col md={3}>
						<Row className="text-center ">
							<p className="stats-number m-0">10</p>
						</Row>
						<Row className="text-center">
							<p className="stats-title m-0">Personal/Team Projects</p>
						</Row>
					</Col>
					<Col md={3}>
						<Row className="text-center">
							<p className="stats-number m-0">3</p>
						</Row>
						<Row className="text-center">
							<p className="stats-title m-0">Analytic interships</p>
						</Row>
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</header>
	);
}

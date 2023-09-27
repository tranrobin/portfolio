import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { projSummary } from "../../../data/prj_summary/prj_summary";

export default function Summary() {
	const SummaryCard = ({ title, description, icon }) => {
		return (
			<Col className="mb-5 mb-md-7 h-100">
				<Row>
					<Col xs={3} sm={3} lg={2} className=" text-center ">
						<div
							className="feature bg-gradient text-white rounded-3 mb-3 text-center"
							style={{ backgroundColor: "#232f3e" }}
						>
							<i className={icon}></i>
						</div>
					</Col>
					<Col xs={9} sm={9} lg={10} className="px-md-0 px-lg-2 px-sm-0">
						<h2 className="h5">{title}</h2>
						<p className="mb-0">{description}</p>
					</Col>
				</Row>
			</Col>
		);
	};

	return (
		<section
			className=" pb-0"
			style={{ backgroundColor: "#f2f2f2" }}
			id="summary"
		>
			<Container className="pt-3">
				<Row className="gx-5">
					<Col className=" mb-5 mb-lg-0 text-center">
						<h2 className="fw-bolder mb-0">
							Business Intelligence & Analytic skills
						</h2>
					</Col>
					<div className="d-flex justify-content-center">
						<hr
							className="mt-3 text-center"
							style={{
								color: "black",
								backgroundColor: "black",
								height: 2,
								width: "65%",
							}}
						/>
					</div>
					<Col lg={8} className="offset-lg-2">
						<Row className="gx-5 row-cols-1 row-cols-md-2 pt-2">
							{projSummary.map((item, index) => (
								<SummaryCard key={index} {...item} />
							))}
						</Row>
					</Col>
					<div className="d-flex justify-content-center">
						<hr
							className="mt-3 text-center"
							style={{
								color: "black",
								backgroundColor: "black",
								height: 2,
								width: "65%",
							}}
						/>
					</div>
				</Row>
			</Container>
		</section>
	);
}

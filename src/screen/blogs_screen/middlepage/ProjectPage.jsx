import React, { useState } from "react";
import CustomeNavBar from "../../../components/navbar/NavBar";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import google from "../../../assets/images/end2end/Google.png";
import uber from "../../../assets/images/end2end/uber.png";
import authorImg from "../../../assets/images/minhpham.jpg";

function PostCard(post) {
	return (
		<Container>
			<Row className="card-body">
				<Col>
					<Row className="image-tag">
						{console.log(post.authorImg)}
						<img src={post.authorImg} alt="project" className="rounded-img" />
						<p className="p-lead">
							{post.author} - {post.date}
						</p>
					</Row>
					<Row className="title-tag">
						<p>{post.title}</p>
					</Row>
					<Row className="description-tag">
						<p>{post.description}</p>
					</Row>
				</Col>
				<Col>
					<img src={post.postImg} alt="project" className="rounded-img" />
				</Col>
			</Row>
			<Row className="card-footer">
				<div className="card-footer-tag">
					<p>{post.tag}</p>
				</div>
				<div>
					<p className="p-lead">{post.readTime}</p>
				</div>
			</Row>
		</Container>
	);
}

export default function ProjectPage() {
	return (
		<Container fluid style={{ backgroundColor: "#f2f2f2" }}>
			<CustomeNavBar />
			<div className="header-title">
				<h2>
					<span style={{ color: "#ff9900" }}>Check out</span> my projects!
				</h2>
			</div>
			<Container id="blog-card-left-section">
				<Row>
					<Col md={10} className="">
						<Row className="px-md-3 big-title">End-to-End Projects</Row>
						<Container className="py-3 ps-3">
							<Container>
								<Col>
									<Row className="card-body">
										<Col md={8} className="pe-3">
											<Row className="left-section">
												<p className="header-tag">
													{" "}
													<img
														src={authorImg}
														alt="project"
														className="rounded-img"
													/>{" "}
													Mark Pham - May 29, 2023
												</p>
												<p className="post-title">
													Uber GCP End-to-End Business Intelligence Engineering
													Project
												</p>
												<p className="post-subTitle">
													Designed and implemented an end-to-end ETL data
													pipeline integrating Uber ride-sharing data into
													Google Big Query data warehouse by utilizing Python,
													Google Cloud Storage, Google Mage compute engine, and
													Mage.ai data engineering tools
												</p>
												<Row className="card-footer">
													<Col className="">
														<p className="p-2 m-0 d-md-flex d-none">
															<span className="rounded-pill-text">
																Data Engineering
															</span>
														</p>
													</Col>
													<Col className="reading-time-italic d-inline-flex justify-content-center align-items-center p-2">
														<p className="m-0">12 min read</p>
													</Col>
												</Row>
											</Row>
										</Col>
										<Col md={4} className="d-md-block d-none ps-5">
											<img src={google} alt="project" className="prj-img" />
										</Col>
									</Row>
								</Col>
							</Container>
							<div className="break-post-line" />
							<Container className="pt-5 pb-0">
								<Col>
									<Row className="card-body">
										<Col md={8} className="pe-3">
											<Row className="left-section">
												<p className="header-tag">
													{" "}
													<img
														src={authorImg}
														alt="project"
														className="rounded-img"
													/>{" "}
													Mark Pham - May 29, 2023
												</p>
												<p className="post-title">
													Spotify AWS End-to-End Business Intelligence
													Engineering Project
												</p>
												<p className="post-subTitle">
													Built an automated ETL pipeline using Python, Crawler,
													and Glue to extract Spotify data via Spotify API,
													orchestrated a daily triggered system implementing
													CloudWatch and Lambda functions to facilitate
													automatic data integration into AWS S3 storage
												</p>
												<Row className="card-footer">
													<Col className="">
														<p className="p-2 m-0 d-md-flex d-none">
															<span className="rounded-pill-text">
																Data Engineering
															</span>
														</p>
													</Col>
													<Col className="reading-time-italic d-inline-flex justify-content-center align-items-center p-2">
														<p className="m-0">12 min read</p>
													</Col>
												</Row>
											</Row>
										</Col>
										<Col md={4} className="d-md-block d-none ps-5">
											<img src={uber} alt="project" className="prj-img" />
										</Col>
									</Row>
								</Col>
							</Container>
							<div className="break-post-line-none" />
						</Container>
						<Row className="px-md-3 big-title">SQL Solved Problems</Row>
						<Container className="py-3 ps-3">
							<Container>
								<Col>
									<Row className="card-body">
										<Col md={8} className="pe-3">
											<Row className="left-section">
												<p className="header-tag">
													{" "}
													<img
														src={authorImg}
														alt="project"
														className="rounded-img"
													/>{" "}
													Mark Pham - May 29, 2023
												</p>
												<p className="post-title">
													Uber GCP End-to-End Business Intelligence Engineering
													Project
												</p>
												<p className="post-subTitle">
													Designed and implemented an end-to-end ETL data
													pipeline integrating Uber ride-sharing data into
													Google Big Query data warehouse by utilizing Python,
													Google Cloud Storage, Google Mage compute engine, and
													Mage.ai data engineering tools
												</p>
												<Row className="card-footer">
													<Col className="">
														<p className="p-2 m-0 d-md-flex d-none">
															<span className="rounded-pill-text">
																Data Engineering
															</span>
														</p>
													</Col>
													<Col className="reading-time-italic d-inline-flex justify-content-center align-items-center p-2">
														<p className="m-0">12 min read</p>
													</Col>
												</Row>
											</Row>
										</Col>
										<Col md={4} className="d-md-block d-none ps-5">
											<img src={google} alt="project" className="prj-img" />
										</Col>
									</Row>
								</Col>
							</Container>
							<div className="break-post-line" />
							<Container className="pt-5 pb-0">
								<Col>
									<Row className="card-body">
										<Col md={8} className="pe-3">
											<Row className="left-section">
												<p className="header-tag">
													{" "}
													<img
														src={authorImg}
														alt="project"
														className="rounded-img"
													/>{" "}
													Mark Pham - May 29, 2023
												</p>
												<p className="post-title">
													Spotify AWS End-to-End Business Intelligence
													Engineering Project
												</p>
												<p className="post-subTitle">
													Built an automated ETL pipeline using Python, Crawler,
													and Glue to extract Spotify data via Spotify API,
													orchestrated a daily triggered system implementing
													CloudWatch and Lambda functions to facilitate
													automatic data integration into AWS S3 storage
												</p>
												<Row className="card-footer">
													<Col className="">
														<p className="p-2 m-0 d-md-flex d-none">
															<span className="rounded-pill-text">
																Data Engineering
															</span>
														</p>
													</Col>
													<Col className="reading-time-italic d-inline-flex justify-content-center align-items-center p-2">
														<p className="m-0">12 min read</p>
													</Col>
												</Row>
											</Row>
										</Col>
										<Col md={4} className="d-md-block d-none ps-5">
											<img src={uber} alt="project" className="prj-img" />
										</Col>
									</Row>
								</Col>
							</Container>
							<div className="break-post-line" />
							<Container className="pt-5 pb-0">
								<Col>
									<Row className="card-body">
										<Col md={8} className="pe-3">
											<Row className="left-section">
												<p className="header-tag">
													{" "}
													<img
														src={authorImg}
														alt="project"
														className="rounded-img"
													/>{" "}
													Mark Pham - May 29, 2023
												</p>
												<p className="post-title">
													Spotify AWS End-to-End Business Intelligence
													Engineering Project
												</p>
												<p className="post-subTitle">
													Built an automated ETL pipeline using Python, Crawler,
													and Glue to extract Spotify data via Spotify API,
													orchestrated a daily triggered system implementing
													CloudWatch and Lambda functions to facilitate
													automatic data integration into AWS S3 storage
												</p>
												<Row className="card-footer">
													<Col className="">
														<p className="p-2 m-0 d-md-flex d-none">
															<span className="rounded-pill-text">
																Data Engineering
															</span>
														</p>
													</Col>
													<Col className="reading-time-italic d-inline-flex justify-content-center align-items-center p-2">
														<p className="m-0">12 min read</p>
													</Col>
												</Row>
											</Row>
										</Col>
										<Col md={4} className="d-md-block d-none ps-5">
											<img src={uber} alt="project" className="prj-img" />
										</Col>
									</Row>
								</Col>
							</Container>
							<div className="break-post-line" />
							<Container className="pt-5 pb-0">
								<Col>
									<Row className="card-body">
										<Col md={8} className="pe-3">
											<Row className="left-section">
												<p className="header-tag">
													{" "}
													<img
														src={authorImg}
														alt="project"
														className="rounded-img"
													/>{" "}
													Mark Pham - May 29, 2023
												</p>
												<p className="post-title">
													Spotify AWS End-to-End Business Intelligence
													Engineering Project
												</p>
												<p className="post-subTitle">
													Built an automated ETL pipeline using Python, Crawler,
													and Glue to extract Spotify data via Spotify API,
													orchestrated a daily triggered system implementing
													CloudWatch and Lambda functions to facilitate
													automatic data integration into AWS S3 storage
												</p>
												<Row className="card-footer">
													<Col className="">
														<p className="p-2 m-0 d-md-flex d-none">
															<span className="rounded-pill-text">
																Data Engineering
															</span>
														</p>
													</Col>
													<Col className="reading-time-italic d-inline-flex justify-content-center align-items-center p-2">
														<p className="m-0">12 min read</p>
													</Col>
												</Row>
											</Row>
										</Col>
										<Col md={4} className="d-md-block d-none ps-5">
											<img src={uber} alt="project" className="prj-img" />
										</Col>
									</Row>
								</Col>
							</Container>
							<div className="break-post-line-none" />
						</Container>
					</Col>
					<Col md={2} className="d-md-block d-none">
						<p>Spy scroll or sth</p>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

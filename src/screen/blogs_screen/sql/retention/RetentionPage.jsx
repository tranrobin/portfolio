import React from "react";
import NavBar from "../../../../components/navbar/NavBar";
import { Link } from "react-scroll";
import retentionImg from "../../../../assets/images/retention.jpg";

import { Container, Col, Row, Table, Card, Tab, Nav } from "react-bootstrap";
import {
	sqlCode,
	Table1,
	Table2,
	Table3_1,
	Table3_2,
	Table4,
	Table5,
	Table6,
	Table7,
} from "../../../../data/sql/retention/playerlogin";
import "./index.css";

function CodeCreator({ data }) {
	return (
		<div className="code-section">
			<Container>
				<Card className="code-card bg-secondary">
					<Card.Header className="code-header">
						<small className="text-white text-body-secondary">MySQL</small>
					</Card.Header>
					<Card.Body className="bg-dark">
						<pre>
							<code className="text-white">{data}</code>
						</pre>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}

function TableCreator({ data }) {
	return (
		<div className="mt-3" style={{ maxHeight: "300px", overflowY: "auto" }}>
			<table className="table table-striped table-bordered table-hover table-responsive-sm">
				{data.tableTitle === "" ? null : (
					<caption>
						<code className="text-success">
							<strong>{data.tableTitle}</strong>
						</code>
					</caption>
				)}
				<thead>
					<tr>
						{data.tableCol.map(
							(col, index) => (
								console.log(Object.values(col)[0]),
								(
									<th key={index} className="text-lg-center">
										{Object.values(col)[0]}
									</th>
								)
							)
						)}
					</tr>
				</thead>
				<tbody>
					{data.tableData.map((player, index) => (
						<tr key={index}>
							{player.map((data, index) => (
								<td key={index} className="text-lg-center">
									{Object.values(data)[0]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default function RetentionPage() {
	return (
		<div>
			<NavBar />
			<Container className="my-1">
				<Row>
					<Col md={3} className="d-none d-md-block sticky-scrollspy">
						<h6>Content Table</h6>
						<ul className="p-0">
							<li className="cus-nav-item">
								<Link
									to="title"
									spy={true}
									smooth={true}
									offset={-80}
									duration={50}
									activeClass="scroll-active "
								>
									First Day Retention Rate
								</Link>
							</li>
							<li className="cus-nav-item">
								<Link
									to="prompt"
									spy={true}
									smooth={true}
									offset={-80}
									duration={50}
									activeClass="scroll-active "
								>
									Prompt
								</Link>
							</li>
							<li>
								<Link
									to="tbls&data"
									spy={true}
									smooth={true}
									offset={-80}
									duration={50}
									activeClass="scroll-active "
									className="cus-nav-item"
								>
									Tables and Data
								</Link>
								<ul>
									<li className="cus-nav-item">
										<Link
											to="undData"
											spy={true}
											smooth={true}
											offset={-80}
											duration={50}
											activeClass="scroll-active "
										>
											Understand the data
										</Link>
									</li>
									<li className="cus-nav-item">
										<Link
											to="prblState"
											spy={true}
											smooth={true}
											offset={-80}
											duration={50}
											activeClass="scroll-active "
										>
											Problem Statement
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link
									to="solution"
									spy={true}
									smooth={true}
									offset={-80}
									duration={50}
									activeClass="scroll-active "
									className="cus-nav-item"
								>
									Solution
								</Link>
								<ul>
									<li className="cus-nav-item">
										<Link
											to="step1"
											spy={true}
											smooth={true}
											offset={-80}
											duration={50}
											activeClass="scroll-active "
										>
											Step 1: Ranking
										</Link>
									</li>
									<li className="cus-nav-item">
										<Link
											to="step2"
											spy={true}
											smooth={true}
											offset={-80}
											duration={50}
											activeClass="scroll-active "
										>
											Step 2: Self join with cte
										</Link>
									</li>
									<li className="cus-nav-item">
										<Link
											to="step3"
											spy={true}
											smooth={true}
											offset={-80}
											duration={50}
											activeClass="scroll-active "
										>
											Step 3: Calculation with ROUND(), COUNT() and CONCAT()
										</Link>
									</li>
									<li className="cus-nav-item">
										<Link
											to="end2end1"
											spy={true}
											smooth={true}
											offset={-80}
											duration={50}
											activeClass="scroll-active"
										>
											End-to-End Code
										</Link>
									</li>
									<li className="cus-nav-item">
										<Link
											to="res"
											spy={true}
											smooth={true}
											offset={-80}
											duration={50}
											activeClass="scroll-active "
										>
											Result
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link
									to="optimi"
									spy={true}
									smooth={true}
									offset={-80}
									duration={50}
									activeClass="scroll-active "
									className="cus-nav-item"
								>
									Query optimizations Solutions
								</Link>
								<ul>
									<li className="cus-nav-item">
										<Link
											to="step1Opti"
											spy={true}
											smooth={true}
											offset={-80}
											duration={50}
											activeClass="scroll-active "
										>
											Step 1: Create <code>second_login_date</code> using LEAD()
										</Link>
									</li>
									<li className="cus-nav-item">
										<Link
											to="step2Opti"
											spy={true}
											smooth={true}
											offset={-80}
											duration={50}
											activeClass="scroll-active "
										>
											Step 2: Count returning user using CASE WHEN + COUNT()
										</Link>
									</li>
									<li className="cus-nav-item">
										<Link
											to="end2end2"
											spy={true}
											smooth={true}
											offset={-80}
											duration={50}
											activeClass="scroll-active "
										>
											End-to-End Optimization code
										</Link>
									</li>
									<li className="cus-nav-item">
										<Link
											to="res2"
											spy={true}
											smooth={true}
											offset={-80}
											duration={50}
											activeClass="scroll-active "
										>
											Result
										</Link>
									</li>
								</ul>
							</li>
							<li className="cus-nav-item">
								<Link
									to="conclusion"
									spy={true}
									smooth={true}
									offset={-80}
									duration={50}
									activeClass="scroll-active "
								>
									Conclusion
								</Link>
							</li>
							<li className="cus-nav-item">
								<Link
									to="sqlTableScript"
									spy={true}
									smooth={true}
									offset={-80}
									duration={50}
									activeClass="scroll-active "
								>
									SQL Tables Scripts
								</Link>
							</li>
						</ul>
					</Col>

					<Col md={8} xs={12} className=" px-lg-5 px-2">
						<section id="title" className="text-center">
							<h1 className="mt-3 amazon-color-black">
								First Day Retention Rate{" "}
							</h1>
							<p className="text-lg-start py-3">
								By <span className="amazon-color-orange">Mark Pham</span>{" "}
								<span>|</span> on <span>May 20, 2023</span> <span>|</span>{" "}
								Topic:{" "}
								<span className="amazon-color-orange fw-semibold">
									DENSE_RANK vs RANK
								</span>
								, <span className="amazon-color-orange fw-semibold">CTE</span>,{" "}
								<span className="amazon-color-orange fw-semibold">
									Subquery
								</span>
								,{" "}
								<span className="amazon-color-orange fw-semibold">
									Window function
								</span>
								,{" "}
								<span className="amazon-color-orange fw-semibold">
									Self-join
								</span>
								,{" "}
								<span className="amazon-color-orange fw-semibold">
									Date manipulation
								</span>
								,{" "}
								<span className="amazon-color-orange fw-semibold">
									Aggregate function
								</span>
							</p>
							<img
								className="img-fluid rounded-3"
								src={retentionImg}
								alt="retentionImg"
							/>
						</section>

						<section id="prompt" className="mt-3">
							<p>
								<b>Prompt:</b> Imagine you work for a video games company. You
								were tasked to calculate the first-day retention rate of a group
								of video game players.{" "}
								<span className=" amazon-color-black-text">
									The first-day retention occurs when a player logs in 1 day
									after their first-ever log-in
								</span>
								. Return the proportion of players who meet this definition
								divided by the total number of players (in percentage, round by
								the second decimal)
							</p>
						</section>
						<section id="tbls&data">
							<h6>Tables and Data</h6>
						</section>
						<section id="undData">
							<h6>Understanding the data</h6>
							<p>
								Before we begin, let's take a moment to understand the data we
								are working with. We have a table called{" "}
								<code className="amazon-color-black ">players_logins</code>{" "}
								which contains the login information of the players. This table
								has the following columns:
								<li className="mx-4">
									<code className="amazon-color-black ">player_id</code>: the
									unique identifier of the player
								</li>
								<li className="mx-4">
									<code className="amazon-color-black ">login_date</code>: the
									date when the player logged in
								</li>
							</p>
						</section>
						<section id="prblState">
							<h6>The Problem Statement</h6>
							<p>
								Now that we know about the data, let's understand the problem
								statement. We need to calculate the first-day retention rate of
								the players.{" "}
								<span className="amazon-color-black-text">
									This rate is calculated by dividing the number of players who
									logged in 1 day after their first-ever log-in by the total
									number of players.
								</span>
							</p>
							<TableCreator data={Table1} />
						</section>
						<section id="solution">
							<h4>Solution</h4>
							<p>Let's take a look at the tables again: </p>
							<div className="code-section">
								<Container>
									<Card className="code-card bg-secondary">
										<Card.Header className="code-header">
											<small className="text-white text-body-secondary">
												MySQL
											</small>
										</Card.Header>
										<Card.Body className="bg-dark">
											<code className="text-white">
												<pre>SELECT * FROM players_login</pre>
											</code>
										</Card.Body>
									</Card>
								</Container>
							</div>
							<TableCreator data={Table2} />
						</section>
						<section id="step1" className="pt-3">
							<h4>
								<b>Step 1: Ranking (DENSE_RANK vs RANK) </b>
							</h4>
							<p>
								The first step is to determine the 1st login days and the 2nd
								login days by each of the{" "}
								<code className="amazon-color-black-text">player_id</code>,
								therefore, the idea is to use a{" "}
								<code className="amazon-color-black-text">RANK() OVER</code>{" "}
								(Order by/Partition by) function to rank the{" "}
								<code className="amazon-color-black-text">login_date</code> for
								each <code className="amazon-color-black-text">player_id</code>{" "}
								accordingly. From there, query out the 1st and 2nd login date by
								the 'Ranking'
							</p>
							<p>
								<strong className="amazon-color-black-text">Edge cases:</strong>{" "}
								there will be a chance that the player login multiple times in
								the first days, therefore we will need to use a{" "}
								<code className="amazon-color-black-text">DENSE_RANK()</code>{" "}
								function instead of{" "}
								<code className="amazon-color-black-text">RANK()</code>. If not,
								some players will mistakenly not have a 2nd day.
							</p>
							<CodeCreator data={sqlCode.code1.discrip} />
							<Row>
								<Col md={6} className="pe-lg-0">
									<TableCreator data={Table3_1} />
								</Col>
								<Col md={6} className="ps-lg-0">
									<TableCreator data={Table3_2} />
								</Col>
							</Row>
							<p>
								Now, let's move the previous block of code into a common table
								expression, called cte:
							</p>
							<CodeCreator data={sqlCode.code2.discrip} />
						</section>
						<section id="step2" className="pt-3">
							<h4>Step 2: Self join with cte</h4>
							<p>
								Okay now, we can perform a self-join on cte in order to match
								the 1st login day with the second login day.
							</p>

							<p>
								<strong className="amazon-color-black-text">Edge case:</strong>{" "}
								Be careful when considering a join. Some player_id might not
								have a second login date (meaning that they only log in once and
								never log in again)
							</p>
							<CodeCreator data={sqlCode.code3.discrip} />
							<p className="mb-0">
								<code className="amazon-color-black-text">
									a.ranking = b.ranking - 1
								</code>{" "}
								to match the 1<sup>st</sup> date with the 2<sup>nd</sup> login
								date
								<br />
								<p>
									<code className="fst-italic" style={{ color: "#f843fe" }}>
										DATEDIFF
									</code>
									<code className="amazon-color-black-text">
										(b.login_date, a.login_date) = 1
									</code>{" "}
									ensures that the player logs in 1 day after their first-ever
									log-in.
								</p>
							</p>
							<TableCreator data={Table4} />
							<p>
								The result is incredible! Now we just need to count the number
								of players that have the 'second login' column as non-null
								before dividing by the total number of players. In this case,
								the result should be 3/6 = 50%
							</p>
							<TableCreator data={Table5} />
						</section>
						<section id="step3">
							<h4>Step 3: Calculation with ROUND(), COUNT() and CONCAT()</h4>
							<p>
								Now, calculate the metrics using a subquery, add rounding and %
								formatting with{" "}
								<code className="amazon-color-black-text">CONCAT()</code> and{" "}
								<code className="amazon-color-black-text">ROUND()</code>
							</p>
							<CodeCreator data={sqlCode.code4.discrip} />
						</section>
						<section id="end2end1">
							<h6 className="my-3">End-to-End Code:</h6>
							<CodeCreator data={sqlCode.code5.discrip} />
						</section>
						<section id="res" className="pt-3">
							<h6>Result: </h6>
							<p>
								Execution time: 0.02456 seconds
								<br />
								First day retention rate: 50.00%
								<br />
								The result is as expected 50%. Hooray, but is this the most
								optimized solution?{" "}
								<span className="amazon-color-black-text">
									Let's think about this again.
								</span>
							</p>
						</section>
						<section id="optimi">
							<h3>Query optimizations Solutions</h3>
							<p>
								Since we use a self-join in step 2, our query may be running at
								the speed of O(N<sup>2</sup>). The DBSM has to scan the CTE
								twice to execute the join.
							</p>
							<p>
								If we can eliminate this join and still achieve the expected
								result, it's possible that we can make our query run at o(N)
								since the DBSM only has to scan the CTE once.
								<br />
								<span className="text-success">
									A possible solution is to use LEAD() (Partition by/Order by)
								</span>
							</p>
						</section>
						<section id="step1Opti">
							<h4>
								Step 1: Create <code>second_login_date</code> using LEAD()
							</h4>
							<CodeCreator data={sqlCode.code6.discrip} />
							<TableCreator data={Table6} />
							<p>
								Now put the query above to a subquery and filter out the result
								where ranking = 1
							</p>
							<CodeCreator data={sqlCode.code7.discrip} />
							<TableCreator data={Table7} />
						</section>
						<section id="step2Opti" className="pt-3">
							<h4>Step 2: Count returning user using CASE WHEN + COUNT()</h4>
							<p>
								Now it's the difficult part, we will use a COUNT() + Case When
								function to count only the player_id when the different of the
								first_login_date and second_login_date = 1. The logic is as
								follow:
								<li className="mx-4"> If True, Return player_id </li>
								<li className="mx-4"> If False, Return Null</li>
							</p>
							<CodeCreator data={sqlCode.code8.discrip} />
							<p>
								The result is as expected 3 out of 6 players log in
								consecutively on the first and second days. Now add a little bit
								of formatting and calculation, and we will get the final result.
							</p>
						</section>
						<section id="end2end2">
							<h6>End to End Optimization code</h6>
							<CodeCreator data={sqlCode.code9.discrip} />
						</section>
						<section className="pt-3">
							<h6 id="res2">Result: </h6>
							<p>
								Execution time: 0.01352 seconds
								<br />
								First day retention rate: 50.00%
							</p>
						</section>
						<section id="conclusion">
							<h6>Conclusion:</h6>
							<p>
								Regarding this problem, the key takeaways is as follow:
								<li className="mx-4">
									Understand Window function: LEAD(), LAG(), DENSE_RANK vs
									RANK()
								</li>
								<li className="mx-4">
									Understand self-join, left join vs. inner join
								</li>
								<li className="mx-4">Understand CTE and subqueries</li>
								<li className="mx-4">Date manipulation function</li>
								<li className="mx-4">Aggregate function</li>
							</p>
						</section>
						<section id="sqlTableScript">
							<h6>SQL Tables Scripts</h6>
							<CodeCreator data={sqlCode.code10.discrip} />
						</section>
					</Col>
					<Col lg={1} className="d-none d-lg-block sticky-follow pe-0">
						<h6>Follow me!</h6>
						<section id="social">
							<Row>
								<a
									href="https://www.linkedin.com/in/minhbphamm/"
									target="_blank"
								>
									<i className="bi bi-linkedin"> LinkedIn</i>
								</a>
							</Row>
							<Row>
								<a href="https://github.com/MarkPhamm" target="_blank">
									<i className="bi bi-github"> Github</i>
								</a>
							</Row>
						</section>
						<hr></hr>
						<section>
							<h6>Read more</h6>
							<p>blogs...</p>
						</section>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

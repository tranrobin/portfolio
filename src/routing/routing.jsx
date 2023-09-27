// import { createBrowserRouter } from "react-router-dom";
// import LandingPage from "../screen/landing_screen/LandingPage";
// import RetentionPage from "../screen/blogs_screen/sql/retention/RetentionPage";

// import React from "react";

// export const routing = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <LandingPage />,
// 	},
// 	{
// 		path: "/myprj",
// 		element: <LandingPage />,
// 		children: [
// 			{
// 				path: "myprj/sql/retention",
// 				element: <RetentionPage />,
// 			},
// 		],
// 	},
// ]);

import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "../screen/landing_screen/LandingPage";
import RetentionPage from "../screen/blogs_screen/sql/retention/RetentionPage";
import ProjectPage from "../screen/blogs_screen/middlepage/ProjectPage";

function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="myprj" element={<ProjectPage />} />

				{/* child path of myprj/sql */}
				<Route path="myprj/sql" element={<RetentionPage />} />
				<Route path="myprj/sql/retention" element={<RetentionPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;

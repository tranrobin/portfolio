import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomeNavBar from "../../components/navbar/NavBar";
import PortfHeader from "../../components/landingpage/header/PortfHeader";
import Summary from "../../components/landingpage/summary/Summary";
import RecentWorks from "../../components/landingpage/recentworks/recentworks";
import FeaturedProject from "../../components/landingpage/featureproject/FeatureProject";
import ContactUs from "../../components/landingpage/contactus/ContactUs";

export default function LandingPage() {
	return (
		<div>
			<CustomeNavBar />
			<PortfHeader />
			<Summary />
			<FeaturedProject />
			<RecentWorks />
			<ContactUs />
		</div>
	);
}

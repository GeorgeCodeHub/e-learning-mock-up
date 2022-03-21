import React from "react";
import { Modal } from "antd";

function About() {
	Modal.info({
		title: "About",
		content: (
			<div className="course-welcome">
				This application was created in order to showcase an e-learning website
				and how its design works.
			</div>
		),
		onOk() {},
	});
}

export default About;

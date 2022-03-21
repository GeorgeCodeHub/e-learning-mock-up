import React from "react";
import { Row, Col, Calendar } from "antd";
import {} from "@ant-design/icons";

class Assignments extends React.Component {
	render() {
		return (
			<div className="site-layout-background" style={{ height: 645 }}>
				<Row justify="space-between">
					<Col>
						<h1 style={{ color: "#9bcfff", fontSize: 30 }}>Calendar</h1>
					</Col>
					<Col></Col>
				</Row>
				<Calendar style={{ height: 400 }} />
			</div>
		);
	}
}

export default Assignments;

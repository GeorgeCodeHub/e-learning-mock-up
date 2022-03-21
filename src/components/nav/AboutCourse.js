import React from "react";
import { Row, Col, Button, Table, Card } from "antd";

const columns = [
	{
		title: "Name",
		dataIndex: "name",
		key: "key",
		width: 90,
	},
	{
		title: "Rank",
		dataIndex: "rank",
		key: "key",
		width: 100,
	},
	{
		title: "Office",
		dataIndex: "office",
		key: "key",
		width: 90,
	},
	{
		title: "Phone",
		dataIndex: "phone",
		key: "key",
		width: 95,
	},
	{
		title: "Email",
		dataIndex: "email",
		key: "key",
		width: 100,
		render: (text) => <Button type="link">{text}</Button>,
	},
];

class AboutCourse extends React.Component {
	render() {
		return (
			<div className="site-layout-background" style={{ height: 645 }}>
				<Row justify="space-between">
					<Col>
						<h1 style={{ color: "#9bcfff", fontSize: 30 }}>Information</h1>
					</Col>
					<Col></Col>
				</Row>
				<Card title="Course Info">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
					iaculis justo eget lectus congue ornare. Phasellus non quam at turpis
					bibendum eleifend. Duis tortor massa, gravida eu est ut, sagittis
					venenatis risus. Aliquam suscipit turpis vitae elit eleifend viverra.
					In sit amet nunc aliquam, malesuada felis venenatis, hendrerit odio.
					Sed tempus odio quis sollicitudin rhoncus. Ut iaculis egestas purus,
					id ultricies felis suscipit at. Nulla imperdiet tincidunt dignissim.
				</Card>

				<Card title="Lecturers">
					<Table
						columns={columns}
						dataSource={data}
						bordered
						pagination={false}
						scroll={{ y: 180 }}
					/>
				</Card>
			</div>
		);
	}
}

var data = [
	{
		key: 1,
		submitted: null,
		name: "Konstantopoulos Charalampos",
		email: "ivenetis@email.gr",
		rank: "Assistant Professor",
		office: "104/GL126",
		phone: "+30 210 123456789",
	},
	{
		key: 2,
		submitted: true,
		name: "Konstantopoulos Charalampos",
		email: "pkonstan@email.gr",
		rank: "Assistant Professor",
		office: "104/GL126",
		phone: "",
	},
];

export default AboutCourse;

import React from "react";
import { Row, Col, Button, Table } from "antd";
import {
	CheckOutlined,
	CloseOutlined,
	UploadOutlined,
} from "@ant-design/icons";

const columns = [
	{
		title: "Submitted",
		dataIndex: "submitted",
		key: "key",
		render: (text) => {
			if (text === true) return <CheckOutlined style={{ color: "#19F901" }} />;
			else if (text === false)
				return <CloseOutlined style={{ color: "#F90101" }} />;
			else return <>-</>;
		},
	},
	{
		title: "Title",
		dataIndex: "title",
		key: "key",
	},

	{
		title: "Due Date",
		dataIndex: "date",
		key: "key",
	},
	{
		title: "Score",
		dataIndex: "score",
		key: "key",
	},
	{
		title: "Actions",
		key: "action",
		render: (text, record) => (
			<Button type="link">
				<UploadOutlined />
			</Button>
		),
	},
];

class Assignments extends React.Component {
	render() {
		return (
			<div className="site-layout-background" style={{ height: 645 }}>
				<Row justify="space-between">
					<Col>
						<h1 style={{ color: "#9bcfff", fontSize: 30 }}>Assignments</h1>
					</Col>
					<Col></Col>
				</Row>
				<Table
					columns={columns}
					dataSource={data}
					bordered
					pagination={false}
					scroll={{ y: 480 }}
				/>
			</div>
		);
	}
}

var data = [
	{
		key: 1,
		submitted: null,
		title: "Assignment 8",
		date: "12-05-2020",
		score: "-",
	},
	{
		key: 2,
		submitted: true,
		title: "Assignment 7",
		date: "05-04-2020",
		score: 10,
	},
	{
		key: 3,
		submitted: false,
		title: "Assignment 6",
		date: "31-09-2019",
		score: 7,
	},
	{
		key: 4,
		submitted: true,
		title: "Assignment 5",
		date: "09-05-2018",
		score: 5,
	},
	{
		key: 5,
		submitted: true,
		title: "Assignment 4",
		date: "01-03-2018",
		score: "-",
	},
];

export default Assignments;

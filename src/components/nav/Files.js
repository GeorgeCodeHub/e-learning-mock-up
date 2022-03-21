import React from "react";
import { Row, Col, Button, Table, Input } from "antd";
import {
	DownloadOutlined,
	FilePdfOutlined,
	FolderOutlined,
	FileImageOutlined,
} from "@ant-design/icons";

const { Search } = Input;

const columns = [
	{
		title: "Type",
		dataIndex: "type",
		key: "key",
		width: 80,
	},
	{
		title: "Name",
		dataIndex: "name",
		key: "key",
	},
	{
		title: "Size",
		dataIndex: "size",
		key: "key",
	},
	{
		title: "Date",
		dataIndex: "date",
		key: "key",
	},
	{
		title: "Actions",
		key: "action",
		render: (text, record) => (
			<Button type="link">
				<DownloadOutlined />
			</Button>
		),
	},
];

class Files extends React.Component {
	render() {
		return (
			<div className="site-layout-background" style={{ height: 645 }}>
				<Row justify="space-between">
					<Col>
						<h1 style={{ color: "#9bcfff", fontSize: 30 }}>Files</h1>
					</Col>
					<Col>
						<Search
							shape="round"
							size="large"
							placeholder="Search"
							enterButton
							onSearch={(value) => console.log(value)}
							style={{ width: 200 }}
						/>
					</Col>
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
		type: <FilePdfOutlined />,
		name: "File 1",
		size: "120KB",
		date: "12-05-2020",
	},
	{
		key: 2,
		type: <FilePdfOutlined />,
		name: "File 2",
		size: "12KB",
		date: "05-04-2020",
	},
	{
		key: 3,
		type: <FileImageOutlined />,
		name: "File 3",
		size: "2MB",
		date: "31-09-2019",
	},
	{
		key: 4,
		type: <FilePdfOutlined />,
		name: "File 4",
		size: "23MB",
		date: "09-05-2018",
	},
	{
		key: 5,
		type: <FolderOutlined />,
		name: "File 5",
		size: "100MB",
		date: "01-03-2016",
	},
];

export default Files;

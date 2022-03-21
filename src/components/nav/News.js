import React from "react";
import { Row, Col, Button, Space, List, Card, Divider, Input } from "antd";
import { SortAscendingOutlined } from "@ant-design/icons";

const { Search } = Input;

class News extends React.Component {
	render() {
		if (this.props.courseDetails)
			data = data.map(
				(item) =>
					(item = { ...item, teacher: this.props.courseDetails.teacher })
			);
		return (
			<div className="site-layout-background" style={{ height: 645 }}>
				<Row justify="space-between">
					<Col>
						<h1 style={{ color: "#9bcfff", fontSize: 30 }}>News</h1>
					</Col>
					<Col>
						<Space>
							<Button size="large" type="primary">
								<SortAscendingOutlined style={{ fontSize: 20 }} />
							</Button>
							<Search
								shape="round"
								size="large"
								placeholder="Search"
								enterButton
								onSearch={(value) => console.log(value)}
								style={{ width: 200 }}
							/>
						</Space>
					</Col>
				</Row>
				<List
					style={{ overflowY: "auto", height: "530px" }}
					bordered={true}
					split={false}
					dataSource={data}
					renderItem={(item) => (
						<List.Item>
							<Card
								title={item.title}
								extra={item.date}
								hoverable
								style={{
									width: "100%",
									background: "#9bcfff",
								}}
							>
								{item.content}
								<Divider />
								<p
									style={{
										position: "absolute",
										bottom: 0,
										right: 25,
									}}
								>
									Published by {item.teacher}
								</p>
							</Card>
						</List.Item>
					)}
				/>
			</div>
		);
	}
}

var data = [
	{
		title: "Announcement 1",
		date: "12-5-2020",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie pharetra magna a dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		teacher: "",
	},
	{
		title: "Announcement 2",
		date: "9-5-2020",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie pharetra magna a dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		teacher: "",
	},
	{
		title: "Announcement 3",
		date: "11-3-2020",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie pharetra magna a dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		teacher: "",
	},
	{
		title: "Announcement 4",
		date: "12-12-2020",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie pharetra magna a dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
		teacher: "",
	},
];

export default News;

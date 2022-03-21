import React from "react";

import { Layout, Row, Col, Menu, Button, List, Card, Divider } from "antd";
import { UserOutlined, HomeFilled } from "@ant-design/icons";

//Redux libraries
import { connect } from "react-redux";
import {
	setCourseDetails,
	setUserData,
	setMenuKey,
} from "../../actions/userActions";
import store from "../../store";

import firebaseConfig from "../../utils/fbConfig";

import About from "../user/About";

const { Header, Content } = Layout;

const { SubMenu } = Menu;

class MainPage extends React.Component {
	render() {
		return (
			<Layout>
				<Layout className="site-layout">
					<Header className="site-layout-header">
						<Row justify="space-between">
							<Col style={{ marginLeft: 24, background: "#1890ff" }}>
								<h3 style={{ color: "#fff" }}>Logo</h3>
							</Col>
							<Col>
								<Button
									shape="round"
									style={{ textAlign: "center", width: 50, color: "#1890ff" }}
									onClick={() => this.props.history.push("/home")}
								>
									<HomeFilled />
								</Button>
							</Col>
							<Col style={{ marginRight: 24 }}>
								<Menu mode="horizontal" style={{ color: "#1890ff" }}>
									<SubMenu
										icon={<UserOutlined />}
										title={this.props.userData.firstName}
									>
										<Menu.Item key="About" onClick={About}>
											About
										</Menu.Item>
										<Menu.Item
											key="SignOut"
											onClick={() => {
												firebaseConfig.auth().signOut();
											}}
										>
											Sign out
										</Menu.Item>
									</SubMenu>
								</Menu>
							</Col>
						</Row>
					</Header>
					<Content>
						<div className="site-layout-background">
							<h2>
								Welcome,
								<p style={{ color: "gray" }}>
									{this.props.userData.firstName} {this.props.userData.lastName}
								</p>
							</h2>
							<Row justify="space-between">
								<Col>
									<h3 style={{ float: "left" }}>Your courses:</h3>
								</Col>
								<Col>
									<Button type="link" style={{ float: "right" }}>
										Add/Remove Courses
									</Button>
								</Col>
							</Row>
							<List
								style={{ overflowY: "auto", height: "680px" }}
								bordered={true}
								split={false}
								dataSource={data}
								renderItem={(item) => (
									<List.Item>
										<Card
											title={item.title}
											extra={`Semester: ${item.semester}`}
											hoverable
											style={{
												width: "100%",
												background: "#9bcfff",
											}}
											onClick={() => {
												store.dispatch(setCourseDetails(item));
												this.props.history.push("/course");
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
					</Content>
				</Layout>
			</Layout>
		);
	}
}

const data = [
	{
		title: "Algorithms",
		rooms: "TH221,LAB122",
		teacher: "Konstantopoulos Charalampos",
		semester: 1,
		content: "This is course is about algorithms and parallel programming.",
	},
	{
		title: "Machine Learning",
		rooms: "TH211,LAB124",
		teacher: "Tsichritzis Georgios",
		semester: 1,
		content: "This is course is about Machine Learning and Deep Learning.",
	},
	{
		title: "Computer Vision",
		rooms: "TH201,LAB102",
		teacher: "Tsichritzis Georgios",
		semester: 2,
		content: "This is course is about Image Processing and Computer Vision.",
	},
	{
		title: "Adaptive Teaching Systems",
		rooms: "TH229,LAB129",
		teacher: "Virvou Maria",
		semester: 2,
		content:
			"This is course is about application development and adaptiveness.",
	},
	{
		title: "Artificial Intelligence",
		rooms: "TH121,LAB202",
		semester: 1,
		teacher: "Panagiotopoulos Theodoropoulos",
		content:
			"This is course is about artificial Intelligence and automated systems.",
	},
	{
		title: "Mathematics",
		teacher: "Tsikouras Panagiotis",
		rooms: "TH110,LAB102",
		semester: 1,
		content: "This is course is about math and statistics.",
	},
];

//Used to get state from global store
const mapStateToProps = (state) => {
	return {
		userData: state.userReducer.userData,
		menuKey: state.userReducer.menuKey,
	};
};

export default connect(mapStateToProps, {
	setUserData,
	setMenuKey,
})(MainPage);

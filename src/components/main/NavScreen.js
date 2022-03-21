import React from "react";

import { Layout, Row, Col, Menu, Button, Card } from "antd";
import { UserOutlined, HomeFilled, LeftOutlined } from "@ant-design/icons";

//Redux libraries
import { connect } from "react-redux";
import { setMenuKey, setCourseDetails } from "../../actions/userActions";
import store from "../../store";

import firebaseConfig from "../../utils/fbConfig";

import ContinueTo from "../nav/ContinueTo";
import News from "../nav/News";
import Files from "../nav/Files";
import Assignments from "../nav/Assignments";
import CalendarDate from "../nav/CalendarDate";
import AboutCourse from "../nav/AboutCourse";

import About from "../user/About";
import { Redirect } from "react-router";

const { Header, Content } = Layout;

const { SubMenu } = Menu;

class NavScreen extends React.Component {
	renderCurrentView = () => {
		switch (this.props.menuKey) {
			case "ContinueTo":
				return <ContinueTo />;
			case "News":
				return <News />;
			case "Files":
				return <Files />;
			case "Assignments":
				return <Assignments />;
			case "Calendar":
				return <CalendarDate />;
			case "Info":
				return <AboutCourse />;
			default:
				return;
		}
	};

	goToPrevious = () => {
		if (this.props.menuKey === "ContinueTo") this.props.history.push("/home");
		else store.dispatch(setMenuKey("ContinueTo"));
	};

	render() {
		if (this.props.courseDetails)
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
								<Row justify="space-between">
									<Col>
										<h1>{this.props.courseDetails.title}</h1>
										<br />
										<Button
											onClick={() => this.goToPrevious()}
											className="go-back-button"
										>
											<LeftOutlined />
										</Button>
									</Col>
									<Col>
										<Card
											style={{
												height: 130,
												border: "1px solid #9bcfff",
												borderRadius: 15,
											}}
										>
											<h2>Rooms: {this.props.courseDetails.rooms}</h2>

											<h2>Semester: {this.props.courseDetails.semester}</h2>
										</Card>
									</Col>
								</Row>

								{this.renderCurrentView()}
							</div>
						</Content>
					</Layout>
				</Layout>
			);
		else return <Redirect to="/home" />;
	}
}

//Used to get state from global store
const mapStateToProps = (state) => {
	return {
		userData: state.userReducer.userData,
		menuKey: state.userReducer.menuKey,
		courseDetails: state.userReducer.courseDetails,
	};
};

export default connect(mapStateToProps, {
	setMenuKey,
	setCourseDetails,
})(NavScreen);

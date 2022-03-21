import React from "react";
import { Row, Col, Button, Space } from "antd";
import {
	ExclamationCircleFilled,
	FolderFilled,
	EditFilled,
	CalendarFilled,
	InfoCircleFilled,
} from "@ant-design/icons";

//Redux libraries
import { connect } from "react-redux";
import { setMenuKey, setCourseDetails } from "../../actions/userActions";
import store from "../../store";

class ContinueTo extends React.Component {
	goTo = (target) => {
		store.dispatch(setMenuKey(target));
	};
	render() {
		const buttonStyle = {
			width: 100,
			height: 100,
			borderRadius: 20,
			boxShadow: "3px 5px #1870ff",
		};
		return (
			<div className="site-layout-background" style={{ height: 645 }}>
				<br />
				<br />
				<h1 style={{ textAlign: "center", color: "#9bcfff", fontSize: 30 }}>
					CONTINUE TO:
				</h1>
				<br />
				<Row gutter={[48, 16]} justify="center">
					<Col>
						<Space size={50}>
							<Button
								type="primary"
								size="large"
								style={buttonStyle}
								onClick={() => {
									this.goTo("News");
								}}
							>
								<ExclamationCircleFilled style={{ fontSize: 45 }} />
							</Button>

							<Button
								type="primary"
								size="large"
								style={buttonStyle}
								onClick={() => {
									this.goTo("Files");
								}}
							>
								<FolderFilled style={{ fontSize: 45 }} />
							</Button>

							<Button
								type="primary"
								size="large"
								style={buttonStyle}
								onClick={() => {
									this.goTo("Assignments");
								}}
							>
								<EditFilled style={{ fontSize: 45 }} />
							</Button>
						</Space>
					</Col>
				</Row>
				<br />

				<Row gutter={[48, 16]} justify="center">
					<Col>
						<Space size={50}>
							<Button
								type="primary"
								size="large"
								style={buttonStyle}
								onClick={() => {
									this.goTo("Calendar");
								}}
							>
								<CalendarFilled style={{ fontSize: 45 }} />
							</Button>

							<Button
								type="primary"
								size="large"
								style={buttonStyle}
								onClick={() => {
									this.goTo("Info");
								}}
							>
								<InfoCircleFilled style={{ fontSize: 45 }} />
							</Button>
						</Space>
					</Col>
				</Row>
			</div>
		);
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
})(ContinueTo);

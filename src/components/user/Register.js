import React, { useCallback } from "react";

import { Form, Input, Button, Card, Layout, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Link, withRouter } from "react-router-dom";
import firebaseConfig, { firestore } from "../../utils/fbConfig";

const { Header } = Layout;

function Register({ history }) {
	const [form] = Form.useForm();

	const onFinish = useCallback(
		async (event) => {
			if (event.password === event.confirm) {
				const { firstName, lastName, email, password } = event;

				try {
					await firebaseConfig
						.auth()
						.createUserWithEmailAndPassword(email, password)
						.then(() => {
							//create custom list of users
							firestore
								.collection("users")
								.doc(firebaseConfig.auth().currentUser.uid)
								.set({
									firstName: firstName,
									lastName: lastName,
									email: email,
									learner_type: "Visual",
									progress: 0,
									quiz1: 0,
									quiz2: 0,
									quiz3: 0,
									quiz4: 0,
								})
								.then(() => {
									message.success("Your account has been created!");
									history.push("/");
								})
								.catch((error) => {
									console.log(
										"Something went wrong with added user to firestore: ",
										error
									);
								});
						});
					form.resetFields();
				} catch (error) {
					message.error("Invalid inputs.");
				}
			} else {
				message.error("Passwords do not match.");
			}
		},
		[history, form]
	);

	return (
		<div style={{ background: "#bababa", flex: 1 }}>
			<Header style={{ background: "#1890ff" }}>
				<h3 className="logo">Logo</h3>
			</Header>
			<Card title="Register" className="login-card">
				<Form
					name="normal_register"
					className="login-form"
					form={form}
					onFinish={onFinish}
				>
					<Form.Item
						name="firstName"
						rules={[
							{
								required: true,
								message: "This field is required!",
							},
						]}
					>
						<Input placeholder="First Name" />
					</Form.Item>
					<Form.Item
						name="lastName"
						rules={[
							{
								required: true,
								message: "This field is required!",
							},
						]}
					>
						<Input placeholder="Last Name" />
					</Form.Item>
					<Form.Item
						name="email"
						rules={[
							{
								type: "email",
								required: true,
								message: "Please input a valid E-mail!",
							},
						]}
					>
						<Input
							prefix={<UserOutlined className="site-form-item-icon" />}
							placeholder="E-mail"
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: "This field is required!",
							},
						]}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item
						name="confirm"
						rules={[
							{
								required: true,
								message: "This field is required!",
							},
						]}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Confirm"
						/>
					</Form.Item>
					<Form.Item>
						<Link to="/">Go back</Link>
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
						>
							Register
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
}

export default withRouter(Register);

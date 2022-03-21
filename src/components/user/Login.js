import React, { useCallback, useContext } from "react";

import { Form, Input, Button, Checkbox, Card, Layout, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Link, Redirect } from "react-router-dom";

import { AuthContext } from "../../utils/auth";
import firebaseConfig from "../../utils/fbConfig";

const { Header } = Layout;

function Login({ history }) {
	const [form] = Form.useForm();

	const onFinish = useCallback(
		async (event) => {
			const { email, password } = event;

			try {
				await firebaseConfig.auth().signInWithEmailAndPassword(email, password);

				form.resetFields();
				history.push("/home");
				message.success("Logged in successfully!");
			} catch (error) {
				message.error("Invalid inputs.");
			}
		},
		[history, form]
	);

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to="/home" />;
	}

	return (
		<Layout style={{ background: "#bababa", flex: 1 }}>
			<Header style={{ background: "#1890ff" }}>
				<h3 className="logo">Logo</h3>
			</Header>
			<Card title="Login" className="login-card">
				<Form
					name="normal_login"
					className="login-form"
					form={form}
					initialValues={{
						remember: false,
					}}
					onFinish={onFinish}
				>
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								message: "Please input your Email!",
							},
						]}
					>
						<Input
							prefix={<UserOutlined className="site-form-item-icon" />}
							placeholder="Username"
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your Password!",
							},
						]}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item>
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
						>
							Log in
						</Button>
					</Form.Item>
					<div style={{ float: "right" }}>
						Not registered? <Link to="/register">Sign Up</Link>
					</div>
				</Form>
			</Card>
		</Layout>
	);
}

export default Login;

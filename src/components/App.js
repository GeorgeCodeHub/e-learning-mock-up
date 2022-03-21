import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import ProtectedRoute from "../utils/ProtectedRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./user/Login";
import Register from "./user/Register";
import MainPage from "./main/MainPage";
import NavScreen from "./main/NavScreen";

import { AuthProvider } from "../utils/auth";

//Import Redux Store
import { Provider } from "react-redux";
import store from "../store";

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AuthProvider>
					<Router>
						<div className="App">
							<Switch>
								<Route exact path="/" component={Login} />
								<Route exact path="/register" component={Register} />

								<ProtectedRoute path="/home" component={MainPage} />
								<ProtectedRoute path="/course" component={NavScreen} />
							</Switch>
						</div>
					</Router>
				</AuthProvider>
			</Provider>
		);
	}
}

export default App;

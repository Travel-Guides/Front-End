import React from "react";
// COMPONENTS
import HomePage from "./components/HomePage/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import G_Form from "./components/SignUp/G_Form";
import Login from "./components/LogIn/Login";
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Img/Logo";

// ROUTES
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

// STYLES
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/register" component={G_Form} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;

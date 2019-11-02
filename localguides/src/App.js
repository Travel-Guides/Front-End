import React from "react";
// COMPONENTS
import Dashboard from "./components/Guide/Dashboard/Dashboard";
import G_Form from "./components/Guide/SignUp/G_Form";
import Login from "./components/Guide/LogIn/Login";

// ROUTES
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

// STYLES
import "./App.css";

function App() {
  return (
    <div className="App">
      LOCAL GUIDES
      <Dashboard />
      <G_Form />
      <Login />
    </div>
  );
}

export default App;

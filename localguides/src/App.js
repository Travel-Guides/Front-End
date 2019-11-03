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
      <Route exact path="/register" component={G_Form} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;

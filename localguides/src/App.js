import React, { useState, useEffect } from "react";
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
  const [loginPopup, setLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const toggleLogin = e => {
    if (e) {
      e.preventDefault();
    }
    setLoginPopup(!loginPopup);
  };

  return (
    <div className="App">
      <Navbar toggleLogin={toggleLogin} />
      <Logo />
      {loginPopup ? (
        <Login
          toggleLogin={toggleLogin}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : null}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/register" component={G_Form} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;

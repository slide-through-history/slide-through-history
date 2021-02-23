import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";


function LandingPage() {
  return (
    <div className="min-h-screen w-screen">
      <h2 className="welcome-container text-center">
        Pick a date and learn something new!
                
        Sign up to -insert benefit of signing up here-.
        <br />
        {/* <Login /> */}
        <br />
        <p className="smaller-font">
        Don't have an account?{" "}
        <Link className="smaller-font" to="/Signup">
          SIGN UP
        </Link>{" "}
        </p>
        </h2>
    </div>
    );
  
}

export default LandingPage;

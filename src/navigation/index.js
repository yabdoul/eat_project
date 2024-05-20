import React,{useState,useEffect} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {CustomRoute} from "../components";
import { HomePage } from "../pages";
const MainNavigator = () => {
    return (
        <Router >
            <Switch>
            <CustomRoute  path="/home" component={HomePage} /> 
            </Switch>
        </Router>
    );
}

export default MainNavigator;
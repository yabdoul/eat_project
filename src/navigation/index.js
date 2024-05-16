import React,{useState,useEffect} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {CustomRoute} from "../components";
import {VerifPage} from "../pages";
const MainNavigator = () => {
 
   
   
    return (
        <Router >
            <Switch>
            <CustomRoute exacts path="/checkemail" component={VerifPage} />
 
          
              {/* <CustomRoute 
            exacts ={
                (MobileCheck||TabletCheck)?false:true
            }           
            mobile={
                (MobileCheck||TabletCheck)?true:false
            } 
            protect
            path="/newcom" 
            component={NewCom}/>  */}
        
            
            </Switch>
        </Router>
    );
}

export default MainNavigator;
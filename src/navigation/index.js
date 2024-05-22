import React,{useState,useEffect} from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {CustomRoute} from "../components";
import {FoodPage, HomePage, PlacePage} from "../pages";
const MainNavigator = () => {
    const [MobileCheck,SetMobileCheck] = useState(null) ; 
    const [TabletCheck,SetTabletCheck] = useState(null) ; 
    const isMobile = () => {
        return window.innerWidth < 768; 
      };
      const isTablet = () => {
        return window.innerWidth >= 768 && window.innerWidth < 1024; 
      };
      const handleResize = () => {
        SetMobileCheck(isMobile());
        SetTabletCheck(isTablet());
    };
      useEffect(() => {
        handleResize() ; 
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return (
        <Router >
            <Switch>
              <CustomRoute exacts path="/places" component={PlacePage}/>
              <CustomRoute exacts path="/foodpage" component={FoodPage}/>
            <CustomRoute exacts path="/home" component={HomePage} />
            </Switch>
        </Router>
    );
}

export default MainNavigator;
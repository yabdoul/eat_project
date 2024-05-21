import React, { useEffect } from "react";
import './styles.scss';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux"
import Header from "../Header";
import { Footer } from "..";
// import { BlueStrip, Footer, GreenStrip, Header, MobileFooter, MobileNav, SideBar } from '../../components';
const Component = ({ component: Component, protect, exacts,mobile,...rest }) => {
const { user } = useSelector(state => state.user)
const RenderComponent = (props) => {
        return (
            <div>
                <Header /> 
                <Component {...props} />
                <Footer/> 
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={props => (
                protect ?
                user?.isAuthenticated=== true ?
                        <RenderComponent {...props} />
                        :
                        <Redirect to="/landingpage" />
                    :
                    <RenderComponent {...props} />
            )} />
    );
}

export default Component;
import React from "react"; 
import {Navigate} from "react-router-dom";
import { isLogin } from "../helpers/helper";

const PublicRoute = ({component:Component, ...rest}) => {
   
    if(isLogin()){
        return <Navigate to="/surveybuilder" />        
    }

    return <Component {...rest} />
}

export default PublicRoute;
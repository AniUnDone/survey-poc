import React from "react";
import Navbar from "../components/Navbar";
import SurveyTypes from "../components/survey/SurveyTypes";

class HomePage extends React.Component{
   render(){
       return(
           <div>
                <Navbar></Navbar> 
                <div className="body">
                    <h1 className="text-white font-semibold text-4xl text-center">Types of Survey Questions</h1>
                    <SurveyTypes></SurveyTypes>
                </div> 
           </div>
       )
   }
}

export default HomePage
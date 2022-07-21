import React from "react"; 
import Navbar from "../components/Navbar";
import store from "../helpers/store";

class SurveyBuilder extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {/* Navbar */}
                <Navbar storeState={store.getState()}/>
                
                
                {/* Main */}
                <div className="container my-12 mx-auto px-4 md:px-12">
                    <div className="max-w rounded overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">1. Question 1</div>
                            <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                    <div className="max-w rounded overflow-hidden shadow-lg bg-white mt-8">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">2. Question 2</div>
                            <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default SurveyBuilder
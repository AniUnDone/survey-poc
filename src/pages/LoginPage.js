import React from "react"; 
import Navbar from "../components/Navbar";
import {Link, Navigate} from "react-router-dom";
import {login} from "../helpers/helper";
import store from "../helpers/store";

class LoginPage extends React.Component{

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        login();
        store.dispatch({
            type: "userLoggedIn",
            payload: {
                description: "user loggedin"
            }
        })
        return <Navigate to="/surveybuilder"/>
    }

    render(){
        return(
            <div>
                {/* Navbar */}
                <Navbar/>

                {/* Form */}
                <div className="container my-6 mx-auto px-4 md:px-12">
                    <div className="columns-1 max-w-md mx-auto">
                        <label className="block">
                            <span className="text-white font-semibold text-lg">Username</span>
                            <input type="text" className="mt-1 block w-full border-0" placeholder=""/>
                        </label>
                        <label className="block my-4">
                            <span className="text-white font-semibold text-lg">Password</span>
                            <input type="password" className="mt-1 block w-full border-0" placeholder=""/>
                        </label>
                        <div className="flex my-6 space-x-2 justify-center">
                            <button onClick={this.handleSubmit} type="button" className="border-0 inline-block px-6 py-2.5 bg-white text-[#62c5e5] font-semibold text-md leading-tight uppercase rounded shadow-md hover:bg-white hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out">
                                <Link to="/surveybuilder">Login</Link>
                            </button>
                        </div>
                    </div>
                    
              
                </div>
            </div>
        )
    }
}

export default LoginPage
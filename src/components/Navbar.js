import React, {useState} from "react";
import {Link, Navigate} from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {logout} from "../helpers/helper";

const Navbar = (props) => {
    
    const [nav, setNav] = useState(false)

    const handleNAv = () => {
        setNav(!nav)
    }
    
    const showLoginLink = () =>{
        if(props.storeState){
            if(props.storeState.length > 0){
                if(props.storeState[0].loggedIn)
                    return(
                        <ul className="flex text-white font-semibold text-lg hidden md:flex">
                            <Link className="p-4" onClick={handleSubmit} to="/login">Logout</Link>
                        </ul>
                    )
                else return(
                    <ul className="flex text-white font-semibold text-lg hidden md:flex">
                    <Link className="p-4" to="/login">Login</Link>
                    <Link className="p-4" to="/about">About Us</Link>
                    <Link className="p-4" to="/contact">Contact Us</Link>
                </ul>
                )
            }                
            else return(
                <ul className="flex text-white font-semibold text-lg hidden md:flex">
                    <Link className="p-4" onClick={handleSubmit} to="/login">Logout</Link>
                </ul>
            )
        }else return(
            <ul className="flex text-white font-semibold text-lg hidden md:flex">
            <Link className="p-4" to="/login">Login</Link>
            <Link className="p-4" to="/about">About Us</Link>
            <Link className="p-4" to="/contact">Contact Us</Link>
        </ul>)
        
    }

    const handleSubmit = () => {
        logout();
        Navigate('/login');
    }
    
    return(
        <div>
            <nav className="flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px]">
                {/* Desktop Nav */}
                <Link to="/"><img className="h-24" src="/logo.jpg"  alt="logo"/></Link>
                {showLoginLink()}

                {/* Hamburger/Close icon */}
                <div onClick={handleNAv} className="block md:hidden">
                    {!nav ? <AiOutlineClose size="20" />: <AiOutlineMenu size="20"/>}
                </div>

                {/* Mobile Nav */}
                <div className={!nav ? "fixed left-0 top-0 w-[60%]" : "fixed left-[-100%] hidden"}>
                    {/* <div><a href=""><img className="h-24" src="/logo.jpg"  alt="logo"/></a></div> */}
                    <ul className="pt-24 uppercase text-white font-bold text-lg block md:hidden">
                        <li className="p-4">Login</li>
                        <li className="p-4">About Us</li>
                        <li className="p-4">Contact Us</li>
                    </ul>
                </div>
            </nav>                            
        </div>
        )
    }

export default Navbar
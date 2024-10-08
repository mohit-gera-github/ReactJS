import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
const Header = () => {

    const [btnNameReact,setBtnNameReact] = useState("login");
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                      btnNameReact == "login" ? setBtnNameReact("Logout") :setBtnNameReact("login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
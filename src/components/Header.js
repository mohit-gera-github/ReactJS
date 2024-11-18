import { useState,useContext} from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    const {LoggedInUser} = useContext(UserContext);
    const [btnNameReact,setBtnNameReact] = useState("login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img src={LOGO_URL} className="w-56" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus ? "✅" : "❎"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={()=>{
                      btnNameReact == "login" ? setBtnNameReact("Logout") :setBtnNameReact("login");
                    }}>{btnNameReact}</button>
                    <li className="px-4 font-bold">{LoggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
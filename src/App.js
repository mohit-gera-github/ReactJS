import React,{lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
// import Grocery from "./components/Grocery.js";

// Lazy Loader 
const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRoute = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[ 
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/About",
                element:(
                    <Suspense fallback={<h1>Loading..</h1>}><About/></Suspense>
                )
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:(
                <Suspense fallback={<h1>Loading..</h1>}><Grocery/> </Suspense>
                )
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>);
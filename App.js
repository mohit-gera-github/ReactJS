import React from "react";
import ReactDOM  from "react-dom";




// React functional Component 
const Title = () => (
    <div id="title">
         <h1>This is Component composition</h1>
    </div>
);

const HeadingComponent = () => ( 
    <div id="container">
        <Title/>
        <h1>
            Namaste react functional Component
        </h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);




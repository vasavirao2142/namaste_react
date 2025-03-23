/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";



// // const heading=React.createElement('h1',{id:"heading"},'This is a sample heading'); // it retruns a react element or a javascript object 
// const root=ReactDOM.createRoot(document.getElementById('root'));// it creates a root element


// // Jsx in another Way

// // Jsx is transpiled into React.createElement and then into Js For browser to Understand
// //Transpilation is done By babel

// // Jsx => React.createElement=> React Element  =>Js Object =>Html Element
// const Jsxheading=(
// <h1>Hi this is a Jsx</h1>)
// // root.render(heading) // it converts react element into a h1 tag
// root.render(Jsxheading) // Here we are rendering a react element

// // Functional Element Example
// // Const heading=(
// {/* <h1>This is example of react Element </h1> */}
//     //)

//    // ()=>means return


// const HeadingComponent=()=>{
//     return(
//         <div>Hi This is A functional Component</div>
//     )
// }
// root.render(<HeadingComponent/>) // Here we are Rendering a Functional component not an element








const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
import React from "react";
import ReactDOM from 'react-dom/client'


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

const RestarauntCard = () => {
    return (
        <div className="card">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/2/16/1c06f98e-3bf2-49d0-beda-5cd9e5a60155_7687f083-ea02-40dd-96c7-ea409a4037af.jpg" alt="res-img" className="res-logo" />
            <h3>Bawarchi</h3>
            <h4>5 stars</h4>
            <h4>$400 for two</h4>
            <h4>20-25 min</h4>

        </div>
    )
}

const Body = () => {
    return (
        <div className="body-container">
            <div className="search-conatiner">
                <p>Search</p>
            </div>
            <div className="res-container">
                <RestarauntCard />
               
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header-container">

            <img src='https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-logo-by-abhishek-choudhary-dribbble.jpg' alt="logo" className="logo-img" />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}


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
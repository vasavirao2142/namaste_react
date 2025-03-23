import React from "react";
import RestarauntCard from "./RestarauntCard";
import { resList } from "../utils/mockData";

const Body = () => {

    
    return (
        <div className="body-container">
            <div className="search-conatiner">
                <p>Search</p>
            </div>
            <div className="res-container">
                {resList.map((restaurant)=>{
                    return <RestarauntCard key={restaurant?.data?.id}  resData={restaurant}/>
                })}
                
               
            </div>
        </div>
    )
}

export default Body;
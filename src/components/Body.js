import React, { useEffect, useState } from "react";
import RestarauntCard from "./RestarauntCard";
import { resList } from "../utils/mockData";

const Body = () => {

    const [restaurantList,setRestarauntlist]=useState(resList);


    useEffect(()=>{
        console.log("UseEffect called")
    },[])


    console.log("outside the useEffect");
    
    
    return (
        <div className="body-container">
            <div className="search-conatiner">
                <button className="toprated-btn" onClick={()=>{
                    const filteredData=restaurantList.filter((item)=>item.data.avgRating>4)
                    setRestarauntlist(filteredData)
                }}>Top Rated Restaraunts</button>
            </div>
            <div className="res-container">
                {restaurantList.map((restaurant)=>{
                    return <RestarauntCard key={restaurant?.data?.id}  resData={restaurant}/>
                })}
                
               
            </div>
        </div>
    )
}

export default Body;
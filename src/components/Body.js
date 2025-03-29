import React, { useEffect, useState } from "react";
import RestarauntCard from "./RestarauntCard";
import Shimmer from "./Shimmer";

const Body = () => {

    const [restaurantList,setRestarauntlist]=useState([]);


    useEffect(()=>{
        fetchData()
    },[])


    const fetchData=async()=>{

        const data=await fetch('https://www.swiggy.com/mapi/restaurants/list/v5?lat=17.38430&lng=78.45830&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1');
        const json=await data.json();
        setRestarauntlist(json?.data?.cards) 


    }

    if(restaurantList.length===0){
        return <Shimmer/>
    }

  
    
    
    return (
        <div className="body-container">
            <div className="search-conatiner">
                <button className="toprated-btn" onClick={()=>{
                    const filteredData=restaurantList.filter((item)=>item.data.avgRating>4)
                    setRestarauntlist(filteredData)
                }}>Top Rated Restaraunts</button>
            </div>
            <div className="res-container">
                {restaurantList.slice(3).map((item)=>{

                      console.log(item?.card?.card?.info)
                     return <RestarauntCard key={item?.card?.card?.id}  resData={item?.card?.card?.info}/>
                })}
                
               
            </div>
        </div>
    )
}

export default Body;
/* eslint-disable react/prop-types */
import React from 'react'
const RestarauntCard = ({resData}) => {
    

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
      } = resData;
    return (
        <div className="card">
             <img
        className="res-logo"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${cloudinaryImageId}`}/>
            <h3>{name}</h3>
             <h5>{cuisines.join(',')}</h5> 
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>

        </div>
    )
}

export default RestarauntCard
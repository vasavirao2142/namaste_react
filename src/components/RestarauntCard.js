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
      } = resData?.data ||{};
    return (
        <div className="card">
            <img
        className="res-logo"
        alt="res-logo"
        src={cloudinaryImageId
        }/>
            <h3>{name}</h3>
            <h5>{cuisines.join(',')}</h5>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>

        </div>
    )
}

export default RestarauntCard
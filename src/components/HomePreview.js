import React, { useEffect, useState } from "react";
import heart from '../assets/heart.svg'
import heartFull from '../assets/heart-full.png'


export default function HomePreview({ city, state, picture, country, id, updateWishlist }) {
 
  const [miles, setMiles] = useState((Math.random() * 100).toFixed(0))
  const [price, setPrice] = useState((Math.random() * 1000).toFixed(0))
  const [rating, setRating] = useState((Math.random() * 5).toFixed(2))
  const [bookmarked, setBookmarked] = useState(false)

  const handleBookmark = (e) => {
    e.stopPropogation();
    updateWishlist(id) 
    setBookmarked(prevMode => !prevMode)
  }


  return (
    <div className="relative mx-1 my-4 flex flex-col items-start w-72">
      <img className="w-70 rounded-lg home-img" src={picture} alt="img" />
      <div className="flex justify-between items-center w-full mt-2">
        <p className="font-semibold text-sm truncate">
          {city}, {state}, {country},
        </p>
        <p>&#9733;{rating} </p>
      </div>
      <p className="text-gray-500">{miles} miles</p>
      <p className="text-gray-500">Oct 3-8</p>
      <span className="flex">
        <p className="font-semibold">${price}&nbsp;</p>
        <p>night</p>
      </span>
      <button onClick={(e) => handleBookmark(e)}>
        <img className=" absolute top-4 right-4 w-6 h-6" src={bookmarked ? heartFull : heart} alt={''} />
      </button>
    </div>
  );
}

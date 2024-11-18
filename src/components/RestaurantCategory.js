import React, { useState } from 'react'
import Itemlist from './Itemlist';

const RestaurantCategory = ({ data , showItems,setShowIndex}) => {
  handleClick =()=>{
    setShowIndex();
  }

  return (
    <div>
      <div className='w-6/12 bg-gray-50 shadow-lg  mx-auto my-4 p-4 '>

        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
          <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
          <span >⬇️</span>
        </div>

        { showItems && <Itemlist items={data.itemCards} />}
      </div>


    </div>
  )
}

export default RestaurantCategory
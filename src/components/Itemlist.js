import React from 'react'
import { CDN_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const Itemlist = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem =(item)=>{
       dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between items-center"
        >
          <div className="flex-grow mr-4">
            <div className="py-2">
              <span className="font-semibold text-lg">{item.card.info.name}</span>
              <span className="text-md"> -₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
            </div>
            <p className="text-sm leading-tight">{item.card.info.description}</p>
          </div>
          <div className="flex-shrink-0">
            <div className='absolute'>
              <button className='bg-black text-white rounded-md  shadow-lg' onClick={()=>handleAddItem(item)}>Add +</button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-24 h-24 object-cover rounded-md"
              alt={item.card.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;

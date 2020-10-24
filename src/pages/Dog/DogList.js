import React, { useEffect, useState } from 'react'

import { listDog } from "../../_actions/dog_action";
import { useDispatch } from "react-redux";

export default function DogList() {
    const dispatch = useDispatch();

    const [items, setItems] = useState([]);

useEffect(() => {

    dispatch(listDog()).then(response => {
        if (response.payload) {
            setItems([...response.payload, {
                id : response.payload.id,
                nose : response.payload.nose     
            }]);            
            
        } else {
          alert('에러발생');
        }
      }) 
  },
   [])
 

    return (
        <div>
          <ul>
        { items.map(item => (
          <li key={item.id}>    
          <img style={{ width: '100%' }} alt="thumbnail" src={ item.nose }/>         
          </li>
        ))}
             </ul>
             
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { listDog } from "../../_actions/dog_action";
import { useDispatch , useSelector } from "react-redux";


export default function DogList() {


    const dispatch = useDispatch();
    const [items, setItems] = useState([]);


useEffect(() => {
    dispatch(listDog()).then(response => {
        if (response.payload.success) {
         
            setItems(
                response.payload.list
              );         
                       }
      else{
        alert("에러")
      }           
      }) 
  },
   []);
 
    return (
        <div>
          <ul> 

            { items.map ( item =>
             
              <li key = {item.id}>
              { item.name }, {item.price}
              <img src={ `http://127.0.0.1:8888/photo/${ item.photo }` } width = {250}  />
              <a href={`/doginfo/${item.id}`}  > 상세보기 </a>
            
            </li>
         
            )}
          </ul>
     </div>
    )
}

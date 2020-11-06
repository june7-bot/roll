import React, { useEffect, useState } from 'react'
import { blockchainList } from "../../_actions/user_actions";
import { useDispatch , useSelector } from "react-redux";

export default function BlockList() {
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);

    useEffect(() => {
        dispatch(blockchainList()).then(response => {
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
                      주문번호 :     { item.id}
                      강아지 이름 :   { item.name }

                </li>
             
                )}
              </ul>
         </div>
        )
    }
    
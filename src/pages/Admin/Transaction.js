import React, {useEffect, useState  } from 'react'
import { useDispatch } from "react-redux";
import { adminTransaction } from '../../_actions/user_actions'

export default function Transaction() {
    const dispatch = useDispatch();
 
    const [list, setList] = useState([]);
   
  
      useEffect(() => {
  
        dispatch(adminTransaction()).then(response => {
            if (response.payload.success) {
               setList( response.payload.list )
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
             { list.map ( list  =>
                <li key = { list.id}>
                  거래번호 : {list.id} <br/><br/>
                  판매자 email : { list.seller }<br/><br/>
                  구매자 email :    { list.buyer } <br/>
                  강아지 이름 :    { list.dogId } <br/> 
                  강아지 가격 :    { list.price } <br/>
                     <br/><br/><br/>
                </li>
                )}
                </ul>
            </div>
            )
        }
           
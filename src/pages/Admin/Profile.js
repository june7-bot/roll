import React, {useEffect, useState  } from 'react'
import { useDispatch } from "react-redux";
import {seeAllUser } from '../../_actions/user_actions'

export default function Profile() {
    const dispatch = useDispatch();
 
    const [list, setList] = useState([]);
   
  
      useEffect(() => {
  
        dispatch(seeAllUser()).then(response => {
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
                  회원ID : {list.id} &nbsp; &nbsp; &nbsp; &nbsp;
                  거래횟수 :{list.transactionNumber} &nbsp; &nbsp; &nbsp; &nbsp;
                  회원등급 : { list.role }
                     <br/><br/><br/><br/>
                </li>
                )}
                </ul>
            </div>
            )
        }
           
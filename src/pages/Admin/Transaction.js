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
                  거래번호 : {list.id}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  판매자 email : { list.seller }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  구매자 email : { list.buyer }&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  강아지 이름 : { list.dogId }  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  강아지 가격 : { list.price } &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href={`/admin/blockchain/${list.id}`} > 블록체인에 저장하기</a>
                     <br/><br/><br/>
                </li>
                )}
                </ul>
            </div>
            )
        }
           
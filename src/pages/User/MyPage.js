import React, { useEffect, useState } from 'react'
import { myPage } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";

export default function MyPage() {
    
  
    const [id, setId] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(myPage()).then(response => {
            if (response.payload.success) {
                setId(response.payload.email)
                  
                           }
          else{
            alert("에러")
          }           
          }) 
    }, []);

    return (
        <div>
         {  id }님 안녕하세요<br/>

         <a href={`/mypage/info/${ id }`}  > 회원정보 수정 </a><br/>
         <a href={`/mypage/currentstatus/${ id }`}  > 진행중인 거래 </a><br/>
         <a href={`/mypage/myadopt/${ id }`}  > 입양관리 </a><br/>
         <a href={`/mypage/myparcel/${ id }`}  > 분양관리 </a><br/>
        </div>
    )
}
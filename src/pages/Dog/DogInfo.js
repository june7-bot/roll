import React,  { useEffect, useState } from 'react'
import {oneDog } from "../../_actions/dog_action";
import { useDispatch , useSelector } from "react-redux";
import { orderDog } from "../../_actions/dog_action";



export default function DogInfo(props) {
  
   let value = useSelector(state => state.user.userData);

    const dogId = props.match.params.itemId;

    const dispatch = useDispatch();

    const [items, setItems] = useState('');

    useEffect(() => {
      let dataToSubmit = {
        dogId : dogId
      }
    dispatch(oneDog(dataToSubmit)).then(response => {
        if (response.payload.success) {
          setItems(response.payload.dog)
          
                       }
      else{
        alert("에러")
      }           
      }) 
  },
   []);

  const onClickHandler = (id) => {
    let submitData = {
      userId : value.userId,
      dogId : id,
    }
    dispatch(orderDog(submitData)).then(response => {
      if (response.payload.success) {

        props.history.push('/mypage');
                     }
  else{
    alert('자기 동물은 입양 불가능합니다')
       }
    })}

    return (

        <div>         
                     반려견 정보<br/>        
              이름 : { items.name } <br/>
              견종 : {items.dogKind }<br/>
              분양가 : {items.price}<br/>
              나이 : {items.dogAge} <br/>
              성별 : {items.dogGender}<br/>
              접종여부 : {items.dogPrevent }<br/>
              <img src={ `http://127.0.0.1:8080/upload/dogs/${ items.photo }` } width = {250} /><br/>   
              <button onClick = { () => {onClickHandler(items.id)} } > 입양하기</button>
            
        
        </div>
    )
            }

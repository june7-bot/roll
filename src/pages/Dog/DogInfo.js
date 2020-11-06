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
       
              { items.name }, {items.price}
              <img src={ `http://127.0.0.1:8888/${ items.photo }` } width = {250} />   
              <button onClick = { () => {onClickHandler(items.id)} } > 입양하기</button>
            
        
     </div>
    )
            }

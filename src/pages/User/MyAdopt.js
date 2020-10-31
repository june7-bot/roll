import React, {useEffect, useState  } from 'react'
import { useDispatch } from "react-redux";
import { myAdopt } from '../../_actions/user_actions'

export default function MyAdopt(props) {
    const dispatch = useDispatch();
    const id = props.match.params.userId;
    const [dogs, setDogs] = useState([]);
    const [dogZero, setDogZero] = useState([]);
    const [buyer, setBuyer] = useState([])
  
      useEffect(() => {
  
        let data = {    
          id : id
        }
        dispatch(myAdopt(data)).then(response => {
            if (response.payload.success) {
                setDogs(
                  response.payload.listOne
                );       
                setDogZero(
                    response.payload.listZero
                );
                setBuyer(
                    response.payload.buyer
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
             입양 전 강아지들
             { dogs.map ( dog =>
                <li key = { dog.id}>
                  강아지 이름 : { dog.name }<br/>
                  강아지 가격 :    { dog.price } <br/>
                     <img src={ `http://127.0.0.1:8888/${ dog.photo }` } width = {250}  />
                     <br/><br/><br/>
                </li>
                )}
<br/><br/><br/><br/><br/><br/>
            입양 완료 강아지들
            { dogZero.map( dog =>
                <li key = {dog.id}>
                    강아지 이름 : { dog.name }<br/>
                    강아지 가격 : { dog.price } <br/>
                     <img src={ `http://127.0.0.1:8888/${ dog.photo }` } width = {250}  />
                </li>
                )}      
         </ul>
     </div>
    )
}

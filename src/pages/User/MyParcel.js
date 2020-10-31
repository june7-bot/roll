import React, {useEffect, useState  } from 'react'
import { useDispatch } from "react-redux";
import { myParcel } from '../../_actions/user_actions'

export default function MyParcel(props) {
    const dispatch = useDispatch();
    const id = props.match.params.userId;
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
  
        let data = {    
          id : id
        }
        dispatch(myParcel(data)).then(response => {
            if (response.payload.success) {
                 setDogs(
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
          { dogs.map(dog => 
            <li key = { dog.id}>
                    강아지 이름 : { dog.name }<br/>
                    강아지 가격 : { dog.price } <br/>
                     <img src={ `http://127.0.0.1:8888/${ dog.photo }` } width = {250}  />
            </li>
            )}
          </ul> 
        </div>
    )
}

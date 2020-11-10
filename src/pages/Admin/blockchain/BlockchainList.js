import React, { useEffect, useState } from 'react'
import { BlockList } from "../../../_actions/user_actions";
import { useDispatch} from "react-redux";
import { Card,Button,CardGroup } from 'react-bootstrap';


export default function BlockchainList() {

    const dispatch = useDispatch();
    const [items, setItems] = useState([]);


useEffect(() => {

    dispatch(BlockList()).then(response => {
        if (response.payload.success) {
           console.log(response.payload.list);
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
      <div class="container" style={{fontFamily: "'Cafe24Oneprettynight"}}>
         
          <CardGroup class="card-columns">
            { items.map ( item =>

            <Card key = {item.id} style={{ width: '18rem' }}>
              <Card.Body style={{"align-items": "right"}}>
                <Card.Title> 주문 번호 : { item.id }</Card.Title>
                 <Card.Text>
                구매자 정보 :{ item.user.email }<br/>
                강아지 출생증명: <img src={ `http://127.0.0.1:8080/upload/dogs/${ item.dog.birthFile }` } width = {250}  />  <br/>
                강아지 정보 : <img src={ `http://127.0.0.1:8080/upload/dogs/${ item.dog.nose }` } width = {250}  />       
                </Card.Text> 

              </Card.Body>
            </Card>

         )}
          </CardGroup>
      </div>
    )
}
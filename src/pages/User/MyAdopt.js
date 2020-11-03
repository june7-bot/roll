import React, {useEffect, useState  } from 'react'
import { useDispatch } from "react-redux";
import { myAdopt } from '../../_actions/user_actions'
import { Card,Button,CardGroup } from 'react-bootstrap';
import '../Dog/dog.css';

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
      <div class="container">
             <h1 style={{fontFamily: "'yg-jalnan'"}}>입양 전 강아지들</h1>
             <CardGroup class="card-columns"  style={{fontFamily: "'Cafe24Oneprettynight"}}>
             { dogs.map ( dog =>
              
                <Card key = {dog.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ `http://127.0.0.1:8080/upload/dogs/${ dog.photo }` } width = {250} />
                <Card.Body>
                  <Card.Title>{ dog.name }</Card.Title>
                  <Card.Text>
                  이름:{ dog.name }<br/>
                  분양가격:{dog.price}원
                  </Card.Text>
                  
                  
                </Card.Body>
              </Card>
            
                )}
                  </CardGroup>

            <h1 style={{fontFamily: "'yg-jalnan'"}}>입양 완료 강아지들</h1>
            <CardGroup class="card-columns"  style={{fontFamily: "'Cafe24Oneprettynight"}}>
            { dogZero.map( dog =>
                
                <Card key = {dog.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ `http://127.0.0.1:8080/upload/dogs/${ dog.photo }` } width = {250} />
                <Card.Body>
                  <Card.Title>{ dog.name }</Card.Title>
                  <Card.Text>
                  이름:{ dog.name }<br/>
                  분양가격:{dog.price}원
                  </Card.Text>
                  
                  
                </Card.Body>
              </Card>
              
            )}
         </CardGroup>
     </div>
    )
}

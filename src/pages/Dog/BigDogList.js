import React, { useEffect, useState } from 'react'
import { DogListbig } from "../../_actions/dog_action";
import { BigDogListKind } from "../../_actions/dog_action";
import { useDispatch} from "react-redux";
import { Card,Button,CardGroup } from 'react-bootstrap';
import './dog.css';
import '../../index.css';

export default function BigDogList() {


    const dispatch = useDispatch();
    const [items, setItems] = useState([]);
    const showList =  (num) => {

        let dataToSubmit ={
            kind : num
        }
        dispatch(BigDogListKind(num,dataToSubmit)).then(response => {
            if (response.payload.success) {
             
                setItems(
                    response.payload.list
                  );         
                }
          else{
            alert("에러")
          }           
        }
    )
}

useEffect(() => {
    dispatch(DogListbig()).then(response => {
        if (response.payload.success) {
         
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

        <br/><br/>
        <span onClick = { () => showList(0) } >골든 리트리버</span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick = { () => showList(1) } >시베리안 허스키</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick = { () => showList(2) } >보더콜리</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick = { () => showList(3) } >사모예드</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick = { () => showList(4) } >말라뮤트</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
          <CardGroup class="card-columns">
            { items.map ( item =>

            <Card key = {item.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ `http://127.0.0.1:8080/upload/dogs/${ item.photo }` } width = {250} />
              <Card.Body style={{"align-items": "right"}}>
                <Card.Title>{ item.name }</Card.Title>
                <Card.Text>
                견종 : { item.dogKind }<br/>
                분양가: {item.price}원
                </Card.Text><br/>
                <a href={`/doginfo/${item.id}`} ><Button  className="btn btn-danger">상 세 보 기</Button></a>
                
              </Card.Body>
            </Card>

            )}
          </CardGroup>
      </div>
    )
}
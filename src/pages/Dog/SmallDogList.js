import React, { useEffect, useState } from 'react'
import { DogListsmall } from "../../_actions/dog_action";
import { SmallDogListKind } from "../../_actions/dog_action";
import { useDispatch} from "react-redux";
import { Card,Button,CardGroup } from 'react-bootstrap';
import './dog.css';
import '../../index.css';

export default function SmallDogList() {


    const dispatch = useDispatch();
    const [items, setItems] = useState([]);

    const showList =  (num) => {

        let dataToSubmit ={
            kind : num
        }
        dispatch(SmallDogListKind(num,dataToSubmit)).then(response => {
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
    dispatch(DogListsmall()).then(response => {
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

        <span onClick = { () => showList(0) } >푸들</span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick = { () => showList(1) } >치와와</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick = { () => showList(2) } >닥스훈트</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick = { () => showList(3) } >비숑</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick = { () => showList(4) } >포메라니안</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick = { () => showList(5) } >말티즈</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick = { () => showList(6) } >시츄</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick = { () => showList(7) } >요크셔</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <CardGroup class="card-columns">
            { items.map ( item =>

            <Card key = {item.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ `http://3.35.3.31:8080/upload/dogs/${ item.photo }` } width = {250} />
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
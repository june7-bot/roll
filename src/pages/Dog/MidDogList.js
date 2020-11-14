import React, { useEffect, useState } from 'react'
import { DogListmid } from "../../_actions/dog_action";
import {MidDogListKind } from "../../_actions/dog_action";
import { useDispatch} from "react-redux";
import { Card,Button,CardGroup } from 'react-bootstrap';
import './dog.css';
import '../../index.css';


export default function MidDogList() {


    const dispatch = useDispatch();
    const [items, setItems] = useState([]);

    const showList =  (num) => {

        let dataToSubmit ={
            kind : num
        }
        dispatch(MidDogListKind(num,dataToSubmit)).then(response => {
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
    dispatch(DogListmid()).then(response => {
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

        <span onClick = { () => showList(0) } >스피츠</span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick = { () => showList(1) } >시바견</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick = { () => showList(2) } >웰시코기</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick = { () => showList(3) } >프렌치불독</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span onClick = { () => showList(4) } >비글</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
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
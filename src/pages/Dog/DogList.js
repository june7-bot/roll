import React, { useEffect, useState } from 'react'
import { listDog } from "../../_actions/dog_action";
import { useDispatch , useSelector } from "react-redux";
import { Card,Button,CardGroup } from 'react-bootstrap';
import './dog.css';
import '../../index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


export default function DogList() {


    const dispatch = useDispatch();
    const [items, setItems] = useState([]);


useEffect(() => {
    dispatch(listDog()).then(response => {
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
          <CardGroup class="card-columns">
            { items.map ( item =>

            <Card key = {item.id} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={ `http://127.0.0.1:8080/upload/dogs/${ item.photo }` } width = {250} />
              <Card.Body style={{"align-items": "right"}}>
                <Card.Title>{ item.name }</Card.Title>
                <Card.Text>
                이름:{ item.name }<br/>
                분양가격:{item.price}원
                </Card.Text><br/>
                <a href={`/doginfo/${item.id}`} ><Button  className="btn btn info">상 세 보 기</Button></a>
                
              </Card.Body>
            </Card>

            )}
          </CardGroup>
      </div>
    )
}
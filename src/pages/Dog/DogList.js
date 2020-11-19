import React, { useEffect, useState } from 'react'
import { listDog } from "../../_actions/dog_action";
import { useDispatch} from "react-redux";
import { Card,Button,CardGroup } from 'react-bootstrap';
import './dog.css';
import '../../index.css';



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
          <br/><br/>
        <a href = "/bigdog" >대형견</a> &nbsp;&nbsp;&nbsp;
        <a href = "/middog" >중형견</a> &nbsp;&nbsp;&nbsp;
        <a href = "/smalldog" >소형견</a>
        <br/><br/><br/>
        
          <CardGroup  class="card-columns"  >
            { items.map ( item =>
   
            <Card key = {item.id} style={{width: '18rem'}}>
              <Card.Img variant="top" src={ `http://3.35.3.31:8080/upload/dogs/${ item.photo }` } style = {{objectFit : 'cover'}} />
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
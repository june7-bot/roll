import React,  { useEffect, useState } from 'react'
import { proceedList } from "../../_actions/user_actions";
import { useDispatch , useSelector } from "react-redux";
import { Card,Button,CardGroup } from 'react-bootstrap';
import '../Dog/dog.css';

export default function CurrentStatus(props) {
  
   let value = useSelector(state => state.user.userData);

    const id = props.match.params.userId;

    const dispatch = useDispatch();
    const [buyer, setBuyer] = useState([]);
    const [seller, setSeller] = useState([]);

    useEffect(() => {

let data = {
    email : id
}

    dispatch(proceedList(data)).then(response => {
        if (response.payload.success) {
            setBuyer(response.payload.buyer)
            setSeller(response.payload.seller)
          
                       }
      else{
        alert("에러")
      }           
      }) 
  },
   []);

//   const submitHandler = (id) => {

//     let submitData = {
//       userId : value.userId,
//       dogId : id,
//     }

//     dispatch(orderDog(submitData)).then(response => {
//       if (response.payload.success) {
//         props.history.push('/mypage');
//                      }
//   else{
//     alert('자기 동물은 입양 불가능합니다')
//        }
//     })}

    return (
      <div class="container">
      <h1 style={{fontFamily: "'yg-jalnan'"}}>{ id }님 거래</h1>
      <CardGroup class="card-columns"  style={{fontFamily: "'Cafe24Oneprettynight"}}>
      { seller.map ( list => 
       
         <Card key = {list.id} style={{ width: '18rem' }}>
         <Card.Img variant="top" src={ `http://127.0.0.1:8080/upload/dogs/${ list.photo }` } width = {250} />
         <Card.Body>
           <Card.Title>{ list.name }</Card.Title>
           <Card.Text>
           이름:{ list.name }<br/>
           분양가격:{list.price}원
           </Card.Text>
           
           
         </Card.Body>
       </Card>
     
         )}
           </CardGroup>

     <h1 style={{fontFamily: "'yg-jalnan'"}}>분양거래 :</h1>
     <CardGroup class="card-columns"  style={{fontFamily: "'Cafe24Oneprettynight"}}>
     { buyer.map ( list => 
         
         <Card key = {list.id} style={{ width: '18rem' }}>
         <Card.Img variant="top" src={ `http://127.0.0.1:8080/upload/dogs/${ list.photo }` } width = {250} />
         <Card.Body>
           <Card.Title>{ list.name }</Card.Title>
           <Card.Text>
           이름:{ list.name }<br/>
           분양가격:{list.price}원
           </Card.Text>
           
           
         </Card.Body>
       </Card>
       
     )}
  </CardGroup>
</div>
    )
            }

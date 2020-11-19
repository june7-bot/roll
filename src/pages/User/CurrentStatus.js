import React,  { useEffect, useState } from 'react'
import { proceedList } from "../../_actions/user_actions";
import { completeTransaction } from "../../_actions/user_actions";
import { cancelDog } from "../../_actions/user_actions";
import { cancelDogBySeller } from "../../_actions/user_actions";
import { useDispatch , useSelector } from "react-redux";
import { Card,Button,CardGroup } from 'react-bootstrap';
import '../Dog/dog.css';

export default function CurrentStatus(props) {
  
   let value = useSelector(state => state.user.userData);


    const id = props.match.params.userId;

    const dispatch = useDispatch();
    const [buyer, setBuyer] = useState([]);
    const [seller, setSeller] = useState([]);
    const [btndisable, setBtndisable] = useState(0)

    const complete = (orderId) => {

      if(window.confirm("거래 완료 확실하십니까?")){
                   
          let dataToSubmit = {
            "id" : orderId
          }  
            console.log('1차검사');
          dispatch(completeTransaction(dataToSubmit)).then(response => {
            console.log('2차검사');
            if (response.payload.success) {
              setBuyer(response.payload.buyer)
              console.log('3차검사');
              }else{
                   alert("에러")
              }           
          }
          
        )
      }else return;        
    }


    const cancelBySeller = (orderId) => {

      if(window.confirm("거래 완료 되셧습니까?")){
 
          let data = {
            "id" : orderId
          }

      dispatch(cancelDogBySeller(data)).then(response => {

        if (response.payload.success) {
            setSeller(response.payload.seller)
                                         
          }else{
               alert("에러")
          }           
      })
    }else return;        
  }


    const onClickHandler = (orderId) => {

          if(window.confirm("거래를 취소 하시겠습니까?")){
     
              let data = {
                "id" : orderId
              }

          dispatch(cancelDog(data)).then(response => {

            if (response.payload.success) {

                setBuyer(response.payload.buyer)
              
                                      
              }else{
                   alert("에러")
              }           
          })
        }else return;        
      }

    useEffect(() => {

      let data = {
          email : id
      }

      dispatch(proceedList(data)).then(response => {
          if (response.payload.success) {

              setBuyer(response.payload.buyer)
              setSeller(response.payload.seller)
                                  
            }else{
          alert("에러")
        }           
      }) 
    },
    []);

    return (
      <div class="container">
          <h1 style={{fontFamily: "'yg-jalnan'"}}>{ id }님 거래</h1><br/><br/><br/><br/>
          <h1 style={{fontFamily: "'yg-jalnan'"}}>분양 중인 목록 :</h1>

          <CardGroup class="card-columns"  style={{fontFamily: "'Cafe24Oneprettynight"}}>
          { seller.map ( list => 
          
              <Card key = {list.orderId} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ `http://3.35.3.31:8080/upload/dogs/${ list.photo }` } width = {250} />
                  <Card.Body>

                    <Card.Title>{ list.name }</Card.Title>
                    <Card.Text>
                      이름:{ list.name }<br/>
                      분양가격:{list.price}원
                    
                    </Card.Text>
                    <Button  className="btn btn-danger" onClick =  { () =>  cancelBySeller(list.orderId)  } >분양 취소하기 </Button>
                
              </Card.Body>
              </Card>
        
              )
          }
          </CardGroup>
          
           <br/><br/><br/><br/><br/><br/><br/>
           <h1 style={{fontFamily: "'yg-jalnan'"}}>입양 중인 목록 :</h1>

     <CardGroup class="card-columns"  style={{fontFamily: "'Cafe24Oneprettynight"}}>
        { buyer.map ( list => 
           
         <Card key = {list.orderId} style={{ width: '18rem' }}>
             
            <Card.Img variant="top" src={`http://3.35.3.31:8080/upload/dogs/${ list.photo }` } width = {250} />
            <Card.Body>

              <Card.Title>{ list.name }</Card.Title>
              <Card.Text>
              이름:{ list.name }<br/>
              분양가격:{list.price}원
              </Card.Text>
              <Button  className="btn btn-danger" onClick =  { () =>  onClickHandler(list.orderId) }>입양 취소하기 </Button>           
              <br/><br/>
              <Button  className="btn btn-danger" onClick =  { () =>  complete(list.orderId) } > 거래 완료  </Button>           
          
            </Card.Body>
       </Card>
      )}
  </CardGroup>
  </div>
  )
}

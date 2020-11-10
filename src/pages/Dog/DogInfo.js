import React,  { useEffect, useState } from 'react'
import {oneDog } from "../../_actions/dog_action";
import { useDispatch , useSelector } from "react-redux";
import { orderDog } from "../../_actions/dog_action";
import { Card } from 'react-bootstrap';


export default function DogInfo(props) {
  
   let value = useSelector(state => state.user.userData);

    const dogId = props.match.params.itemId;

    const dispatch = useDispatch();

    const [items, setItems] = useState('');

    useEffect(() => {
      let dataToSubmit = {
        dogId : dogId
      }
    dispatch(oneDog(dataToSubmit)).then(response => {
        if (response.payload.success) {
          setItems(response.payload.dog)
          
                       }
      else{
        alert("에러")
      }           
      }) 
  },
   []);

  const onClickHandler = (id) => {
    let submitData = {
      userId : value.userId,
      dogId : id,
    }
    dispatch(orderDog(submitData)).then(response => {
      if (response.payload.success) {

        props.history.push('/mypage');
                     }
  else{
    alert('자기 동물은 입양 불가능합니다')
       }
    })}

    return (

      <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src={require("../../assets/login.PNG")} alt="logo" />
              </div>    
              <div style={{fontSize: 30, fontFamily: 'ImcreSoojin', textAlign: "left"}}>
                    <h4 className="card-title">반려견정보</h4><br/><br/>
              </div>   
              <Card key = {items.id} style={{alignItems: "center"}}>
              {<Card.Img variant="top" src={ `http://127.0.0.1:8080/upload/dogs/${ items.photo }` } width = {250} />}
              <Card.Body style={{"align-items": "center", border: 1}}>
                <Card.Text>
                <table className="table table-hovored"> 
              <tr>  
              <th style={{fontFamily: "'yg-jalnan'"}}>이름</th>
              <td>{ items.name } </td>
              <th style={{fontFamily: "'yg-jalnan'"}}>견종</th>
               <td>{items.dogKind }</td>
               </tr>
               <tr>
               <th style={{fontFamily: "'yg-jalnan'"}}>분양가</th>
              <td>{ items.price } </td>
              <th style={{fontFamily: "'yg-jalnan'"}}>나이</th>
               <td>{items.dogAge }</td>
               </tr>
             <tr>
             <th style={{fontFamily: "'yg-jalnan'"}}>성별</th>
              <td>{ items.dogGender } </td>
              <th style={{fontFamily: "'yg-jalnan'"}}>접종여부</th>
               <td>{items.dogPrevent }</td>
             </tr>      
              </table>
                </Card.Text>
              </Card.Body>
              <button onClick = { () => {onClickHandler(items.id)} } className="btn btn-danger" style={{fontFamily: "'Cafe24Oneprettynight"}}> 입 양 하 기</button>
            </Card>
              </div>
            </div>
          </div>
        </div>  
      </div>
        
    )
            }

import React,  { useEffect, useState } from 'react'
import { proceedList } from "../../_actions/user_actions";
import { useDispatch , useSelector } from "react-redux";

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
        <div>         
   <ul>
            { id }님 거래
            <br/><br/>
            입양 거래 : <br/>
            { seller.map ( list => 
               
              <li key = {list.id}>
              { list.name }, {list.price}
              <img src={ `http://127.0.0.1:8888/${ list.photo }` } width = {250}  />
              </li>
            )}
분양거래 :
{ buyer.map ( list => 
               
               <li key = {list.id}>
               { list.name }, {list.price}
               <img src={ `http://127.0.0.1:8888/${ list.photo }` } width = {250}  />
               </li>
             )}
            </ul>
     </div>
    )
            }

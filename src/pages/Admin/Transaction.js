import React, {useEffect, useState  } from 'react'
import { useDispatch } from "react-redux";
import { adminTransaction } from '../../_actions/user_actions'
import { useHistory } from "react-router-dom";
   
export default function Transaction() {
    const dispatch = useDispatch();
    const history = useHistory();

    const routeChange = (x) =>{ 
      let path = `/admin/blockchain/${x}`; 
      history.push(path);
    }

    const [list, setList] = useState([]);
  

      useEffect(() => {
  
        dispatch(adminTransaction()).then(response => {
            if (response.payload.success) {
              console.log(response.payload.list);
               setList( response.payload.list )
                           }  
          else{
            alert("에러")
          }           
          }) 
      },
       []);
  
    return (
      
      <div className="row">
            <div className="card" >
              <div className="card-body">
              <div className="table-responsive" >
                <table className="table">
                  <thead>
                    <tr>
                      <th>거래번호</th>
                      <th>판매자 Email</th>
                      <th>구매자Email</th>
                      <th>강아지 번호</th>
                      <th>강아지 가격</th>
                      <th>거래 상태</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  { list.map ( list  =>
                    <tr key = { list.id}>
                      <td>{list.id}</td>
                      <td>{ list.seller }</td>
                      <td>{ list.buyer }</td>
                      <td>{ list.dogId }</td>
                      <td>{ list.price }</td>
                      <td><label className="badge badge-success">거래 완료</label></td>
                      <td><button onClick = { () => routeChange(list.id) } disabled={ list.orderStatus == "BLOCKCHAINSUCCESS" ? true : false }  > 블록체인 등록하기</button></td>
                    </tr>
                  )}
                  </tbody>
                </table>
             </div>
            </div>
           
          </div>
      </div>
      
         
            )
        }
           
import React, {useEffect, useState  } from 'react'
import { useDispatch } from "react-redux";
import {seeAllUser } from '../../_actions/user_actions'

export default function Profile() {
    const dispatch = useDispatch();
 
    const [list, setList] = useState([]);
   
  
      useEffect(() => {
  
        dispatch(seeAllUser()).then(response => {
            if (response.payload.success) {
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
          <div className="col-lg-6 grid-margin stretch-card">
          
            <div className="card" >
              <div className="card-body">
              <div className="table table-striped" >
                <table className="table">
                  <thead>
                    <tr>
                      <th>회원ID</th>
                      <th>거래횟수</th>
                      <th>회원등급</th>
                    </tr>
                  </thead>
                  <tbody>
                  { list.map ( list  =>
                    <tr key = { list.id}>
                      <td>{list.id}</td>
                      <td>{ list.transactionNumber }</td>
                      <td>{ list.role }</td>
                    </tr>
                  )}
                  </tbody>
                </table>
              </div>
             </div>
            </div>
           
          </div>
      </div>  
            )
        }
           
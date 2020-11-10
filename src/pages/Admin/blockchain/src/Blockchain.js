import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Dog from "./contracts/Dog.json";
import getWeb3 from "./getWeb3";
import "./App.css";
import { useDispatch } from "react-redux";
import { blockRegister } from '../../../../../src/_actions/user_actions'
import { completeBlockTransaction } from '../../../../../src/_actions/user_actions'
import Axios from "axios";
import { USER_SERVER } from '../../../../pages/Config';
export default function Blockchain(props) {

  const firstUpdate = useRef(true)
  const firstUpdate1 = useRef(true)
  const firstUpdate2 = useRef(true)
  const dispatch = useDispatch();

  const id = props.match.params.orderId
  
  const [web3, setWeb3] = useState(null)
  const [contract, setContract] = useState(null)
  const [accounts, setAccounts] = useState(null)
  const [temp, setTemp] = useState(0)
  const [temp1, setTemp1] = useState(0)
  const [nose, setNose] = useState(0)
  const [photo, setPhoto] = useState(0)
  const [buyer, setBuyer] = useState(0)
  const [info, setInfo] = useState([])


const setData = async () => {
 
  let info = []

  await contract.methods.setInfo(id ,buyer ,photo , nose ).send({ from: accounts[0] })
  .on('transactionHash', function(hash){
  })
  .on('receipt',async function(receipt){
    console.log(receipt);
  
    let response = await contract.methods.getInfo(id).call();
    info.push(response);
    setInfo(info);

    let dataToSubmit = {
      id : id
    }


    dispatch(completeBlockTransaction(dataToSubmit)).then(response => {
      if (response.payload.success) {

        }  
    else
    {
      alert("에러")
    }   
  }
    )

    // Axios.post(`${USER_SERVER}/admin/blockchainSuccess`, dataToSubmit)

    
        
  })
};

const start = async () => {

  try {

    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = Dog.networks[networkId];
    const instance = await new web3.eth.Contract(
      Dog.abi,
      deployedNetwork.address
    );
   console.log(instance);
   setWeb3(web3);
   setContract(instance);
   setAccounts(accounts);

  }
catch (error) 
  {

  alert(
    `Failed to load web3, accounts, or contract. Check console for details.`,
  );
  console.error(error);
  }
}

 useEffect(() => {

   let dataToSubmit = {
     id : id 
   }

  
  dispatch(blockRegister(dataToSubmit)).then(response => {
    if (response.payload.success) {

        setNose(response.payload.dogNose)
        setPhoto(response.payload.birthFile)
        setBuyer(response.payload.buyerInfo)

      }  
  else
  {
    alert("이미 블록체인에 저장된 데이터입니다")
  }   
start();

}, []); 
  }
)


useLayoutEffect(() => {
  if(firstUpdate.current) {
    firstUpdate.current = false
    return ;
  }
    setTemp(1)
}, [contract])


useLayoutEffect(() => {
  if(firstUpdate1.current) {
    firstUpdate1.current = false
    return ;
  }
   setTemp1(1)
   
}, [accounts])


useLayoutEffect(() => {
  if(firstUpdate2.current) {
    firstUpdate2.current = false
    return ;
  }
  
  if (temp + temp1 == 2) {
    setData();
  }
}, [temp, temp1])

  return (
    !web3 ? (
      <div>Loading Web3, accounts, and contract...</div>
    ) : (
    <div className="App">
        <ul>
          {info.map ( data => 
            
            <li key = { id }>
              구매자 정보 :  {data.buyerInfo} <br/>
              강아지 출생증명 : <img src={ `http://127.0.0.1:8080/upload/dogs/${ data.dogInfo }` } width = {250}  />         
              강아지 코지문 : <img src={ `http://127.0.0.1:8080/upload/dogs/${ data.dogNose }` } width = {250}  />              
            </li>  ) 

          }
        </ul>
    </div>
    ))
  }  




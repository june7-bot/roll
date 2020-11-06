import React, { useState, useEffect } from "react";
import Dog from "./contracts/Dog.json";
import getWeb3 from "./getWeb3";
import "./App.css";
import { useDispatch } from "react-redux";
import { blockRegister } from '../../../../../src/_actions/user_actions'

export default function Blockchain(props) {

  const dispatch = useDispatch();

  const id = props.match.params.orderId;

  const [web3, setWeb3] = useState(null)
  const [contract, setContract] = useState(null)
  const [accounts, setAccounts] = useState(null)
  const [info, setInfo] = useState([])
  const [nose, setNose] = useState("")
  const [photo, setPhoto] = useState("")
  const [buyer, setBuyer] = useState("")

const setData = async () => {

const info = [];

await contract.methods.setInfo(3, photo , nose , buyer).send({ from: accounts[0] })
.on('transactionHash', function(hash){
  console.log(hash)
})
.on('receipt',async function(receipt){
  // receipt example
  console.log(receipt);

  let response = await contract.methods.getInfo(3).call();
  info.push(response);

  setInfo(info);
  })
};

const start = async () => {
  try {
    // Get network provider and web3 instance.
    const web3 = await getWeb3();
    // Use web3 to get the user's accounts.
    const accounts = await web3.eth.getAccounts();
    // Get the contract instance.
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = Dog.networks[networkId];
    const instance = new web3.eth.Contract(
      Dog.abi,
      deployedNetwork.address
    );
   console.log(instance);
   
   setWeb3(web3);
   setContract(instance);
   setAccounts(accounts)
    
} catch (error) 
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

          setNose( response.payload.dogNose );
          setBuyer( response.payload.buyerInfo ); 
          setPhoto( response.payload.birthFile );  
      }  
  else
  {
    alert("에러")
  }   
  start();
}, []); 
  }
)
 
  return (
    !web3 ? (
      <div>Loading Web3, accounts, and contract...</div>
    ) : (
    <div className="App">
  
       <button onClick = { setData }></button> 
        <ul>
          {info.map ( data => 

            <li key = { data.buyerInfo}>
              사용자 정보 :  {data.dogNose} <br/>
             
              강아지 출생증명 : <img src={ `http://127.0.0.1:8888/photo/${ data.dogInfo }` } width = {250}  /> 
              
              강아지 코지문 : <img src={ `http://127.0.0.1:8888/nose/${ data.buyerInfo }` } width = {250}  />
              
            </li>
           )}
        </ul>
    </div>
       )
    )
  }



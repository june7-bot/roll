import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik'; 
import { registerDog } from "../../_actions/dog_action";
import { useDispatch, useSelector } from "react-redux";
import { Form } from 'react-bootstrap';
import axios from 'axios'
import { USER_SERVER } from '../../pages/Config';
import './dog.css';

const S = {
    Header: styled.div`
    padding-top: 142px;
    padding-bottom: 50px;
    text-align: center;
    font-size : 30pt;
    `,
     Wrapper: styled.div`
     position: relative;
     `,
    Content: styled.div`
    display : flex, block;
  
    position : relative;
    left : 10px;
    `,
    FormWrap : styled.form`
  
    position: relavtive;
    padding-top: 30px;
    padding-bottom: 30px;
    
    `,
    Box : styled.input` 
    height: 51px;
    border: solid 3px #black;
    padding: 10px 14px 10px 14px;
    background: #fff;
    `,
    Ilable : styled.label`
    padding-right : 20px;
    bottom : 0;
    display: inline-block;
    width: 140px;
    text-align: left;  
    font-size: 15px;
    font-weight: 700;
    `,
    inputfeedback : styled.div`
      color: red;
      height: 5px;
      margin-top: -1px;
      position: relative;
      left : 60px   
      `,

    btn : styled.button`
    width: 10%;
    padding: 14px 0 14px;
    border: 0;
    cursor: pointer;
    color: #fff;
    background-color: #2E64FE;
    font-size: 20px;
    font-weight: 400;
    font-family: Dotum,'돋움',Helvetica,sans-serif;
    `,
    btnForm : styled.form`
    margin: 30px 0 91px;
    `

  }

export default function DogRegister(props) {
    const dispatch = useDispatch();
    const id = useSelector(state => state.user.userData)
    const [file, setFile] = useState('');

    return (
 

        <Formik
          initialValues={{
            name: '',
            price: '',
          
          }}
          validate={values => {
            const errors = {};
            if (!values.name) {
              errors.name = 'Required';
            } 
            return errors;
          }}

        
          onSubmit={(values, { setSubmitting }) => {
        
            let formData =  new FormData();
            formData.append('file', file);
            formData.append('name', values.name);
            formData.append('price', values.price);
            formData.append('owner', id.userId)
         
            setTimeout(() => {

              dispatch(registerDog(formData)).then(response => {
          
                   if (response.payload) {

                   props.history.push("/doglist");
                 } else {
                   alert('에러발생');
                 }
              })
              setSubmitting(false);
            }, 500);
          }}
        >{props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
              setFieldValue
            } = props;
            return (
        <S.Wrapper>
          <div>
            <div className="d-flex align-items-center auth px-0">
              <div className="row w-100 mx-0">
                <div className="col-lg-4 mx-auto">
                  <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                    <div className="brand-logo">
                      <img src={require("../../assets/login.PNG")} alt="logo" />
                    </div>
                    <h2 style={{fontFamily: 'ImcreSoojin'}}>강아지 등록</h2><br/><br/>
                  <S.Content>
                      <div class="container">
                      
                      <S.Ilable for = "name" style={{fontFamily: "'yg-jalnan'"}}>이름</S.Ilable>
                        <Form.Control
                          id="name"
                          name = "name"
                          placeholder="Enter your name"
                          type="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      <br/>
        
                      
                      <S.Ilable for = "price" style={{fontFamily: "'yg-jalnan'"}}>가격</S.Ilable>
                        <Form.Control
                          id="price"
                          name = "price"
                          placeholder="Enter your price"
                          type="price"
                          value={values.price}
                          onChange={handleChange}
                          onBlur={handleBlur}
              
                        />
                        <br/>

                      
                      <S.Ilable for = "nose" style={{fontFamily: "'yg-jalnan'"}}>코지문</S.Ilable>
                      
                      
                    <div className="custom-file">
                      <Form.Control 
                            id="file"
                            type="file"
                            accept = ".jpg"
                            onChange={(e) => setFile(e.target.files[0]) }
                            onBlur={handleBlur}
                            className="custom-file-label"
                          />
                          
                    </div>
                  

                       
                      
                   
                      <S.btnForm>
                          <button onClick={handleSubmit} type="primary" disabled={isSubmitting} className="btn btn-block btn-danger btn-lg font-weight-medium auth-form-btn"
                          style={{fontFamily: "'Cafe24Oneprettynight"}}>
                             분양등록
                          </button>
                      </S.btnForm>
                        </div>
                  </S.Content>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
                  </S.Wrapper>
                 
                );
              }}
              
               </Formik>
                
    );
            };
           
        


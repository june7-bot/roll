import React, { useState, Component } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../_actions/user_actions";
import {  Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';




function LoginPage(props) {

  const S = {
    Header: styled.div`
    padding-top: 142px;
    padding-bottom: 50px;
    text-align: center;
    font-size : 30pt;
    `,
     Wrapper: styled.div`
    display : flex, block;
     `,
    Content: styled.div`
    display : flex, block;
    text-align : center;
    position : relative;
    `,
    FormWrap : styled.form`
  
    position: relavtive;
    padding-top: 8px;
    padding-bottom: 15px;
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
    text-align: right;  
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


  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(rememberMeChecked)

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  };

  const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

  return (
    <Formik
      initialValues={{
        email: initialEmail,
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('이메일을 입력해주세요'),
        password: Yup.string()
          .min(6, '비밀번호는 최소 6자 이상입니다.')
          .required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password
          };

          dispatch(loginUser(dataToSubmit))
            .then(response => {
              if (response.payload.success) {
                window.localStorage.setItem('userId', response.payload.userId);  
                sessionStorage.setItem("X-AUTH-TOKEN", response.payload.token)             
                props.history.push("/");
              } else {
                setFormErrorMessage('Check out your Account or Password again')
              }
            })
            .catch(err => {
              setFormErrorMessage('Check out your Account or Password again')
              setTimeout(() => {
                setFormErrorMessage("")
              }, 3000);
            });
          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
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
        } = props;

            return (
              <S.Wrapper >
              <div>
                <div className="d-flex align-items-center auth px-0">
                  <div className="row w-100 mx-0">
                    <div className="col-lg-4 mx-auto">
                      <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                        <div className="brand-logo">
                          <img src={require("../../assets/login.PNG")} alt="logo" />
                        </div>
                        <h2 style={{fontFamily: 'ImcreSoojin'}}>로그인</h2>
                        
        <S.Content>
          
            <S.FormWrap onSubmit={handleSubmit}>

              <S.FormWrap>
                <Form.Control
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <S.inputfeedback>{errors.email}</S.inputfeedback>
                )}
              </S.FormWrap>

              <S.FormWrap>
                <Form.Control
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <S.inputfeedback>{errors.password}</S.inputfeedback>
                )}
              </S.FormWrap>

              {formErrorMessage && (
                <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
              )}
              <div className="my-2 d-flex justify-content-between align-items-center">
                            <div className="form-check form-check-danger">
                              <label className="form-check-label text-muted">
                                <input type="checkbox" className="form-check-input"/>
                                <i className="input-helper"></i>
                                ID저장
                              </label>
                            </div>
                          </div>
              <a href='/idfind' style={{fontFamily: "'Cafe24Oneprettynight"}}> 아이디 찾기 </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href='/pwfind' style={{fontFamily: "'Cafe24Oneprettynight"}}> 비밀번호 찾기 </a><br/>

              <S.FormWrap>
                <S.btnForm>
                
                          <div className="mt-3">
                          <button onSubmit={handleSubmit} style={{fontFamily: "'Cafe24Oneprettynight"}} className="btn btn-block btn-danger btn-lg font-weight-medium auth-form-btn">
                              로그인
                          </button><br/>
                          </div>
                          
                          <div className="mb-2">
                            <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                              <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
                            </button>
                          </div>
                          <div className="text-center mt-4 font-weight-light">
                            회원이 아니신가요?&nbsp;<Link to="/register" className="text-danger">회원가입</Link>
                          </div>
                          </S.btnForm>
              </S.FormWrap>
            </S.FormWrap >
            </S.Content>
                          
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
              </S.Wrapper>
            )
          }
        }
  
      
</Formik>
);    
};

export default withRouter(LoginPage);



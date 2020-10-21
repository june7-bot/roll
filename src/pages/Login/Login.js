import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../_actions/user_actions";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import styled from 'styled-components';


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
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
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
                <S.Header >Log In</S.Header>
        <S.Content>
          
            <S.FormWrap onSubmit={handleSubmit}>

              <S.FormWrap>
              <S.Ilable for = "email">이메일 :</S.Ilable>
                <S.Box
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
              <S.Ilable for = "password">비밀번호 :</S.Ilable>
                <S.Box
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

              <S.FormWrap>
                <S.btnForm>
                  <S.btn onSubmit={handleSubmit}>
                    Log in
                </S.btn>
                </S.btnForm>
              </S.FormWrap>
            </S.FormWrap >
            </S.Content>
          </S.Wrapper>
        );
      }}
    </Formik>
  );
};

export default withRouter(LoginPage);



import React from "react";

import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";
import styled from 'styled-components'

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
    text-align : center;
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



function Register(props) {
  const dispatch = useDispatch();
  return (
    

    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={Yup.object().shape({

        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            email: values.email,
            password: values.password,
           
          };

          dispatch(registerUser(dataToSubmit)).then(response => {
            if (response.payload) {
              props.history.push("/login");
            } else {
              alert('에러발생');
            }
          })

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
<S.Wrapper>
<S.Header>회원가입</S.Header>
          <S.Content>
        

              <S.FormWrap>
              <S.Ilable for = "email">이메일 입력 :</S.Ilable>
                <S.Box
                  id="email"
                  placeholder="Enter your Email"
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
              <S.Ilable for = "password">비밀번호 입력 :</S.Ilable>
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

              <S.FormWrap>
              <S.Ilable for = "confirmPassword">비밀번호 재입력 :</S.Ilable>
                <S.Box
                  id="confirmPassword"
                  placeholder="Enter your confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <S.inputfeedback>{errors.confirmPassword}</S.inputfeedback>
                )}
              </S.FormWrap>

              <S.btnForm>
                <S.btn onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                  Submit
                </S.btn>
              </S.btnForm>
          </S.Content>
          </S.Wrapper>
        );
      }}
    </Formik>
  );
};


export default Register

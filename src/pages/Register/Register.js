import React from "react";

import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";
import styled from 'styled-components'

  const S = {
    textarea: styled.textarea`
    resize: none;
    width:450px; 
    height:100px; 
    overflow-x:hidden;
    overflow-y:auto;
    margin-left: 30px;
    margin-top: 30px;
    border-style: inset;
    border-width: 2px;
    font-size: 20px;
    font-family: Dotum,'돋움',Helvetica,sans-serif;
    `,
    Header: styled.div`
    padding-top: 142px;
    padding-bottom: 5px;
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
    Content2: styled.div`
    display : flex, block;
    text-align : center;
    position : relative;
    left : 10px;
    margin-bottom : -130px;
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
    Box2 : styled.input` 
    height: 10px;
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

    ulable : styled.label`
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
        confirmPassword: '',
        acceptTerms : false
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
          .required('Confirm Password is required'),
        acceptTerms : Yup.boolean()
          .oneOf([true],'You must accept the terms and conditions')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {  
            email: values.email,
            password: values.password
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

<S.Content2>
      <img src={require("../../assets/logo1.PNG")} alt="logo" />
     </S.Content2>
  
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
     
     <S.FormWrap>
    
     <S.ulable for = "acceptTerms">개인정보 수집 및 이용 동의(필수)</S.ulable>
    <S.Box2  type="checkbox" name="acceptTerms" 
            onClick = { handleChange }
     className={
      errors.acceptTerms && touched.acceptTerms ? 'text-input error' : 'text-input'
    }
    /> 
    {errors.acceptTerms && touched.acceptTerms && (
      <S.inputfeedback>{errors.acceptTerms}</S.inputfeedback>
                )}<br/><br/>

<S.textarea>
  여러분을 환영합니다.
도그블록 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 도그블록 서비스의 이용과 관련하여 네이버 서비스를 제공하는 도그블록 주식회사(이하 도그블록)와 이를 이용하는 도그블록 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 네이버 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
 
 </S.textarea>
</S.FormWrap>

              <S.btnForm>
                <S.btn onClick={handleSubmit} type="submit" disabled={isSubmitting}>
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

import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { findPassword } from "../../_actions/user_actions";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import styled from 'styled-components';


function PwFind(props) {

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

  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [number, setNumber] = useState(7777);
  const [emailSave , setEmailSave] = useState('');

 const handleNumberSubmit = (e) => {

    if (e.currentTarget.number.value == number){
      
        props.history.push(`/passwordChange/${ emailSave }`);
             }else{
                 alert("인증번호 일치하지 않습니다")
             }
 }


  return (
    <Formik
      initialValues={{
        email: '',
        number: ''
    
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required')
      
      })}


      onSubmit={(values, { setSubmitting }) => {
         
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
          };

          setEmailSave(values.email);

          dispatch(findPassword(dataToSubmit))
            .then(response => {
              if (response.payload.success) {
                setNumber(response.payload.number)
             
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
                <S.Header style={{fontFamily: "'Cafe24Oneprettynight"}}>비밀번호 찾기</S.Header>
        <S.Content>


          
            <S.FormWrap onSubmit={handleSubmit}>

              <S.FormWrap>
              <S.Ilable for = "email" style={{fontFamily: "'yg-jalnan'"}}>이메일 :</S.Ilable>
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
                </S.FormWrap>

                <S.FormWrap onSubmit={handleSubmit}>
              <S.FormWrap>
                <S.btnForm>
                  <S.btn onSubmit={handleSubmit} style={{fontFamily: "'Cafe24Oneprettynight"}} className="btn btn-gradient-danger btn-rounded btn-fw">
                    인증번호 전송
                </S.btn>
                </S.btnForm>
              </S.FormWrap>




              <S.FormWrap onSubmit ={handleNumberSubmit}>
              <S.Ilable for = "number" style={{fontFamily: "'yg-jalnan'"}}>인증번호 :</S.Ilable>
                
              
                <S.Box
                  id="number"
                  name = "number"
                  placeholder="인증번호 입력해주세요"
                  type="text"
                  value={values.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              

               
                <S.btnForm>
                  <S.btn type = "submit" style={{fontFamily: "'Cafe24Oneprettynight"}} className="btn btn-gradient-danger btn-rounded btn-fw">
                    인증번호 인증
                </S.btn>
                </S.btnForm>
              
            </S.FormWrap >
            </S.FormWrap>
            </S.Content>

          </S.Wrapper>
        );
      }}
    </Formik>
  );    
};

export default withRouter(PwFind);



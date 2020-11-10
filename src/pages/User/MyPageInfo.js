import React from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup';
import { changePw } from '../../_actions/user_actions'
import { useDispatch } from "react-redux";
import { Form } from 'react-bootstrap';
import styled from 'styled-components'

  const S = {
    Header: styled.div`
    padding-top: 142px;
    padding-bottom: 50px;
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
      text-align: right;
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



function MyPageInfo(props) {
  const dispatch = useDispatch();
  const id = props.match.params.userId;

  return (
    

    <Formik
      initialValues={{
        password: '',
        confirmPassword: ''
      }}
      validationSchema={Yup.object().shape({

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
              id : id , 
            password: values.password,           
          };

          dispatch(changePw(dataToSubmit)).then(response => {
            if (response.payload.success) {
                props.history.push("/mypage");
              
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
              <div>
                <div className="d-flex align-items-center auth px-0">
                  <div className="row w-100 mx-0">
                    <div className="col-lg-4 mx-auto">
                      <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                        <div className="brand-logo">
                          <img src={require("../../assets/login.PNG")} alt="logo" />
                        </div>
                        <h2 style={{fontFamily: 'ImcreSoojin'}}>회원정보 수정</h2>
                        <br/><br/>
               <S.Content>
              
              <S.Ilable for = "email" style={{fontFamily: "'yg-jalnan'" }}>이메일</S.Ilable>
              <Form.Control
                  id="id"
                  placeholder= {id}
                  type="id"
                  value={values.id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.id && touched.id ? 'text-input error' : 'text-input'
                  }
                  readOnly
                />
                 
              <br/>
              

             
              <S.Ilable for = "password" style={{fontFamily: "'yg-jalnan'" }}>비밀번호 변경</S.Ilable>
                <Form.Control
                  id="password"
                  placeholder=  "Enter your Password"
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
              
              <br/>
              
              <S.Ilable for = "confirmPassword" style={{fontFamily: "'yg-jalnan'" }}>비밀번호 재입력</S.Ilable>
                <Form.Control
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
             <br/><br/>

             <button onClick={handleSubmit} type="primary" disabled={isSubmitting} style={{fontFamily: "'Cafe24Oneprettynight"}} className="btn btn-block btn-danger btn-lg font-weight-medium auth-form-btn">
                  회원정보 수정
                  </button>
             
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
export default MyPageInfo
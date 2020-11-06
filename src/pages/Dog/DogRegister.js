import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik'; 
import { registerDog } from "../../_actions/dog_action";
import { useDispatch, useSelector } from "react-redux";


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

export default function DogRegister(props) {
    const dispatch = useDispatch();
    const id = useSelector(state => state.user.userData)
    const [file, setFile] = useState('');
    const [nose, setNose] = useState('');
    const [birth, setBirth] = useState('');

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
           
            formData.append('name', values.name);
            formData.append('price', values.price);
            formData.append('owner', id.userId);
            formData.append('picture', file);
            formData.append('birth', birth);
            formData.append('nose', nose);

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
            <S.Header>강아지 등록</S.Header>
                  <S.Content>

                      <S.FormWrap>
                      <S.Ilable for = "name">이름 :</S.Ilable>
                        <S.Box
                          id="name"
                          name = "name"
                          placeholder="Enter your name"
                          type="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                       
                        />
                       
                      </S.FormWrap>
        
                      <S.FormWrap>
                      <S.Ilable for = "price">가격 :</S.Ilable>
                        <S.Box
                          id="price"
                          name = "price"
                          placeholder="Enter your price"
                          type="price"
                          value={values.price}
                          onChange={handleChange}
                          onBlur={handleBlur}
              
                        /></S.FormWrap>

                      <S.FormWrap>
                      <S.Ilable for = "picture"> 강아지 사진 :</S.Ilable>
                        <S.Box
                          id="picture"
                          placeholder="강아지 사진 넣어주세요"
                          type="file"
                          accept = ".jpg"
                          onChange={(e) => setFile(e.target.files[0]) }
                          onBlur={handleBlur}
                        />
                      </S.FormWrap>

                      
                      <S.FormWrap>
                      <S.Ilable for = "birth">출생증명서 :</S.Ilable>
                        <S.Box
                          id="birth"
                          placeholder="출생증명서 넣어주세요"
                          type="file"
                          accept = ".jpg"
                          onChange={(e) => setBirth(e.target.files[0]) }
                          onBlur={handleBlur}
                        />
                      </S.FormWrap>


                      
                      <S.FormWrap>
                      <S.Ilable for = "nose">코지문 :</S.Ilable>
                        <S.Box
                          id="nose"
                          placeholder="Enter your nose"
                          type="file"
                          accept = ".jpg"
                          onChange={(e) => setNose(e.target.files[0]) }
                          onBlur={handleBlur}
                        />
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
           
        


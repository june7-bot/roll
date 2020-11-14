import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik'; 
import { registerDog } from "../../_actions/dog_action";
import { useDispatch, useSelector } from "react-redux";
import { Form, Dropdown, DropdownButton, InputGroup, FormControl } from 'react-bootstrap';
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
    position: fixed;
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
    const dogkind = ["비숑","포메라니안", "푸들" , "치와와", "닥스훈트", "말티즈", "시츄", "요크셔","스피츠","시바견", "웰시코기" , "프렌치불독", "비글", "골든 리트리버", "시베리안 허스키", "보더콜리", "사모예드" , "말라뮤트" ]
    const big = ["골든 리트리버", "시베리안 허스키", "보더콜리", "사모예드" , "말라뮤트"]
    const mid = ["스피츠","시바견", "웰시코기" , "프렌치불독", "비글"]
    const small = ["비숑","포메라니안", "푸들" , "치와와", "닥스훈트", "말티즈", "시츄", "요크셔"]
    
    const doggender = ["남아", "여아"]
    const prevent = ["1차접종 완료", "2차접종 완료", "3차접종 완료", "4차접종 완료", "5차접종 완료"]
    

    const dispatch = useDispatch();
    const id = useSelector(state => state.user.userData)
    const [file, setFile] = useState('');
    const [nose, setNose] = useState('');
    const [birth, setBirth] = useState('');


  
const checkSize = (x) => {
console.log(x);
let test;
console.log(big[0]);
  for (let index = 0; index < big.length; index++) {
    if( x == big[index] ){
      test = "BIG" 

    }
 }
 for (let index = 0; index < mid.length; index++) {
   if(x == mid[index] ){
    test = "MID"

   }
}
for (let index = 0; index < small.length; index++) {
 if( x == small[index] ){
  test = "SMALL"

 }

}
return test;
}


      return (
   
  
          <Formik
            initialValues={{
              name: '',
              price: '',
              age : '',
              kind : '비숑',
              gender : '남아',
              prevent : '1차접종 완료'
            
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
              const size = checkSize(values.kind);
              
              formData.append('name', values.name);
              formData.append('price', values.price);
              formData.append('kind', values.kind);
              formData.append('gender', values.gender);
              formData.append('prevent', values.prevent);
              formData.append('age', values.age);
              formData.append('owner', id.userId);
              formData.append('picture', file);
              formData.append('birth', birth);
              formData.append('nose', nose);
              formData.append('size', size);
                     
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
                          placeholder="이름 입력해주세요"
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
                          placeholder="분양가 입력해주세요"
                          type="price"
                          value={values.price}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <br/>

                      <S.Ilable for = "age" style={{fontFamily: "'yg-jalnan'"}}>나이</S.Ilable>
                        <Form.Control
                          id="age"
                          name = "age"
                          placeholder="나이 입력해주세요"
                          type="number"
                          value={values.age}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <br/>

                        <S.Ilable for = "kind" style={{fontFamily: "'yg-jalnan'"}}>견종</S.Ilable>
                        <Form.Group>
                            
                            <Form.Control as="select" id="kind" name = "kind" value = {values.kind  } onChange = { handleChange } >
                               
                              {dogkind.map(dogskind => 
                              
                                 <option value = { dogskind } > { dogskind }</option>
                              )}

                            </Form.Control>
                        </Form.Group>       
                    

                        <S.Ilable for = "gender" style={{fontFamily: "'yg-jalnan'"}}>성별</S.Ilable>
                        <Form.Group>
                            
                            <Form.Control as="select" id="gender" name = "gender" value = {values.gender  } onChange = { handleChange } >
                               
                              {doggender.map(gender => 
                              
                                 <option value = { gender } > { gender }</option>
                              )}

                            </Form.Control>
                        </Form.Group>       
                        <br/>

                        
                        <S.Ilable for = "prevent" style={{fontFamily: "'yg-jalnan'"}}> 접종 여부</S.Ilable>
                        <Form.Group>
                            
                            <Form.Control as="select" id="prevent" name = "prevent" value = {values.prevent  } onChange = { handleChange } >
                               
                              {prevent.map(dogprevent => 
                              
                                 <option value = { dogprevent } > { dogprevent }</option>
                              )}

                            </Form.Control>
                        </Form.Group>       
                        <br/>


                    <S.Ilable for = "nose" style={{fontFamily: "'yg-jalnan'"}}>강아지 사진</S.Ilable>
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
                    <br/>
                    <S.Ilable for = "nose" style={{fontFamily: "'yg-jalnan'"}}>출생증명서</S.Ilable>
                    <div className="custom-file">
                    <Form.Control
                            id="birth"
                            placeholder="출생증명서 넣어주세요"
                            type="file"
                            accept = ".jpg"
                            onChange={(e) => setBirth(e.target.files[0]) }
                            onBlur={handleBlur}
                            className="custom-file-label"
                          />
                    </div>
                    <br/>
                    <S.Ilable for = "nose" style={{fontFamily: "'yg-jalnan'"}}>코지문</S.Ilable>
                    <div className="custom-file">
                    <Form.Control
                            id="nose"
                            placeholder="Enter your nose"
                            type="file"
                            accept = ".jpg"
                            onChange={(e) => setNose(e.target.files[0]) }
                            onBlur={handleBlur}
                            className="custom-file-label"
                          />
                    </div>


                      <S.btnForm>
                          <button onClick={handleSubmit} type="primary" disabled={isSubmitting} className="btn btn-block btn-danger btn-lg font-weight-medium auth-form-btn"
                          style={{fontFamily: "'Cafe24Oneprettynight"}}>
                             분 양 등 록
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
           
        


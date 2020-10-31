import { Checkbox, Radio } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import styled from 'styled-components';
import { Card, CardGroup } from 'react-bootstrap';
import Buttons from '../../basic_ui/Buttons';


export default class Board extends Component {
    render() {
        
     
      return (
          
        <div>
          <div className="d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <form className="pt-3">
                  
              <CardGroup  style={{width: 800}}>
              <Card>
                  <Card.Img variant="top" src={require("../../assets/3.jpg")}  />
                  <Card.Body>
                  <Card.Text>
                      이름: 봉구<br/>
                      나이: 3<br/>
                      품종: 비숑<br/>
                  </Card.Text>
                  </Card.Body>
                  <Card.Footer align="center">
                  <Button as = "a" href = "/"  type="button">분양받기</Button>
                  </Card.Footer>
              </Card>
              <Card>
                  <Card.Img variant="top" src={require("../../assets/2.jpg")}/>
                  <Card.Body>
                  <Card.Text>
                      이름: 땡구<br/>
                      나이: 2<br/>
                      품종: <br/>
                  </Card.Text>
                  </Card.Body>
                  <Card.Footer align="center">
                  <Button as = "a" href = "/"  type="button">분양받기</Button>
                  </Card.Footer>
              </Card>
              <Card>
                  <Card.Img variant="top" src={require("../../assets/1.jpg")} />
                  <Card.Body>
                  <Card.Text>
                      이름: 봉이<br/>
                      나이: 4<br/>
                      품종: <br/>
                  </Card.Text>
                  </Card.Body>
                  <Card.Footer align="center" aria-setsize>
                  <Button as = "a" href = "/"  type="button">분양받기</Button>
                  </Card.Footer>
              </Card>
              </CardGroup>    
                    
              <Button as = "a" href = "/boardform" fill="solid" type="button">등록하기</Button>
                     
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
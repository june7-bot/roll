import { Checkbox, Radio } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import styled from 'styled-components';
import { Card, CardGroup } from 'react-bootstrap';



export default class Register extends Component {
  render() {
      
   
    return (
        
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <form className="pt-3">
                
            <CardGroup style={{width: 500}}>
            <Card>
                <Card.Img variant="top" src={require("../../assets/rodls.PNG")} />
                <Card.Body color="green">
                <Card.Text>
                    사업자번호가 없는 개인 판매/구입자는 개인회원으로 가입하시기 바랍니다.
                </Card.Text>
                </Card.Body>
                <Card.Footer >
                <Button as = "a" href="/register" fill="solid" type="button">회원가입</Button>

                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={require("../../assets/rldjq.PNG")} />
                <Card.Body>
                <Card.Text>
                    사업자번호가 있는 기업 관계자는 기업회원으로 가입하시기 바랍니다.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button as = "a" href = "/register1" fill="solid" type="button">회원가입</Button>
                </Card.Footer>
            </Card>
            </CardGroup>    
                  
                     <div className="text-center mt-4 font-weight-light">
                    이미 회원이신가요? <Link to="/login" className="text-primary">로그인</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Layout from '../../component/Layout'
import Input from '../../component/UI/Input'

function SignUp() {
  const auth = useSelector((state) => state.auth)
  if (!auth.authenticate) {
    return <Redirect to={'/'}></Redirect>
  }
  return (
    <Layout>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} style={{ marginTop: '50px' }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    type='text'
                    label='First Name'
                    placeholder='First Name'
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    type='text'
                    label='Last Name'
                    placeholder='Last Name'
                    onChange={() => {}}
                  />
                </Col>
              </Row>

              <Input
                type='email'
                label='Email address'
                placeholder='Enter email'
                errors=" We'll never share your email with anyone else."
                onChange={() => {}}
              />

              <Input
                type='password'
                label='Password'
                placeholder='Enter password'
                onChange={() => {}}
              />

              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default SignUp

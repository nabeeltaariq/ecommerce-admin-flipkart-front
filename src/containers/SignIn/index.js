import React, { useState } from 'react'

import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Layout from '../../component/Layout'
import Input from '../../component/UI/Input'

import { login } from '../../actions/'
import { useDispatch } from 'react-redux'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const userLogin = (e) => {
    e.preventDefault()
    const user = {
      email,
      password,
    }
    dispatch(login(user))
  }
  return (
    <Layout>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} style={{ marginTop: '50px' }}>
            <Form onSubmit={userLogin}>
              <Input
                type='email'
                label='Email address'
                placeholder='Enter email'
                value={email}
                errors=" We'll never share your email with anyone else."
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                type='password'
                label='Password'
                value={password}
                placeholder='Enter password'
                onChange={(e) => setPassword(e.target.value)}
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

export default SignIn

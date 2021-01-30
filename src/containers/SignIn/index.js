import React, { useEffect, useState } from 'react'

import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Layout from '../../component/Layout'
import Input from '../../component/UI/Input'

import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../actions'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const userLogin = (e) => {
    e.preventDefault()

    const user = {
      email,
      password,
    }

    dispatch(login(user))
  }

  if (auth.authenticate) {
    return <Redirect to={'/'} />
  } else {
    ;<Redirect to={'/signin'} />
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

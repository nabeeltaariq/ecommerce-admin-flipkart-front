import React from 'react'

import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Layout from '../../component/Layout'
import Input from '../../component/UI/Input'

function SignIn() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} style={{ marginTop: '50px' }}>
            <Form>
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

export default SignIn

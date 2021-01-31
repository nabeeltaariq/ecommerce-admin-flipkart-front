import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../actions/category.actions'
import Layout from '../../component/Layout'

function Category() {
  const dispatch = useDispatch()

  const category = useSelector((state) => state.category)
  useEffect(() => {
    dispatch(getAllCategories())
  }, [])

  console.log(category.categories.categoryList)
  const renderCategories = (categories) => {
    let cat = []
    categories.forEach((category) => {
      cat.push(<li key={category.name}> {category.name}</li>)
    })
    return cat
  }

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>Category</h3>
              <button>Add</button>
            </div>
          </Col>
        </Row>
        <Col md={12}>{renderCategories(category.categories.categoryList)}</Col>
      </Container>
    </Layout>
  )
}

export default Category

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
    console.log('ran')
  }, [])

  console.log(category.categories.categoryList)
  const renderCategories = (categories) => {
    let myCategories = []
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {category.name}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)} </ul>
          ) : (
            ''
          )}
        </li>
      )
    }
    return myCategories
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
        <Col md={12}>{renderCategories(category.categories)}</Col>
      </Container>
    </Layout>
  )
}

export default Category

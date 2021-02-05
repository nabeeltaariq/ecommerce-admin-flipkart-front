import { FormatBoldTwoTone } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, getAllCategories } from '../../actions/category.actions'
import Layout from '../../component/Layout'
import Input from '../../component/UI/Input'

function Category() {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const handleClose = () => {
    const form = new FormData()

    if (categoryName === '') {
      alert('Category name is required')
      setShow(false)
      return
    }

    form.append('name', categoryName)
    form.append('parentId', parentCategoryId)
    form.append('categoryImage', categoryImage)
    dispatch(addCategory(form))
    setCategoryName('')
    setParentCategoryId('')
    setShow(false)
  }
  const handleShow = () => setShow(true)
  const [categoryName, setCategoryName] = useState('')
  const [parentCategoryId, setParentCategoryId] = useState('')
  const [categoryImage, setCategoryImage] = useState('')
  const [checked, setChecked] = useState([])
  const [expanded, setExpanded] = useState([])
  const [checkedArray, setCheckedArray] = useState([])
  const [expandedArray, setExpandedArray] = useState([])
  const [updateCategoryModal, setUpdateCategoryModal] = useState(false)
  const [deleteCategoryModal, setDeleteCategoryModal] = useState(false)

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

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name })
      if (category.children.length > 0) {
        createCategoryList(category.children, options)
      }
    }
    return options
  }
  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0])
  }

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>Category</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
        <Col md={12}>{renderCategories(category.categories)}</Col>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={categoryName}
            placeholder={'Cetgory Name'}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <select
            value={parentCategoryId}
            className='form-control'
            onChange={(e) => setParentCategoryId(e.target.value)}
          >
            <option>select category</option>
            {createCategoryList(category.categories).map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>

          <input
            type='file'
            name='categoryImage'
            placeholder='Category Image'
            onChange={handleCategoryImage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  )
}

export default Category

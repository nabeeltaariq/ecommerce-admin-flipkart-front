import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { signout } from '../../actions'

function Header() {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const logout = () => {
    dispatch(signout())
  }
  const renderLoggedinLinks = () => {
    return (
      <Nav>
        <li className='nav-item'>
          <span className='nav-link' onClick={logout}>
            SignOut
          </span>
        </li>
      </Nav>
    )
  }

  const renderNonLoggedInUsers = () => {
    return (
      <Nav>
        {/* <Nav.Link href='#deets'>SignIn</Nav.Link> */}
        <li className='nav-item'>
          <NavLink to='/signin' className='nav-link'>
            SignIn
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/signup' className='nav-link'>
            SignUp
          </NavLink>
        </li>
      </Nav>
    )
  }
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg='dark'
      variant='dark'
      style={{ zIndex: 1 }}
    >
      <Container fluid>
        <Link to='/' className='navbar-brand'>
          Admin Dashboard{' '}
        </Link>
        <Navbar.Brand href='#home'></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            {/* <Nav.Link href='#features'>Features</Nav.Link>
            <Nav.Link href='#pricing'>Pricing</Nav.Link>
            <NavDropdown title='Dropdown' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {auth.authenticate ? renderLoggedinLinks() : renderNonLoggedInUsers()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

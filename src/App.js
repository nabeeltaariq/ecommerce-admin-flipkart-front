import Layout from './component/Layout'
import './App.css'
import { BrowserRouter as Roter, Route, Switch } from 'react-router-dom'
import Home from './containers/Home/index'
import SignIn from './containers/SignIn/index'
import SignUp from './containers/SignUp/index'
import PrivateRoute from './component/HOC/PrivateRoute'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { isUserLoggedIn } from './actions'
import Products from './containers/Products'
import Orders from './containers/Orders'
import Category from './containers/Category'

function App() {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn)
    }
  }, [])
  return (
    <div className='app'>
      <Switch>
        <PrivateRoute path='/' exact component={Home}></PrivateRoute>
        <PrivateRoute path='/category' component={Category}></PrivateRoute>
        <PrivateRoute path='/products' component={Products}></PrivateRoute>
        <PrivateRoute path='/orders' component={Orders}></PrivateRoute>
        <Route path='/signin' component={SignIn}></Route>
        <Route path='/signup' component={SignUp}></Route>
      </Switch>
    </div>
  )
}

export default App

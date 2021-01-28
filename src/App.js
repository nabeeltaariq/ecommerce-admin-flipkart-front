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
        <Route path='/signin' exact component={SignIn}></Route>
        <Route path='/signup' exact component={SignUp}></Route>
      </Switch>
    </div>
  )
}

export default App

import Layout from './component/Layout'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/Home/index'
import SignIn from './containers/SignIn/index'
import SignUp from './containers/SignUp/index'

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/signin' exact component={SignIn}></Route>
          <Route path='/signup' exact component={SignUp}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

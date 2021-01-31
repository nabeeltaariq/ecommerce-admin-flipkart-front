import authReducer from './auth.reducer'
import { combineReducers } from 'redux'
import userReducer from './user.reducer'
import productReducer from './products.reducers'
import orderReducer from './order.reducer'
import categoryReducer from './category.reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  category: categoryReducer,
  order: orderReducer,
  product: productReducer,
})

export default rootReducer

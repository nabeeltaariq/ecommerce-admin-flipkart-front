import axiosIntance from '../helpers/axios'
import { categoryConstants } from './constants'

export const getAllCategories = () => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST })
    const res = await axiosIntance.get('/category/getcategories')

    if (res.status === 200) {
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories: res.data },
      })
    } else {
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
        payload: { error: res.data.error },
      })
    }
  }
}

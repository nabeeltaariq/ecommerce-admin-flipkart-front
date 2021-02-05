import axiosIntance from '../helpers/axios'
import { categoryConstants } from './constants'

export const getAllCategories = () => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.GET_ALL_CATEGORIES_REQUEST })
    const res = await axiosIntance.get('/category/getcategories')

    if (res.status === 200) {
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
        payload: { categories: res.data.categoryList },
      })
    } else {
      dispatch({
        type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
        payload: { error: res.data.error },
      })
    }
  }
}

export const addCategory = (form) => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.ADD_NEW_CATEGORY_REQUEST })
    try {
      const res = await axiosIntance.post(`/category/create`, form)

      if (res.status === 201) {
        dispatch({
          type: categoryConstants.ADD_NEW_CATEGORY_SUCCESS,
          payload: { category: res.data.category },
        })
      } else {
        dispatch({
          type: categoryConstants.ADD_NEW_CATEGORY_FAILURE,
          payload: res.data.error,
        })
      }
    } catch (error) {
      console.log(error.res)
    }
  }
}

import { categoryConstants } from '../actions/constants'

const initState = {
  loading: true,
  categories: [],
  error: null,
}

export default (state = initState, action) => {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_FAILURE:
      state = {
        initState,
      }
      break
    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
        loading: false,
        error: action.payload.error,
      }
      break
    case categoryConstants.GET_ALL_CATEGORIES_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      }
      break
  }
  return state
}

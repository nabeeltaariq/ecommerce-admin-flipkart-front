import { authConstants } from './constants'

export const login = (user) => {
  return (disptach) => {
    disptach({
      type: authConstants.LOGIN_REQUEST,
      payload: {
        ...user,
      },
    })
  }
}

import {
  SET_CURRENT_USER, REMOVE_CURRENT_USER, GET_USER, CANCEL_GET_USER,
} from './constants'

export const setCurrentUser = user => ({ type: SET_CURRENT_USER, user })
export const removeCurrentUser = () => ({ type: REMOVE_CURRENT_USER })

export const getUser = () => ({ type: GET_USER })
export const cancelGetUser = () => ({ type: CANCEL_GET_USER })

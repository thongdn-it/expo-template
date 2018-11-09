import { SET_CURRENT_USER, REMOVE_CURRENT_USER } from './constants'

export const setCurrentUser = user => ({ type: SET_CURRENT_USER, user })
export const removeCurrentUser = () => ({ type: REMOVE_CURRENT_USER })

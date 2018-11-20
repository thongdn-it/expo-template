import { SET_CURRENT_USER, REMOVE_CURRENT_USER, GET_USER_SUCCESS } from '../actions/constants'

export default function (state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user
    case REMOVE_CURRENT_USER:
      return null
    case GET_USER_SUCCESS:
      return action.payload
    default:
      return state
  }
}

import { SET_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/constants'

export default function (state = null, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user
    case REMOVE_CURRENT_USER:
      return null
    default:
      return state
  }
}

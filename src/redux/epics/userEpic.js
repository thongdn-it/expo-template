import { of, defer } from 'rxjs'
import { mergeMap, takeUntil } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { AsyncStorage } from 'react-native'

import * as actionTypes from '../actions/constants'

const getUserId = async () => {
  const userId = await AsyncStorage.getItem('userToken')
  return userId
}
const fakeApi = () => defer(getUserId)

export default action$ => action$.pipe(
  ofType(actionTypes.GET_USER),
  mergeMap(() => fakeApi().pipe(
    mergeMap(response => of({ type: actionTypes.GET_USER_SUCCESS, payload: response })),
  )),
  takeUntil(action$.ofType(actionTypes.CANCEL_GET_USER)),
)

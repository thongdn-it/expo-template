import { createSwitchNavigator } from 'react-navigation'

import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import SignInScreen from '../screens/SignInScreen'
import MainScreen from '../screens/MainScreen'

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading: AuthLoadingScreen,
  Main: MainScreen,
  Auth: SignInScreen,
})

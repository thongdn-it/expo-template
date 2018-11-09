import React from 'react'
import {
  ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View,
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../redux/actions/userActions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    this.bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    this.props.userActions.setCurrentUser({ userToken: 'abc' })
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Main' : 'Auth')
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

/* props_name: state.reducer_name */
const mapStateToProps = state => ({
  user: state.user,
})

/*
  props_action_name: bindActionCreators(actions, dispatch)
  import * as actions from 'path_to_actions'
*/
const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
})

connect()
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthLoadingScreen)

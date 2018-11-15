import React from 'react'
import {
  View, Button, AsyncStorage, StyleSheet,
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

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  }

  signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc')
    this.props.userActions.setCurrentUser({ userToken: 'abc' })
    this.props.navigation.navigate('Main')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this.signInAsync} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInScreen)

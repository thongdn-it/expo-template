import React from 'react'
import {
  ActivityIndicator, StatusBar, StyleSheet, View,
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
    this.props.userActions.getUser()
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.user) {
      this.props.navigation.navigate('Main')
    } else {
      this.props.navigation.navigate('Auth')
    }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthLoadingScreen)

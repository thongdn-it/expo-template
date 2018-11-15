import React from 'react'
import { Button, AsyncStorage } from 'react-native'
import { ExpoConfigView } from '@expo/samples'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../redux/actions/userActions'

class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'app.json',
    headerRight: <Button onPress={navigation.getParam('onLogout', () => {})} title="Logout" />,
  })

  componentDidMount = () => {
    this.props.navigation.setParams({ onLogout: this.onLogout })
  }

  onLogout = async () => {
    await AsyncStorage.removeItem('userToken')
    this.props.userActions.removeCurrentUser()
    this.props.navigation.navigate('Auth')
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />
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
)(SettingsScreen)

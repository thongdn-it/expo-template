import React from 'react'
import { Button, AsyncStorage } from 'react-native'
import { ExpoConfigView } from '@expo/samples'

export default class SettingsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'app.json',
    headerRight: <Button onPress={navigation.getParam('onLogout', () => {})} title="Logout" />,
  })

  componentDidMount = () => {
    this.props.navigation.setParams({ onLogout: this.onLogout })
  }

  onLogout = async () => {
    await AsyncStorage.removeItem('userToken')
    this.props.navigation.navigate('Auth')
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />
  }
}

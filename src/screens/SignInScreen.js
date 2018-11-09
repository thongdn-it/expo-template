import React from 'react'
import {
  View, Button, AsyncStorage, StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  }

  signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc')
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

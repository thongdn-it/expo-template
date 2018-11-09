import React from 'react'
import { AdMobBanner } from 'expo'
import { View } from 'react-native'
import MainTabNavigator from '../navigation/MainTabNavigator'
import { BANNER_ID } from '../constants/Admob'

export default class MainScreen extends React.Component {
  static router = MainTabNavigator.router

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainTabNavigator navigation={this.props.navigation} />
        <AdMobBanner
          style={{ alignSelf: 'center' }}
          bannerSize="banner"
          adUnitID={BANNER_ID}
          testDeviceID="EMULATOR"
          onDidFailToReceiveAdWithError={(error) => {
            console.error(error)
          }}
        />
      </View>
    )
  }
}

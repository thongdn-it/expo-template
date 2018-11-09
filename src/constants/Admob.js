/* eslint-disable no-undef */
/* eslint-disable no-nested-ternary */
import { Platform } from 'react-native'

const BANNER_IOS = '' // Replace with your-admob-unit-id
const BANNER_ANDROID = '' // Replace with your-admob-unit-id
const BANNER_DEFAULT = 'ca-app-pub-3940256099942544/2934735716'

export const BANNER_ID = __DEV__
  ? BANNER_DEFAULT
  : Platform.OS === 'ios'
    ? BANNER_IOS
    : BANNER_ANDROID

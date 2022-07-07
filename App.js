import { View, Text } from 'react-native'
import React from 'react'
import { MerchantScreen, ProfileTypeScreen, SignInScreen, SignUp, SplashScreen } from './src/screens'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <SplashScreen /> */}
      {/* <MerchantScreen /> */}
      <SignInScreen />
      {/* <ProfileTypeScreen/> */}
      {/* <SignUp /> */}
    </View>
  )
}

export default App

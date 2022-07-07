import {View, Image} from 'react-native'
import React from 'react'
import {colors} from '../../constants/colors'
import {logo, animate} from '../../assets/images'
import {HEIGHT, WIDTH} from '../../constants/Dimensions'

const SplashScreen = () => {

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightBlack,
      }}>
      <Image
        source={logo}
        style={{
          height: HEIGHT * 0.155,
          width: WIDTH * 0.354,
          resizeMode: 'contain',
        }}
      />

      <Image
        source={animate}
        style={{
          height: HEIGHT * 0.2,
          width: WIDTH * 0.646,
          resizeMode: 'contain',
          position: 'absolute',
          alignSelf: 'flex-start',
          bottom: 0,
        }}
      />
    </View>
  )
}

export default SplashScreen

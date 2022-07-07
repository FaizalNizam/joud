import {View, Text} from 'react-native'
import React from 'react'
import {colors} from '../../constants/colors'
import {HEIGHT } from '../../constants/Dimensions'

const MerchantScreen = () => {

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.lightBlack,
      }}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: '500',
          color: colors.white,
          textAlign: 'center',
          lineHeight: HEIGHT * 0.06,
        }}>
        MERCHANT REGISTRATION
      </Text>
    </View>
  )
}

export default MerchantScreen

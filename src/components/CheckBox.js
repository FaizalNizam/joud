import { View, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constants/colors'
import { WIDTH, HEIGHT } from '../constants/Dimensions'
import { tickIcon } from '../assets/images'

const CheckBox = () => {
  const [active, setActive] = useState(false)

  return (
    <Pressable
      onPress={() => setActive(!active)}
      style={{
        height: WIDTH * 0.05,
        width: WIDTH * 0.05,
        borderWidth: 1,
        borderColor: colors.placeholderColor,
        backgroundColor: colors.white,
        borderRadius: WIDTH * 0.017,
      }}>
      {active && (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={tickIcon} resizeMode={'contain'} style={{ tintColor: 'black' }} />
        </View>
      )}
    </Pressable>
  )
}

export default CheckBox

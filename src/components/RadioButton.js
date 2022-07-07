import { Pressable} from 'react-native'
import React from 'react'
import { WIDTH } from '../constants/Dimensions'
import { colors } from '../constants/colors'

const RadioButton = ({ active, setActive, id }) => {
  return (
    <Pressable
      onPress={() => setActive(id)}
      style={{
        height: WIDTH * 0.06,
        width: WIDTH * 0.06,
        borderRadius: WIDTH * 0.031,
        borderWidth: WIDTH * 0.004,
        borderColor: active === id ? colors.magenta : colors.lightWhite,
        backgroundColor: active === id ? colors.magenta : colors.lightBlack
      }}>
    </Pressable>
  )
}

export default RadioButton

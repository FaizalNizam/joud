import { Text, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'

const CommonButton = ({ title, onPress, height, width }) => {
    return (
        <Pressable
            onPress={onPress}
            style={{
                height: height,
                width: width,
                backgroundColor: colors.blue,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Text style={{ fontSize: 16, color: colors.white }}>{title}</Text>
        </Pressable>
    )
}

export default CommonButton
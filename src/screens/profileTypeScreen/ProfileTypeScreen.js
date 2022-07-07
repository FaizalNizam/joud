import { View, Text, Image, StatusBar, Pressable } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../constants/colors'
import { animateMini, backArrowIcon } from '../../assets/images'
import { HEIGHT, WIDTH } from '../../constants/Dimensions'
import RadioButton from '../../components/RadioButton'

const ProfileTypeScreen = () => {
  console.log('height', HEIGHT * 0.2)
  console.log('width', WIDTH * 0.025)

  const [active, setActive] = useState('')

  const data = [
    {
      id: 1,
      title: 'Personal User',
      sub: 'CONTINUE REGISTRATION AS A PERSONAL USER'
    },
    {
      id: 2,
      title: 'Merchant User',
      sub: 'CONTINUE REGISTRATION AS A MERCHANT'

    }
  ]

  return (
    <View
      style={{ flex: 1, backgroundColor: colors.lightBlack, paddingHorizontal: WIDTH * .05 }}
    >

      <StatusBar barStyle='light-content' />

      <Pressable style={{ marginTop: HEIGHT * .07 }}>
        <Image
          source={backArrowIcon}
          style={{ height: HEIGHT * .05, width: WIDTH * .05, resizeMode: 'contain' }} />
      </Pressable>

      <Text
        style={{ fontSize: 37, color: colors.white, marginTop: HEIGHT * .1 }}>CHOOSE{'\n'}PROFILE TYPE</Text>

      <View style={{ marginTop: HEIGHT * .07 }}>
        {data.map((obj, i) => (
          <View
            key={i}
            style={{ height: HEIGHT * 0.131, borderWidth: active === obj.id ? 2 : 1, borderColor: active === obj.id ? colors.magenta : colors.border, borderRadius: WIDTH * .06, flexDirection: 'row', marginBottom: HEIGHT * .02, borderStyle: active === obj.id ? 'solid' : 'dashed' }}
          >
            <View
              style={{ alignItems: 'center', width: WIDTH * .2, marginTop: HEIGHT * .042 }}>
              <RadioButton active={active} setActive={setActive} id={obj.id} />
            </View>

            <View style={{ justifyContent: 'center', flex: 1 }}>
              <Text
                style={{ fontSize: 18, color: active === obj.id ? colors.magenta : colors.lightviolet, fontWeight: 'bold' }}>{obj.title}</Text>
              <Text
                style={{ fontSize: 14, color: colors.lightWhite, marginTop: HEIGHT * .004 }}>{obj.sub}</Text>
            </View>
          </View>
        ))}
      </View>

      <Image
        source={animateMini}
        style={{
          height: HEIGHT * 0.209, width: HEIGHT * 0.209, alignSelf: 'flex-end', position: 'absolute', bottom: 0, resizeMode: 'contain'
        }} />

    </View>
  )
}

export default ProfileTypeScreen
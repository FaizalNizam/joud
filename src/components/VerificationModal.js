import { View, Text, Image, Modal } from 'react-native'
import React from 'react'
import { colors } from '../constants/colors'
import { modalLogo } from '../assets/images'
import CommonButton from './CommonButton'
import { HEIGHT, WIDTH } from '../constants/Dimensions'

const VerificationModal = ({ visible, setVisible }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => setVisible(!visible)}>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, .7)',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: HEIGHT * 0.46,
            width: WIDTH * 0.84,
            backgroundColor: colors.lightBlue,
            alignItems: 'center',
            borderRadius: WIDTH * .05
          }}>
          <Image
            source={modalLogo}
            style={{
              marginTop: HEIGHT * 0.04,
              height: HEIGHT * 0.149,
              width: WIDTH * 0.285,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: colors.modalText1,
              fontWeight: 'bold',
              marginTop: HEIGHT * 0.027,
              width: WIDTH * 0.61,
              textAlign: 'center',
            }}>
            Verify Your Account
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: colors.modalText2,
              width: WIDTH * 0.6,
              textAlign: 'center',
              marginTop: HEIGHT * 0.015
            }}>
            Keep an eye out for a verification
            email to confirm your registration!
          </Text>

          <View style={{ marginTop: HEIGHT * 0.04 }}>
            <CommonButton
              width={WIDTH * 0.67}
              height={HEIGHT * 0.068}
              title={'GOT IT'}
              onPress={() => setVisible(!visible)}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default VerificationModal

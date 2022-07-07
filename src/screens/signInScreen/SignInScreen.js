import { View, Text, Image, StatusBar, TextInput, Pressable } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../../constants/Dimensions'
import { colors } from '../../constants/colors'
import { animateMini } from '../../assets/images'
import CommonButton from '../../components/CommonButton'

const SignInScreen = () => {

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1, backgroundColor: colors.lightBlack }}>
                <Text
                    style={{
                        color: colors.white, fontSize: 37, marginTop: HEIGHT * 0.177, marginLeft: WIDTH * 0.103,
                    }}>
                    SIGN IN
                </Text>
                <Text
                    style={{
                        color: colors.white, fontSize: 18, marginTop: HEIGHT * 0.018, marginLeft: WIDTH * 0.103,
                    }}>
                    Enter your info to login
                </Text>
                <Image
                    source={animateMini}
                    style={{
                        height: HEIGHT * 0.209, width: HEIGHT * 0.209, alignSelf: 'flex-end', position: 'absolute', bottom: 0, resizeMode: 'contain',
                    }}
                />
            </View>
            <View
                style={{ flex: 1, backgroundColor: colors.lightBlue, paddingHorizontal: WIDTH * .075 }}
            >
                <TextInput
                    placeholder='Phone number or email'
                    placeholderTextColor={colors.placeholderColor}
                    style={{ height: HEIGHT * .076, backgroundColor: colors.white, fontSize: 16, borderRadius: WIDTH * 0.025, paddingLeft: WIDTH * .045, marginTop: HEIGHT * .06 }}
                />

                <TextInput
                    placeholder='Password'
                    placeholderTextColor={colors.placeholderColor}
                    style={{ height: HEIGHT * .076, backgroundColor: colors.white, fontSize: 16, borderRadius: WIDTH * 0.025, paddingLeft: WIDTH * .045, marginTop: HEIGHT * .02 }}
                />

                <Pressable>
                    <Text style={{ fontSize: 14, color: colors.violet, marginTop: HEIGHT * .02 }}>Forgot Password ?</Text>
                </Pressable>

                <View style={{ marginTop: HEIGHT * .04 }}>
                    <CommonButton title={'LOGIN'} height={HEIGHT * 0.076} />
                </View>

                <View
                    style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: HEIGHT * .024 }}
                >
                    <Text style={{ fontSize: 14, color: colors.violet }}>Don't have an account ?
                    </Text>
                    <Pressable style={{ marginLeft: WIDTH * .01 }}>
                        <Text style={{ color: colors.blue }}>Sign Up</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

export default SignInScreen

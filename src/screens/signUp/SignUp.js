import { View, Text, Image, StatusBar, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../constants/colors'
import { backArrowIcon, editIcon, dropDownArrow, uploadIcon, deleteIcon, uploadTickIcon } from '../../assets/images'
import { HEIGHT, WIDTH } from '../../constants/Dimensions'
import { profileImage } from '../../assets/images'
import form from '../../constants/form.json'
import CommonButton from '../../components/CommonButton'
import { CheckBox } from '../../components'
import ImagePicker from 'react-native-image-crop-picker'
import VerificationModal from '../../components/VerificationModal'

//import Dropdown from '../../components/Dropdown'

const SignUp = () => {
    console.log('height', HEIGHT * 0.149)
    console.log('width', WIDTH * 0.8)

    const [title, setTitle] = useState('CONTINUE')
    const [profilePic, setProfilePic] = useState()
    const [visible, setVisible] = useState(false)

    //for redux
    const [data, setData] = useState(form.formData)
    const [inputData, setInputData] = useState({})

    const handleData = () => {
        setData(form.fileData)
        setTitle('SIGN UP')
    }

    const handleSignUp = () => {
        setVisible(!visible)
    }

    const filePicker = (key) => {
        ImagePicker.openPicker({
            cropping: true
        }).then(image => {
            key ? setInputData({ ...inputData, [key]: image.path })
                : setProfilePic(image.path)
        }).catch((error) => {
            alert(error.message)
        })
    }

    const handleDelete = (key) => {
        delete inputData[key]
        setInputData({ ...inputData })
    }

    const type = (type, label, key) => {
        switch (type) {
            case 'text':
                return (
                    <TextInput
                        placeholder={label}
                        placeholderTextColor={colors.placeholderColor}
                        style={{ height: HEIGHT * .06, backgroundColor: colors.white, fontSize: 15, borderRadius: WIDTH * 0.024, paddingLeft: WIDTH * .045, marginTop: HEIGHT * .01 }}
                    />
                )

            // case 'select':
            //     return <Dropdown

            //         //key={item.key}
            //         key={1}

            //         //label={item.label}
            //         label={'ffff'}

            //         //data={item?.data}

            //         // error={errors?.[item?.key]}

            //         //placeholder={item.placeholder}
            //         placeholder={'dddd'}

            //     //onChangeText={(value) => handleChange(item.key, value)}

            //     //value={item?.value}

            //     />

            case 'file':
                return (
                    <View>
                        <Pressable
                            onPress={() => filePicker(key)}
                            style={{ height: HEIGHT * .06, backgroundColor: colors.lightWhite, fontSize: 15, borderRadius: WIDTH * 0.024, paddingLeft: WIDTH * .045, marginTop: HEIGHT * .01, borderWidth: 1, borderColor: colors.borderBlue, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                            <Image source={uploadIcon} resizeMode='contain' />
                            <Text style={{ fontSize: 14, color: colors.lightviolet, marginLeft: WIDTH * .03 }}>Add a File</Text>

                        </Pressable>

                        {inputData[key] && <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: WIDTH * .02, marginTop: HEIGHT * .01, marginBottom: HEIGHT * .015 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: WIDTH * 0.8 }}>
                                <Image source={uploadTickIcon} resizeMode='contain' />
                                <Text style={{ color: colors.darkBlue, marginLeft: WIDTH * .02 }}>{inputData[key].replace(/^.*[\\\/]/, '')}</Text>
                            </View>

                            <Pressable onPress={() => handleDelete(key)}>
                                <Image source={deleteIcon} resizeMode={'contain'} />
                            </Pressable>

                        </View>}
                    </View>
                )


            case 'checkBox':
                return (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                        <CheckBox />
                        <Text style={{ fontSize: 14, color: colors.violet }}>I Agree To Joud's</Text>
                        <Pressable>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.blue }}>Terms Of Use</Text>
                        </Pressable>
                        <Text style={{ fontSize: 14, color: colors.violet }}>&</Text>
                        <Pressable>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.blue }}>Privacy Policy</Text>
                        </Pressable>
                    </View>
                )
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.lightBlue }}>
            <StatusBar barStyle='light-content' backgroundColor={colors.lightBlack} />

            <View
                style={{ height: HEIGHT * 0.197 - StatusBar.currentHeight, backgroundColor: colors.lightBlack, paddingHorizontal: WIDTH * .05, borderWidth: 1 }}>

                <View style={{ height: HEIGHT * 0.0822, marginTop: HEIGHT * .07 - StatusBar.currentHeight }}>
                    <Pressable
                        style={{ width: HEIGHT * .03, height: HEIGHT * .03 }}>
                        <Image
                            source={backArrowIcon}
                            style={{ flex: 1, resizeMode: 'contain' }}
                        />
                    </Pressable>

                    <View style={{ marginLeft: WIDTH * .24 }}>
                        <Text style={{ fontSize: 18, color: colors.white, fontWeight: 'bold' }}>Get Started</Text>
                        <Text style={{ fontSize: 14, color: colors.white, marginTop: HEIGHT * .005 }}>Fill In The Form Below To Register</Text>
                    </View>
                </View>

                <View style={{ height: HEIGHT * 0.086, width: HEIGHT * 0.087, backgroundColor: colors.white, borderRadius: WIDTH * 0.04, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={profilePic ? { uri: `file://${profilePic}` } : profileImage}
                        style={{ height: HEIGHT * .086, width: HEIGHT * .087, borderRadius: WIDTH * 0.04, resizeMode: 'contain' }}
                    />
                </View>

                <Pressable
                    onPress={() => filePicker()}
                    style={{ height: WIDTH * .06, width: WIDTH * .06, backgroundColor: colors.green, borderRadius: WIDTH * 0.256, alignItems: 'center', justifyContent: 'center', left: WIDTH * 0.16, position: 'absolute', top: HEIGHT * .22 - StatusBar.currentHeight, left: WIDTH * 0.188 }}>
                    <Image source={editIcon} />
                </Pressable>
            </View>

            <View style={{ paddingHorizontal: WIDTH * .05, marginTop: HEIGHT * .075, height: HEIGHT * .55 }}>
                {
                    data.map((obj, i) => (
                        <View style={{ marginBottom: HEIGHT * .0155 }} key={i}>
                            <Text style={{ color: colors.violet }}>{obj.label}</Text>
                            {
                                type(obj.type, obj.label, obj.key)
                            }
                        </View>
                    ))
                }
            </View>


            <View style={{ paddingHorizontal: WIDTH * .05, marginTop: HEIGHT * .02 + StatusBar.currentHeight }}>
                <CommonButton title={title} height={HEIGHT * 0.076} onPress={() => { title === 'CONTINUE' ? handleData() : handleSignUp() }} />
            </View>

            <View
                style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: HEIGHT * .024 }}
            >
                <Text style={{ fontSize: 14, color: colors.violet }}>Already have an account ?
                </Text>
                <Pressable style={{ marginLeft: WIDTH * .01 }}>
                    <Text style={{ color: colors.blue }}>Sign In</Text>
                </Pressable>
            </View>

            <VerificationModal visible={visible} setVisible={setVisible} />
        </View>
    )
}

export default SignUp
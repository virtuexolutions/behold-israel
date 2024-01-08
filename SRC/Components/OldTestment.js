import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import { moderateScale } from 'react-native-size-matters'
import { windowWidth } from '../Utillity/utils'
import Color from '../Assets/Utilities/Color'

const OldTestment = ({ item }) => {
    return (
        <>


            {/* <CustomText
        onPress={console.log('hello===============>')}
    numberOfLines={1}
        isBold
        style={{
            fontSize: moderateScale(16,.6),
            color: Color.white,
            paddingVertical: moderateScale(5,.6),
            width: windowWidth * 0.45,
            // alignItems: 'center',
            // backgroundColor:'red',
            textAlign:'center',
            paddingTop:moderateScale(20,.6),
            borderBottomWidth:moderateScale(1,.6),
            borderColor:Color.white
        }}>
        {item}
    </CustomText> */}
            <TouchableOpacity
                onPress={() => {
                    console.log('hello===============>')}}
                numberOfLines={1}
                isBold
                style={{
                    paddingVertical: moderateScale(5, .6),
                    width: windowWidth * 0.45,
                    // alignItems: 'center',
                    // backgroundColor:'red',
                    paddingTop: moderateScale(20, .6),
                    borderBottomWidth: moderateScale(1, .6),
                    borderColor: Color.white
                }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: moderateScale(16, .6),
                    color: Color.white,
                }}>

                    {item}
                </Text>
            </TouchableOpacity>

        </>
    )
}

export default OldTestment

const styles = StyleSheet.create({})
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowWidth, windowHeight } from '../Utillity/utils'

import { moderateScale } from 'react-native-size-matters'
import CustomText from './CustomText'

const CardsComponent = ({ item }) => {
    console.log("🚀 ~ file: CardsComponent.js:9 ~ CardsComponent ~ item:", item)
    return (
        <View style={{
            height: windowHeight * 0.17,
            width: windowWidth * 0.93,
            alignSelf : 'center',
            marginVertical : moderateScale(10,0.3),
        }}>
            <ImageBackground

                style={{
                    borderRadius: moderateScale(17, .3),
                    height: '100%',
                    width: '100%', overflow: 'hidden'
                }}
                source={item?.image}>
                <View style={{
                    padding: moderateScale(22, .3),
                }}>
                    <CustomText
                    numberOfLines={1}
                        isBold
                        style={{
                            fontSize: moderateScale(20, 0.6),
                            color: Color.white,
                            paddingVertical: moderateScale(5, .3),
                            width: windowWidth * 0.6,
                        }}>
                        {item?.title}
                    </CustomText>
                    <CustomText
                    numberOfLines={3}

                        isBold
                        style={{
                            fontSize: moderateScale(11, 0.6),
                            color: Color.lightGrey,
                            width: windowWidth * 0.6,

                        }}>
                        {item?.description}
                    </CustomText>
                </View>
            </ImageBackground>
        </View>
    )
}

export default CardsComponent

const styles = StyleSheet.create({})
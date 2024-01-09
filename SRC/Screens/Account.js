import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'

import { ScaledSheet, moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText'
const Account = () => {
    const navigation= useNavigation();
  return (
    <ImageBackground
    style={{
      width: windowWidth,
      minHeight: windowHeight,
      paddingBottom: moderateScale(40, 0.6),
    }}
    source={require('../Assets/Images/setting_Bg.png')}>
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.goBack();
      }}
      style={styles.back}>
      <Icon
        name="arrowleft"
        as={AntDesign}
        style={styles.icon2}
        color={Color.white}
        size={moderateScale(20, 0.3)}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </TouchableOpacity>
    <ScrollView showsVerticalScrollIndicator={false}
    style={{
      marginTop : windowHeight * 0.50,
    }}
    contentContainerStyle={{
      // padding : moderateScale(10,0.6),


    }}
    >
             <CustomText isBold style={{
                color : Color.white,
                width : windowWidth , 
                textAlign : 'center',
                fontSize : moderateScale(20,0.6),
            }}>In Progress.....</CustomText>
    </ScrollView>
  </ImageBackground>
  );
}

export default Account;
const styles = StyleSheet.create({
    back: {
        width: moderateScale(35, 0.6),
        height: moderateScale(35, 0.6),
        borderRadius: moderateScale(5, 0.6),
        borderWidth: 0.5,
        borderColor: '#FFFFFF',
        position: 'absolute',
        left: moderateScale(10, 0.6),
        top: moderateScale(10, 0.6),
        zIndex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
})
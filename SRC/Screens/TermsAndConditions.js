import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from '../Assets/Utilities/Color';

const TermsAndConditions = () => {
  const navigation = useNavigation();
  const termsOfUse = [
    {
      id: 1,
      heading: "Use of the App",
      description: "You will not use the app for unlawful purposes and according to these Terms. You are prohibited from using the app in any manner that would harm, change, or reduce its operability."
    },
    {
      id: 2,
      heading: "Account Responsibilities",
      description: "You are entirely responsible for protecting your account details and managing any activity under that account. You further warrant to promptly notify us of any known or suspected unauthorized use of your account."
    },
    {
      id: 3,
      heading: "Intellectual Property",
      description: "Everything you can see, including the text, images, logos, or any other app material, belongs to Holy Ghost Fraternity or its licensors and is protected by intellectual property laws. All the content on this website may not be used, reproduced, or distributed without our written permission."
    },
    {
      id: 4,
      heading: "Limitation of Liability",
      description: "As much as we endeavor to provide accurate information about the locations and ease of navigation in the app, we would like to inform the users that the information, products, and services provided through the app are provided on an ‘as is’ basis. Where the law allows it, we shall not accept responsibility for losses or damages arising from the use or inability to use the app."
    },
    {
      id: 5,
      heading: "Termination",
      description: "We also retain the right to change your access to and overall app usage immediately. For any reason whatsoever, to our discretion, no reason must be provided. This includes but is not limited to violation of these Terms and part or all of the content deemed unlawful or otherwise harmful to the app and its users."
    }
  ];
  

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: windowHeight * 0.1,
        }}
        contentContainerStyle={
          {
            // padding : moderateScale(10,0.6),
          }
        }>
        <CustomText
          isBold
          style={{
            color: Color.white,
            width: windowWidth,
            textAlign: 'center',
            fontSize: moderateScale(20, 0.6),
          }}>
          Terms & conditions
        </CustomText>
        <CustomText
          style={{
            marginTop: moderateScale(30, 0.3),
            marginHorizontal: moderateScale(10, 0.3),
            color: Color.white,
            // width : windowWidth ,
            textAlign: 'justify',
            fontSize: moderateScale(12, 0.6),
          }}>
          {
            'Use of this app is governed by these Terms and Conditions; therefore, your use implies your acceptance of them. It is advised that the terms and conditions stated in the following pages be well understood before requesting any service from us.'
          }
        </CustomText>
        {termsOfUse.map((item, index) =>{
          return (
            <View>
               <CustomText isBold style={styles.heading}>
           {item.id}. {item?.heading}
        </CustomText>
        <CustomText style={styles.text2}>
        {item.description}
        </CustomText>
            </View>
          )
        })}
      </ScrollView>
    </ImageBackground>
  );
};

export default TermsAndConditions;

const styles = ScaledSheet.create({
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
  heading:{
    // textTransform: 'uppercase',
    marginTop: moderateScale(10, 0.3),
    marginHorizontal: moderateScale(10, 0.3),
    color: Color.white,
    // width : windowWidth ,
    textAlign: 'justify',
    fontSize: moderateScale(14, 0.6),
  },
  text2:{
    marginTop: moderateScale(5, 0.3),
    marginHorizontal: moderateScale(10, 0.3),
    color: Color.white,
    // width : windowWidth ,
    textAlign: 'justify',
    fontSize: moderateScale(12, 0.6),
  }
});

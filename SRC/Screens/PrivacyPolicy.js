// import React, {useState} from 'react';
// import Color from '../Assets/Utilities/Color';
// import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';

// import {
//   ActivityIndicator,
//   ScrollView,
//   View,
//   TouchableOpacity,
//   StyleSheet,
//   ImageBackground,
// } from 'react-native';
// import CustomText from '../Components/CustomText';

// import AntDesign from 'react-native-vector-icons/AntDesign';

// import {Icon} from 'native-base';
// import {ScaledSheet, moderateScale} from 'react-native-size-matters';
// import {useNavigation} from '@react-navigation/native';
// const PrivacyPolicy = () => {

//   return (
//     <ImageBackground
//       style={{
//         width: windowWidth,
//         minHeight: windowHeight,
//         paddingBottom: moderateScale(40, 0.6),
//       }}
//       source={require('../Assets/Images/setting_Bg.png')}>
//       {/* <TouchableOpacity
//         activeOpacity={0.8}
//         onPress={() => {
//           navigation.goBack();
//         }}
//         style={styles.back}>
//         <Icon
//           name="arrowleft"
//           as={AntDesign}
//           style={styles.icon2}
//           color={Color.white}
//           size={moderateScale(20, 0.3)}
//           onPress={() => {
//             navigation.goBack();
//           }}
//         />
//       </TouchableOpacity> */}
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <CustomText>Privacy Policy</CustomText>
//       </ScrollView>
//     </ImageBackground>
//   );
// };

// export default PrivacyPolicy;
// const styles = ScaledSheet.create({
//  
// });

import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import CustomText from '../Components/CustomText'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from '../Assets/Utilities/Color'


const PrivacyPolicy = () => {
  const navigation = useNavigation();
  const privacyPolicy = [
    {
      id: 1,
      heading: "Introduction",
      description: "Regarding privacy, safety, and security, the management of Holy Ghost Fraternity would like to convey our commitment to our members and guests. The following is a general description of how we will handle your personal information."
    },
    {
      id: 2,
      heading: "Information Collection",
      description: "Information we receive from you directly comprises your personal data, name, email, date, and payment information when making a subscription or any other transactions or subscribing to our blog. We also obtain information through cookies and similar tools to optimize your experience within the app."
    },
    {
      id: 3,
      heading: "Use of Information",
      description: "It’s shared with service providers for their use, to communicate with you about services, to optimize transactions, and for personalization. We also may use the data to promote our services and products to you; however, you can unsubscribe."
    },
    {
      id: 4,
      heading: "Data Security",
      description: "To ensure the confidentiality of your data, we follow all the safety protocols the industry sets to secure data from unauthorized access, use, or disclosure. However, always some risks are associated with sending information through the internet or storing it electronically."
    },
    {
      id: 5,
      heading: "Sharing of Information",
      description: "As a matter of policy, we do not share or barter your information with any third-party organization. We can disclose information to third parties helping us run the app, our operations, or our services to you as long as these parties adhere to our privacy policy – non-disclosure."
    },
    {
      id: 6,
      heading: "Your Rights",
      description: "You have the right to receive information about the personal data kept about you, to rectify it, or to erase it. If you want to use your rights in this respect, feel free to contact us."
    },
    {
      id: 7,
      heading: "Changes to This Policy",
      description: "Some changes to this Privacy Policy may be posted on our website and emailed to you, and it is your responsibility to review it to determine if any changes may affect you. Any change we make will be communicated by displaying the new policy on our app and changing the date of this policy."
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
          <ScrollView showsVerticalScrollIndicator={false}
          style={{
            marginTop : windowHeight * 0.1,
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
            }}>Privacy Policy</CustomText>
             {privacyPolicy.map((item,index) =>{
              return(
                <View>
                     <CustomText
  isBold
  style={{
    marginTop: moderateScale(10, 0.3),
    marginHorizontal: moderateScale(10, 0.3),
    color: Color.white,
    // width : windowWidth ,
    textAlign: 'justify',
    fontSize: moderateScale(14, 0.6),
  }}>

{item?.id}. {item?.heading}

</CustomText>
<CustomText
  style={{
    marginTop: moderateScale(5, 0.3),
    marginHorizontal: moderateScale(10, 0.3),
    color: Color.white,
    // width : windowWidth ,
    textAlign: 'justify',
    fontSize: moderateScale(12, 0.6),
  }}>
{item.description}
</CustomText>
                </View>
              );
             })}
</ScrollView>
        </ImageBackground>
  )
}

export default PrivacyPolicy

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
})


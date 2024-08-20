import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../Components/Header';
import BlogComponent from '../Components/BlogComponent';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import Color from '../Assets/Utilities/Color';

const BlogDetails = props => {
  const item = props?.route?.params?.item;
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={{
        width: windowWidth,
        minHeight: windowHeight,
        paddingBottom: moderateScale(40, 0.6),
      }}
      source={require('../Assets/Images/setting_Bg.png')}>
      <View
        style={{
          height: windowHeight * 0.1,
        //   backgroundColor: 'red',
        }}>
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
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
        //   paddingTop: windowHeight * 0.12,
        }}
        contentContainerStyle={{
          paddingBottom: moderateScale(150, 0.3),
        }}>
        <CustomText
          isBold
          style={{
            color: Color.white,
            fontSize: moderateScale(20, 0.6),
            paddingVertical: moderateScale(5, 0.6),
            marginHorizontal: moderateScale(10, 0.6),
          }}>
          {item?.mainHeading}
        </CustomText>
        <CustomText isBold style={styles.heading}>
          introduction :
        </CustomText>
        <CustomText style={styles.text}>{item?.intro}</CustomText>
        <CustomText isBold style={styles.heading}>
          {item?.heading1}
        </CustomText>
        <CustomText style={styles.text}>{item?.text}</CustomText>
        <CustomText isBold style={styles.heading}>
          {item?.heading2}
        </CustomText>
        <CustomText style={styles.text}>{item?.text2}</CustomText>
        <CustomText isBold style={styles.heading}>
          {item?.heading3}
        </CustomText>
        <CustomText style={styles.text}>{item?.text3}</CustomText>
        <CustomText isBold style={styles.heading}>
          {item?.heading4}
        </CustomText>
        <CustomText style={styles.text}>{item?.text4}</CustomText>
        <CustomText isBold style={styles.heading}>
          {item?.heading5}
        </CustomText>
        <CustomText style={styles.text}>{item?.text5}</CustomText>
        <CustomText isBold style={styles.heading}>
          {item?.heading6}
        </CustomText>
        <CustomText style={styles.text}>{item?.text6}</CustomText>
        <CustomText isBold style={styles.heading}>
          {item?.heading7}
        </CustomText>
        <CustomText style={styles.text}>{item?.text7}</CustomText>
        <CustomText isBold style={styles.heading}>
          {item?.heading8}
        </CustomText>
        <CustomText style={styles.text}>{item?.text8}</CustomText>
        <CustomText isBold style={styles.heading}>
          {item?.heading9}
        </CustomText>
        <CustomText style={styles.text}>{item?.text9}</CustomText>
        <CustomText isBold style={styles.heading}>
          {item?.heading10}
        </CustomText>
        <CustomText style={styles.text}>{item?.text10}</CustomText>
        <CustomText isBold style={styles.heading}>
          {item?.heading11}
        </CustomText>
        <CustomText style={styles.text}>{item?.text11}</CustomText>
      </ScrollView>
    </ImageBackground>
  );
};

export default BlogDetails;

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
    // backgroundColor :'red'
  },
  text: {
    color: Color.white,
    lineHeight: 17,
    fontSize: moderateScale(12, 0.6),
    paddingVertical: moderateScale(5, 0.6),
    marginHorizontal: moderateScale(10, 0.6),
  },
  heading: {
    color: Color.white,
    fontSize: moderateScale(15, 0.6),
    paddingVertical: moderateScale(5, 0.6),
    marginHorizontal: moderateScale(10, 0.6),
  },
});

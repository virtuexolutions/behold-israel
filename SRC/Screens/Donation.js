import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import {moderateScale} from 'react-native-size-matters';
import SearchbarComponent from '../Components/SearchbarComponent';
import Feather from 'react-native-vector-icons/Feather';
import {Icon} from 'native-base';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';

const Donation = () => {
  const [money, setMoney] = useState(0);
  return (
    <ImageBackground
      source={require('../Assets/Images/Home_Bg_image.png')}
      resizeMode="cover"
      style={{
        // padding:
        width: windowWidth,
        minHeight: windowHeight,
        alignItems: 'center',
        gap: moderateScale(10, 0.6),
        // justifyContent: 'space-between'
      }}>
      <View style={{marginTop: moderateScale(12, 0.2)}}>
        <CustomText
          isBold
          style={{
            fontSize: moderateScale(20, 0.6),
            color: Color.white,
            textAlign: 'center',
            //   backgroundColor:'green',
            width: windowWidth,
          }}>
          Donations
        </CustomText>
      </View>
      <SearchbarComponent
        placeHolderColor={Color.veryLightGray}
        placeholderName={'What do you need?'}
        SearchStyle={{
          width: windowWidth * 0.95,
          backgroundColor: Color.white,
          // marginTop: -1
        }}
        disable={false}
        // search={searchText}
        // setSearch={setsearchText}
      />
      <ImageBackground
        source={require('../Assets/Images/donation-slider.png')}
        style={{
          width: windowWidth * 0.95,
          height: windowHeight * 0.2,

          // backgroundColor: 'red',
          // justifyContent
        }}
        resizeMode="stretch">
        <CustomText
          style={{
            backgroundColor: 'rgba(255,255,255,0.5)',
            marginHorizontal: moderateScale(12, 0.6),
            paddingVertical: moderateScale(5, 0.6),

            // marginTop: moderateScale(75, 0.9),
            borderRadius: 8,
            fontSize: moderateScale(10, 0.0),
            textAlign: 'center',
            paddingHorizontal: moderateScale(20,0.6),
            position: 'absolute',
            bottom: moderateScale(10, 0.6),
            // overflow:'hidden'
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna
          dolor, efficitur pulvinar placerat sed, auctor vestibulum elit.
        </CustomText>
      </ImageBackground>
      <View
        style={{
          paddingHorizontal: moderateScale(15, 0.6),
          paddingVertical: moderateScale(10, 0.6),
          backgroundColor: 'rgba(150,150,150,0.6)',
          borderRadius: moderateScale(5, 0.6),
          // alignItems: 'center',
        }}>
        <View
          style={{
            width: windowWidth * 0.88,
            height: windowHeight * 0.07,
            backgroundColor: Color.white,
            paddingHorizontal: moderateScale(20, 0.6),
            borderRadius: moderateScale(30, 0.6),
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              money > 0 && setMoney(prev => prev - 10);
            }}
            style={styles.counterButton}>
            <Icon
              name={'minus'}
              as={Feather}
              color={Color.white}
              size={moderateScale(15, 0.6)}
            />
          </TouchableOpacity>
          <CustomText>${money}</CustomText>
          <TouchableOpacity
            onPress={() => {
              setMoney(prev => prev + 10);
            }}
            style={styles.counterButton}>
            <Icon
              name={'plus'}
              as={Feather}
              color={Color.white}
              size={moderateScale(15, 0.6)}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: moderateScale(15, 0.6),
          paddingVertical: moderateScale(10, 0.6),
          backgroundColor: 'rgba(150,150,150,0.6)',
          borderRadius: moderateScale(5, 0.6),
          // alignItems: 'center',
        }}>
        <CustomText
          style={{
            color: Color.white,
            fontSize: moderateScale(17, 0.6),
            marginBottom: moderateScale(10, 0.3),
          }}>
          Card Information
        </CustomText>
        <TextInputWithTitle
          LeftIcon={true}
          titleText={'Enter your card number'}
          placeholder={'Enter your card number'}
          // setText={setConfirmNewPassword}
          // value={confirmNewPassword}
          // secureText={true}
          viewHeight={0.06}
          viewWidth={0.88}
          inputWidth={0.55}
          border={1}
          borderRadius={moderateScale(30, 0.3)}
          borderColor={'#000'}
          backgroundColor={Color.white}
          marginBottom={moderateScale(20, 0.3)}
          color={Color.black}
          placeholderColor={Color.veryLightGray}
          elevation
          keyboardType={'numeric'}
        />
      </View>
      <CustomButton
        isBold
        // onPress={}
        text={'Donate Now'}
        textColor={Color.white}
        width={windowWidth * 0.88}
        height={windowHeight * 0.06}
        fontSize={moderateScale(13, 0.6)}
        // marginBottom={moderateScale(10,.3)}
        // marginTop={moderateScale(20, 0.3)}
        bgColor={Color.theme2}
        borderRadius={moderateScale(30, 0.3)}
        // isGradient
      />
    </ImageBackground>
  );
};

export default Donation;

const styles = StyleSheet.create({
  counterButton: {
    // borderWidth: 5,
    // borderColor: Color.lightGrey,
    height: moderateScale(30, 0.3),
    width: moderateScale(30, 0.3),
    borderRadius: moderateScale(15, 0.3),
    backgroundColor: Color.theme2,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: moderateScale(-30, 0.3),
  },
});

import React, {useState} from 'react';
import {
  Image,
  Dimensions,
  ImageBackground,
  Platform,
  ToastAndroid,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import navigationService from '../navigationService';

import TextInputWithTitle from '../Components/TextInputWithTitle';
import Color from '../Assets/Utilities/Color';
import CustomStatusBar from '../Components/CustomStatusBar';
import CustomText from '../Components/CustomText';

import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import CustomButton from '../Components/CustomButton';
import {ActivityIndicator} from 'react-native';
import {Post} from '../Axios/AxiosInterceptorFunction';
import CardContainer from '../Components/CardsComponent';
// import CustomHeader from '../Components/CustomHeader';
import {Icon} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {setUserToken} from '../Store/slices/auth';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ResetPassword = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const email = props?.route?.params?.email;
  const [password, setPassword] = useState('');
  const [ConfirmPass, setConfirmPass] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = async () => {
    const url = 'password/reset';
    const body = {
      email: email,
      password: password,
      confirm_password: ConfirmPass,
    };
    if (['', null, undefined].includes(email)) {
      return Platform.OS == 'android'
        ? ToastAndroid.show('Email is required', ToastAndroid.SHORT)
        : Alert.alert('email is required');
    }
    setIsLoading(true);
    const response = await Post(url, body, apiHeader());
    setIsLoading(false);
    if(response != undefined){
      console.log("REsponse from Reset Password " , response?.data);
      Platform.OS == 'android' 
      ? ToastAndroid.show("Password reset Successfully", ToastAndroid.SHORT) 
      : Alert.alert('Password reset Successfully');
      navigation.navigate('LoginScreen');
    }
  };

  // const sendOTP = async () => {
  //   const url = 'password/email';
  //   if (['', null, undefined].includes(phone)) {
  //     return Platform.OS == 'android'
  //       ? ToastAndroid.show('Phone number is required', ToastAndroid.SHORT)
  //       : alert('Phone number is required');
  //   }
  //   setIsLoading(true);
  //   const response = await Post(url, {email: phone}, apiHeader());
  //   setIsLoading(false);
  //   if (response != undefined) {
  //     console.log('response data =>', response?.data);
  //     Platform.OS == 'android'
  //       ? ToastAndroid.show(`OTP sent to ${phone}`, ToastAndroid.SHORT)
  //       : alert(`OTP sent to ${phone}`);
  //     fromForgot
  //       ? navigationService.navigate('VerifyNumber', {
  //           fromForgot: fromForgot,
  //           phoneNumber: `${phone}`,
  //         })
  //       : navigationService.navigate('VerifyNumber', {
  //           phoneNumber: `${phone}`,
  //         });
  //   }
  // };

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <ImageBackground
        style={{
          width: windowWidth,
          height: windowHeight,
        }}
        source={require('../Assets/Images/bgc.png')}
        // locations ={[0, 0.5, 0.6]}
      >
        <View
        style={{
          height: moderateScale(30, 0.3),
          width: moderateScale(30, 0.3),
          borderRadius: moderateScale(5, 0.3),
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex:1,
          top: 35,
          left:20,
        }}>
           <Icon
          style={{
            textAlign:'center',
            height :windowHeight*0.05,
            width:windowHeight*0.05,
            borderRadius :windowHeight*0.05 /2,
            backgroundColor :Color.white,
            paddingTop: moderateScale(6.6),

            // marginTop :moderateScale
          }}
            name={'arrow-back'}
            as={Ionicons}
            size={moderateScale(25, 0.3)}
            color={Color.black}
            onPress={() => {
              navigation.goBack();
              // navigationN.dispatch(DrawerActions.toggleDrawer())
              
            }}
          />
        </View>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: moderateScale(20, 0.3),
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: windowHeight,
          }}>
          <View
            style={{
              paddingVertical: moderateScale(30, 0.3),
              alignItems: 'center',
            }}>
            <CustomText isBold style={styles.txt2}>
              Forget Password
            </CustomText>
            {/* <CustomText style={styles.txt3} numberOfLines={2}>
              Forgot your password ? don't worry, jsut take a simple step and
              create your new password!
            </CustomText> */}
{/* 
            <TextInputWithTitle
              titleText={'Enter New Password'}
              secureText={false}
              placeholder={'Enter New Password'}
              setText={setPassword}
              value={password}
              viewHeight={0.07}
              viewWidth={0.75}
              inputWidth={0.7}
              // border={1}
              borderColor={'#ffffff'}
              backgroundColor={'#FFFFFF'}
              marginTop={moderateScale(35, 0.3)}
              color={Color.yellow}
              placeholderColor={Color.themeLightGray}
              // borderRadius={moderateScale(25, 0.3)}
              elevation
            /> */}

            <TextInputWithTitle
              titleText={'Enter New Password'}
              secureText={true}
              placeholder={'Enter New Password'}
              setText={setPassword}
              value={password}
              viewHeight={0.07}
              viewWidth={0.75}
              inputWidth={0.7}
              // border={1}
              borderColor={'#ffffff'}
              backgroundColor={'#FFFFFF'}
              marginTop={moderateScale(35, 0.3)}
              color={Color.yellow}
              placeholderColor={Color.themeLightGray}
              borderRadius={moderateScale(25, 0.3)}
              elevation
            />
            <TextInputWithTitle
              titleText={'Confirm your new password'}
              secureText={true}
              placeholder={'Confirm your new password'}
              setText={setConfirmPass}
              value={ConfirmPass}
              viewHeight={0.07}
              viewWidth={0.75}
              inputWidth={0.7}
              // border={1}
              borderRadius={moderateScale(23, 0.3)}

              borderColor={'#ffffff'}
              backgroundColor={'#FFFFFF'}
              marginTop={moderateScale(15, 0.3)}
              color={Color.yellow}
              placeholderColor={Color.themeLightGray}
              // borderRadius={moderateScale(25, 0.3)}
              elevation
            />
            <CustomButton
              text={
                isLoading ? (
                  <ActivityIndicator color={'#FFFFFF'} size={'small'} />
                ) : (
                  'Reset'
                )
              }
              textColor={Color.white}
              borderRadius={moderateScale(30, 0.3)}
              width={windowWidth * 0.3}
              height={windowHeight * 0.05}
              marginTop={moderateScale(20, 0.3)}
              onPress={() => {
                resetPassword()
                // dispatch(setUserToken({token : 'sadasdawdadas'}))
              }}
              bgColor={Color.red}
              // borderColor={Color.white}
              // borderWidth={2}
              // borderRadius={moderateScale(30, 0.3)}
            />
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </>
  );
};

const styles = ScaledSheet.create({
  txt2: {
    color: Color.themeLightGray,
    fontSize: moderateScale(25, 0.6),
  },
  txt3: {
    color: Color.themeLightGray,
    fontSize: moderateScale(10, 0.6),
    textAlign: 'center',
    width: '80%',
    marginTop: moderateScale(5, 0.3),
    lineHeight: moderateScale(17, 0.3),
  },

  phoneView: {
    width: '80%',
    paddingVertical: moderateScale(5, 0.3),
    flexDirection: 'row',
    marginTop: moderateScale(20, 0.3),
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth * 0.9,
    // marginTop: moderateScale(10,0.3),
  },
  txt4: {
    color: Color.purple,
    fontSize: moderateScale(14, 0.6),
    marginTop: moderateScale(8, 0.3),
    fontWeight: 'bold',
  },
  txt5: {
    color: Color.themeLightGray,
    marginTop: moderateScale(10, 0.3),
    fontSize: moderateScale(12, 0.6),
  },
});

export default ResetPassword;

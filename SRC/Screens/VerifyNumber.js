import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Platform,
  ToastAndroid,
} from 'react-native';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import navigationService from '../navigationService';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import CustomButton from '../Components/CustomButton';
import {ActivityIndicator} from 'react-native';
import {Post} from '../Axios/AxiosInterceptorFunction';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useEffect} from 'react';
// import CardContainer from '../Components/CardContainer';
import CustomStatusBar from '../Components/CustomStatusBar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const VerifyNumber = props => {
  const SelecteduserRole = useSelector(
    state => state.commonReducer.selectedRole,
  );
  const navigation = useNavigation();

  //params
  const fromForgot = props?.route?.params?.fromForgot;
  const email = props?.route?.params?.email;
  const Code= props?.route?.params?.code;
  console.log("🚀 ~ VerifyNumber ~ Code:", Code)

  //states
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const CELL_COUNT = 4;
  const ref = useBlurOnFulfill({code, cellCount: CELL_COUNT});
  const [abcd, getCellOnLayoutHandler] = useClearByFocusCell({
    code,
    setCode,
  });
  const [time, settime] = useState(120);
  const [timerLabel, settimerLabel] = useState('Resend In ');
  if (time > 0) {
    setTimeout(function () {
      settime(time - 1);
    }, 1000);
  }

  const label = () => {
    time == 0 && (settimerLabel('Resend Code '), settime(''));
  };

  // const sendOTP = async () => {
  //   const url = 'password/email';
  //   setIsLoading(true);
  //   const response = await Post(url, {email: email}, apiHeader());
  //   setIsLoading(false);
  //   if (response != undefined) {
  //     Platform.OS == 'android'
  //       ? ToastAndroid.show(`OTP sent to ${email}`, ToastAndroid.SHORT)
  //       : alert(`OTP sent to ${email}`);
  //   }
  // };

  const VerifyOTP = async () => {
    const url = 'password/code/check';
    setIsLoading(true);
    console.log(code);
    const response = await Post(url, {code: code}, apiHeader());
    setIsLoading(false);
    if (response != undefined) {
      Platform.OS == 'android'
        ? ToastAndroid.show(`otp verified`, ToastAndroid.SHORT)
        : alert(`otp verified`);

      navigationService.navigate('ChangePasswordScreen', {email: email});
    }
  };

  useEffect(() => {
    label();
  }, [time]);

  // useEffect(()=>{
  //   if(timerLabel == )
  //   sendOTP();
  // },[timerLabel])

  return (
    <>
      <CustomStatusBar
       backgroundColor={
       Color.white
      }
        barStyle={'dark-content'}
      />
      <ImageBackground
      source={require('../Assets/Images/bgc.png')}
        style={{
          width: windowWidth,
          height: windowHeight,
        }}
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
              Enter OTP
            </CustomText>
            <CustomText style={styles.txt2}>
              Your OTP : {Code}
            </CustomText>
            <CustomText style={styles.txt3}>
            Enter the Code that has been sent to your email address :  {' '} 
              
                <CustomText style={{color: Color.white, textTransform:"none",}}>
                  {/* user3@gmail.com */}
                  {email}
                </CustomText>
              
            </CustomText>
            <CodeField
              placeholder={'0'}
              placeholderTextColor={Color.white}
              ref={ref}
              value={code}
              onChangeText={setCode}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <View
                  onLayout={getCellOnLayoutHandler(index)}
                  key={index}
                  style={[styles.cellRoot, isFocused && styles.focusCell]}>
                  <CustomText
                    style={[
                      styles.cellText,
                      isFocused && {color: Color.black},
                    ]}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </CustomText>
                </View>
              )}
            />
            <CustomText style={[styles.txt3, {width: windowWidth * 0.6}]}>
              Haven't Recieved Verification Code ?{' '}
              {
                <TouchableOpacity
                  disabled={timerLabel == 'Resend Code ' ? false : true}
                  onPress={() => {
                    settimerLabel('ReSend in '), settime(120);
                  }}>
                  <CustomText style={[styles.txt4]}>

                    {timerLabel} {time}
                  </CustomText>
                </TouchableOpacity>
              }
            </CustomText>
            <CustomButton
              // textTransform={"capitalize"}
              text={
                isLoading ? (
                  <ActivityIndicator color={'#ffffff'} size={'small'} />
                ) : (
                  'Verify now'
                )
              }
              isBold
              textColor={Color.white} 
              borderRadius={moderateScale(30, 0.3)}
              width={windowWidth * 0.35}
              height={windowHeight * 0.05}
              marginTop={moderateScale(20, 0.3)}
              onPress={() => {
               VerifyOTP()
              }}
              bgColor={Color.red
              }
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
    textTransform: 'uppercase',
  },
  txt3: {
    color: Color.themeLightGray,
    fontSize: moderateScale(11, 0.6),
    textAlign: 'center',
    width: windowWidth * 0.75,
    marginTop: moderateScale(10, 0.3),
    lineHeight: moderateScale(20, 0.3),
  },
  txt4: {
    color: Color.yellow,
    fontSize: moderateScale(14, 0.6),
    borderBottomWidth: 1,
    borderColor: Color.white,
    // alignSelf : 'center'
  },
  txt5: {
    color: Color.black,

    fontSize: moderateScale(12, 0.6),
  },

  codeFieldRoot: {
    marginTop: moderateScale(20, 0.3),
    marginBottom: moderateScale(15, 0.3),
    width: windowWidth * 0.6,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: moderateScale(40, 0.3),
    height: moderateScale(40, 0.3),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: moderateScale(5, 0.3),
    // backgroundColor: Color.black,
    // borderRadius: moderateScale(10, 0.3),
  },
  focusCell: {
    // backgroundColor: Color.themeColor,
    // borderRadius: moderateScale(10, 0.3),

    borderColor: Color.yellow,
    borderWidth: 1,
  },
  cellText: {
    color: Color.yellow,
    fontSize: moderateScale(20, 0.3),
    textAlign: 'center',
  },
});

export default VerifyNumber;

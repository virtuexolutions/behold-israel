import React, {useState} from 'react';
import {
  Image,
  Dimensions,
  ImageBackground,
  Platform,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
import CardContainer from '../Components/CardContainer';
// import CustomHeader from '../Components/CustomHeader';
import {Icon} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {setUserToken} from '../Store/slices/auth';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../Components/Header';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ChangePassword = props => {
  const navigationN = useNavigation();
  const SelecteduserRole = useSelector(
    state => state.commonReducer.selectedRole,
  );
  const dispatch = useDispatch();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <CustomStatusBar
        backgroundColor={Color.white}
        barStyle={'dark-content'}
      />
      <Header
        showBack={true}
        title={'Change Password'}
        headerColor={['#CBE4E8', '#D2E4E4']}
       
      />

      <LinearGradient
        style={{
          width: windowWidth,
          height: windowHeight*0.9,
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#D2E4E4', '#D2E4E4']}
        // locations ={[0, 0.5, 0.6]}
      >
        {/* <TouchableOpacity
          activeOpacity={0.8}
          style={{
            position: 'absolute',
            top: moderateScale(20, 0.3),
            left: moderateScale(20, 0.3),
            height: moderateScale(30, 0.3),
            width: moderateScale(30, 0.3),
            borderRadius: moderateScale(5, 0.3),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            zIndex: 1,
          }}>
          <Icon
            name={'arrowleft'}
            as={AntDesign}
            size={moderateScale(22, 0.3)}
            color={Color.themeColor}
            onPress={() => {
              navigationN.goBack();
            }}
          />
        </TouchableOpacity> */}
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            // paddingBottom: moderateScale(20, 0.3),
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: windowHeight*0.9,
          }}>
          <CardContainer
            style={{
              paddingVertical: moderateScale(30, 0.3),
              alignItems: 'center',
              // backgroundColor:'white',
            }}>
            <CustomText isBold style={styles.txt2}>
              Change Password
            </CustomText>
            <CustomText style={styles.txt3}>
              Want to change password ? don't worry, jsut take a simple step and
              create your new password!
            </CustomText>

            <TextInputWithTitle
              titleText={'Current Passwrod'}
              secureText={false}
              placeholder={'Current Passwrod'}
              setText={setCurrentPassword}
              value={currentPassword}
              viewHeight={0.06}
              viewWidth={0.75}
              inputWidth={0.7}
              // border={1}
              borderColor={'#ffffff'}
              backgroundColor={'#FFFFFF'}
              marginTop={moderateScale(35, 0.3)}
              color={Color.themeColor}
              placeholderColor={Color.themeLightGray}
              borderRadius={moderateScale(25, 0.3)}
              elevation
            />

            <TextInputWithTitle
              titleText={'Enter New Password'}
              secureText={false}
              placeholder={'Enter New Password'}
              setText={setNewPassword}
              value={newPassword}
              viewHeight={0.06}
              viewWidth={0.75}
              inputWidth={0.7}
              // border={1}
              borderColor={'#ffffff'}
              backgroundColor={'#FFFFFF'}
              marginTop={moderateScale(10, 0.3)}
              color={Color.themeColor}
              placeholderColor={Color.themeLightGray}
              borderRadius={moderateScale(25, 0.3)}
              elevation
            />
            <TextInputWithTitle
              titleText={'Confirm your new password'}
              secureText={false}
              placeholder={'Confirm your new password'}
              setText={setConfirmNewPassword}
              value={confirmNewPassword}
              viewHeight={0.06}
              viewWidth={0.75}
              inputWidth={0.7}
              // border={1}
              borderColor={'#ffffff'}
              backgroundColor={'#FFFFFF'}
              marginTop={moderateScale(10, 0.3)}
              color={Color.themeColor}
              placeholderColor={Color.themeLightGray}
              borderRadius={moderateScale(25, 0.3)}
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
              width={windowWidth * 0.75}
              height={windowHeight * 0.06}
              marginTop={moderateScale(20, 0.3)}
              onPress={() => {
                dispatch(setUserToken({token: 'sadasdawdadas'}));
              }}
              bgColor={
                SelecteduserRole == 'Qbid member'
                  ? Color.blue
                  : Color.themeColor
              }
              // borderColor={Color.white}
              // borderWidth={2}
              borderRadius={moderateScale(30, 0.3)}
            />
          </CardContainer>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </>
  );
};

const styles = ScaledSheet.create({
  txt2: {
    color: Color.black,
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

export default ChangePassword;

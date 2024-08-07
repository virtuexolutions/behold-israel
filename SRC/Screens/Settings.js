import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import CustomImage from '../Components/CustomImage';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {moderateScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import {Icon} from 'native-base';
import navigationService from '../navigationService';
import {setUserLogOut} from '../Store/slices/common';
import {useDispatch, useSelector} from 'react-redux';
import {SetUserRole, setUserLogoutAuth} from '../Store/slices/auth';
import { baseUrl } from '../Config';
// import {setUserLogOut} from '../Store/slices/common';

const Settings = () => {
  const userData = useSelector(state => state.commonReducer.userData);
  const dispatch = useDispatch();
  const options = [
    {
      id: 1,
      name: 'Profile',
      next: '>',
      onPress: () => {
        navigationService.navigate('Profile');
      },
    },
    {
      id: 2,
      name: 'Privacy Policy',
      next: '>',
      onPress: () => {
        navigationService.navigate('PrivacyPolicy');
      },
    },
    {
      id: 3,
      name: 'Donation History',
      next: '>',
      onPress: () => {
        navigationService.navigate('DonationHistory');
      },
    },
    {
      id: 3,
      name: 'events and community ',
      next: '>',
      onPress: () => {
        navigationService.navigate('EventAndComunity');
      },
    },
    // {
    //   id: 3,
    //   name: 'form',
    //   next: '>',
    //   onPress: () => {
    //     navigationService.navigate('Form');
    //   },
    // },
    // {
    //   id: 3,
    //   name: 'good things',
    //   next: '>',
    //   onPress: () => {
    //     navigationService.navigate('GoodThings');
    //   },
    // },
    // {
    //   id: 4,
    //   name: 'Scan',
    //   // next: '>',
    //   onPress: () => {
    //     navigationService.navigate('ScanScreen');
    //   },
    // },
    // {
    //   id: 4,
    //   name: ' Qr Scan',
    //   // next: '>',
    //   onPress: () => {
    //     navigationService.navigate('QrScanScreen');
    //   },
    // },
    {
      id: 4,
      name: 'Terms & Condition',
      next: '>',
      onPress: () => {
        navigationService.navigate('TermsAndConditions');
      },
    },
    {
      id: 7,
      name: 'Your Orders',
      next: '>',
      onPress: () => {
        navigationService.navigate('YourOrders');
      },
    },
    {
      id: 8,
      name: 'Account',
      next: '>',
      onPress: () => {
        navigationService.navigate('MyAccounts');
      },
    },
    {
      id: 9,
      name: 'Help & support',
      next: '>',
      onPress: () => {
        navigationService.navigate('HelpAndSupport');
      },
    },
    {
      id: 10,
      name: 'Change Password',
      next: '>',
      onPress: () => {
        navigationService.navigate('ChangePasswordScreen');
      },
    },
    {
      id: 11,
      name: 'Logout',
      next: '>',
      onPress: () => {
        dispatch(setUserLogOut());
        dispatch(setUserLogoutAuth());
        // dispatch(setUserLogOut());
        dispatch(SetUserRole(''));
        console.log('logout=======>');
        // navigationService.navigate('LoginScreen')
      },
    },
  ];
  return (
    <ScrollView style={styles.mainScreen}>
    <ImageBackground
      resizeMode="cover"
      style={styles.mainScreen}
      source={require('../Assets/Images/setting_Bg.png')}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <CustomImage
            resizeMode="cover"
            source={
              userData?.photo ? {uri: `${baseUrl}${userData?.photo}`} :
              require('../Assets/Images/dummyUser1.png')}
            style={{
              width: '100%',
              height: '100%',
              // backgroundColor: 'blue',
            }}
          />
        </View>
        <View style={styles.userInfo}>
          <CustomText style={styles.txt5}>{userData?.name}</CustomText>
          <CustomText style={styles.txt6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed magna
            dolor, efficitur pulvinar placerat sed, auctor vestibulum elit.
          </CustomText>
        </View>
      </View>

      <View style={styles.optionsContainer}>
        {options.map((item, index) => (
          <TouchableOpacity
            onPress={item?.onPress}
            key={index}
            style={[styles.option, item.name === 'Logout' && styles.logout]}>
            <CustomText style={{color: '#FFFF'}}>{item.name}</CustomText>
            {item.name === 'Logout' ? (
              <Icon
                as={Ionicons}
                name="exit-outline"
                size={5}
                color={'#FFFF'}
              />
            ) : (
              <CustomText style={{color: '#FFFF'}}>{item.next}</CustomText>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>

    </ScrollView>

  );
};

export default Settings;

const styles = StyleSheet.create({
  mainScreen: {
  width: windowWidth,
  height:windowHeight
  },
  imageContainer: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    borderColor: 'red',
    borderRadius: (windowWidth * 0.3) / 2,
    borderWidth: 2,
    overflow: 'hidden',
  },
  image: {
    // borderRadius:100,
    width: '100%',
    height: 200,
  },
  header: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 12,
  },
  userInfo: {
    marginRight: 24,
  },
  txt5: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFF',
  },
  txt6: {
    fontSize: 12,
    textAlign: 'left',
    width: windowWidth * 0.6, // fontWeight: 'bold',
    color: '#FFFF',
  },
  option: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#FFFF',
    borderBottomWidth: 1,
  },
  logout: {
    borderBottomWidth: 0,
  },
  optionsContainer: {
    paddingVertical: 12,
    paddingHorizontal: 13,
    marginHorizontal: 14,
    marginVertical: 15,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 2,
    borderRightWidth: 2,

    borderBottomColor: '#0000003D',
    borderColor: '#FFFF',
    borderRadius: 12,
  },
});

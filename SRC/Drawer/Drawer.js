import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PlatformColor,
  ToastAndroid,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../Components/CustomText';
import {Icon} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useNavigation} from '@react-navigation/native';
import {SetUserRole, setUserLogoutAuth} from '../Store/slices/auth';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLogOut} from '../Store/slices/common';
import navigationService from '../navigationService';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Drawer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector(state => state.commonReducer.userData);
  const token = useSelector(state => state.authReducer.token);
  const role = useSelector(state => state.authReducer.role);

  const data = [
    {
      name: 'Home',
      // iconName: 'home',
      // iconType: Entypo,
      onPress: () => {
        navigation.navigate('HomeScreen');
      },
    },
    {
      name: 'About us',
      iconName: 'chevron-down',
      iconType: EvilIcons,
      onPress: () => {
        Platform.OS == 'android'
          ? ToastAndroid.show(`Action require`, ToastAndroid.SHORT)
          : alert(`Action require`);
        // navigation.navigate('Orders');
      },
    },
    {
      name: 'Sharing with other',
      iconName: 'chevron-down',
      iconType: EvilIcons,
      onPress: () => {
        navigation.navigate('Donation');
      },
    },

    {
      name: 'campaigns',
      iconName: 'chevron-down',
      iconType: EvilIcons,
      onPress: () => {
        navigation.navigate('Campaigns');
      },
    },
    {
      name: 'resources',
      iconName: 'chevron-down',
      iconType: EvilIcons,
      onPress: () => {
        Platform.OS == 'android'
          ? ToastAndroid.show(`Action require`, ToastAndroid.SHORT)
          : alert(`Action require`);
     
        // navigation.navigate('ChangePassword');
      },
    },
    {
      name: 'shop',
      iconName: 'chevron-down',
      iconType: EvilIcons,
      onPress: () => {
        navigation.navigate('StoreScreen');
      },
    },
    {
      name: 'MemberShip',
      // iconName: 'chevron-down',
      // iconType: EvilIcons,
      onPress: () => {
        navigation.navigate('MemberShipForm');
      },
    },
    {
      name: 'Calender',
      // iconName: 'chevron-down',
      // iconType: EvilIcons,
      onPress: () => {
        navigation.navigate('CalendarScreen');
      },
    },
    {
      name: 'Qr Scan',
      // iconName: 'chevron-down',
      // iconType: EvilIcons,
      onPress: () => {
        navigation.navigate('QrScanScreen');
      },
    },
    {
      name: 'GoodThings',
      // iconName: 'chevron-down',
      // iconType: EvilIcons,
      onPress: () => {
        navigation.navigate('GoodThings');
      },
    },
    {
      name: 'blogs',
      onPress: () => {
        Platform.OS == 'android'
          ? ToastAndroid.show(`Action require`, ToastAndroid.SHORT)
          : alert(`Action require`);
      },
    },
    {
      name: 'join us',
      onPress: () => {
        Platform.OS == 'android'
          ? ToastAndroid.show(`Action require`, ToastAndroid.SHORT)
          : alert(`Action require`);
      },
    },
  ];

  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      <View
        style={{
          overflow: 'hidden',
          width: windowWidth * 0.71,
          backgroundColor: '#D3D3D3',
          height: windowHeight,
          borderTopRightRadius: moderateScale(35, 0.6),
          borderBottomRightRadius: moderateScale(35, 0.6),
        }}>
        <View
          style={{
            // backgroundColor :'red',
            // marginTop :moderateScale(10,.6),
            flexDirection: 'row',
            // position :'absolute',

            marginTop: moderateScale(45, 0.3),
            alignItems: 'center',
            marginLeft: moderateScale(10, 0.3),
          }}>
          <View style={styles.Profile}>
            <CustomImage
              resizeMode={'cover'}
              source={require('../Assets/Images/dummyUser.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>

          <View style={{marginLeft: moderateScale(10, 0.3)}}>
            <CustomText
              style={{fontSize: moderateScale(16, 0.6), color: Color.black}}
              isBold>
              john
            </CustomText>

            <CustomText
              style={{
                width: windowWidth * 0.4,
                fontSize: moderateScale(11, 0.6),
                color: Color.black,
              }}>
              john@gmail.com
            </CustomText>
          </View>
        </View>
        <View
          style={{
            marginLeft: moderateScale(20, 0.3),
            marginTop: moderateScale(25, 0.3),
          }}>
          {data.map((item, index) => (
            <>
              <TouchableOpacity
                onPress={item?.onPress}
                style={{
                  // width :'100%',
                  width: windowWidth * 0.6,
                  // justifyContent :'space-around',
                  // borderBottomWidth: 0.5,
                  borderColor: Color.black,
                  marginVertical: moderateScale(10, 0.3),
                  flexDirection: 'row',
                  borderColor: Color.veryLightGray,
                  borderBottomWidth: moderateScale(1, 0.6),
                  // alignItems: 'center',
                }}>
                <CustomText
                  style={{
                    fontSize: moderateScale(14, 0.6),
                    color: Color.black,
                    marginLeft: moderateScale(0, 0.3),
                  }}>
                  {item.name}
                </CustomText>
                {item?.iconName && (
                  <Icon
                    style={{
                      position: 'absolute',
                      right: 0,
                    }}
                    name={item?.iconName}
                    as={item?.iconType}
                    size={moderateScale(25, 0.3)}
                    color={Color.black}
                    onPress={item?.onPress}
                  />
                )}
              </TouchableOpacity>
            </>
          ))}
        </View>
        {/* )} */}
      </View>
      <View
        style={{
          marginLeft: moderateScale(10, 0.3),
          marginTop: moderateScale(40, 0.3),
          position: 'absolute',
          bottom: 40,
        }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(setUserLogoutAuth());
            dispatch(setUserLogOut());
          }}
          style={{
            width: windowWidth * 0.45,
            margin: moderateScale(15, 0.3),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <CustomText
            style={{
              paddingHorizontal: moderateScale(10, 0.3),
              fontSize: moderateScale(14, 0.6),
              color: Color.black,
              marginLeft: moderateScale(10, 0.3),
            }}>
            sign out
          </CustomText>
          <Icon
            name={'logout'}
            as={AntDesign}
            // style={styles.icon2}
            color={Color.black}
            size={moderateScale(16, 0.3)}
          />
        </TouchableOpacity>
      </View>
    </ScreenBoiler>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  Profile: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    borderRadius: (windowWidth * 0.2) / 1,
    borderWidth: 1,
    borderColor: Color.white,
    overflow: 'hidden',
  },
});

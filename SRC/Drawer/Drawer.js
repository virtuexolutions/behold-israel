import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PlatformColor,
  ToastAndroid,
  LayoutAnimation,
  ScrollView,
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
  const [menuIndex, setMenuIndex] = useState(-1);
  const [nestedMenuIndex, setNestedMenuIndex] = useState(-1);
  // const [menuName, setMenuName] = useState('');
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
      // iconName: menuName == 'About us' ?'chevron-up' : 'chevron-down',
      iconName: menuIndex == 1 ? 'chevron-up' : 'chevron-down',
      iconType: EvilIcons,
      menuItems: [
        {Id: '1', name: 'Our Mission', onPress: () => {}},
        {Id: '2', name: 'Our Team', onPress: () => {}},
        {Id: '3', name: 'History', onPress: () => {}},
      ],
      onPress: index => {
        LayoutAnimation.configureNext(
          LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
        );
        setMenuIndex(menuIndex === index ? -1 : index);
        // setMenuName(data[index].name);
      },
    },
    {
      name: 'Sharing with other',
      iconName: menuIndex == 2 ? 'chevron-up' : 'chevron-down',
      iconType: EvilIcons,
      menuItems: [
        {Id: '1', name: 'Donation', onPress: () => {}},
        {Id: '2', name: 'Support for life', onPress: () => {}},
        {Id: '3', name: 'Giving', onPress: () => {}},
      ],
      onPress: index => {
        LayoutAnimation.configureNext(
          LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
        );
        setMenuIndex(menuIndex === index ? -1 : index);
       
      },
    },

    {
      name: 'campaigns',
      iconName: menuIndex == 3 ? 'chevron-up' : 'chevron-down',
      iconType: EvilIcons,
      menuItems: [
        {Id: '1', name: 'Events & Community', onPress: () => {}},
        {Id: '2', name: 'Out-Reach & Missions', onPress: () => {}},
        // {Id: '3', name: 'Who are we?', onPress: () => {}},
      ],
      onPress: index => {
        LayoutAnimation.configureNext(
          LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
        );
        setMenuIndex(menuIndex === index ? -1 : index);
        // Platform.OS == 'android'
        //   ? ToastAndroid.show(`Action require`, ToastAndroid.SHORT)
        //   : alert(`Action require`);
        // navigation.navigate('Orders');
      },
    },
    {
      name: 'resources',
      iconName: menuIndex == 4 ? 'chevron-up' : 'chevron-down',
      iconType: EvilIcons,
      menuItems: [
        {Id: '1', name: 'Educational Materials', onPress: () => {}},
        {Id: '2', name: 'Historical Documents', onPress: () => {}},
        {Id: '3', name: 'Documentary Films', onPress: () => {}},
      ],
      onPress: index => {
        LayoutAnimation.configureNext(
          LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
        );
        setMenuIndex(menuIndex === index ? -1 : index);
      },
    },
    {
      name: 'shop',
      iconName: menuIndex == 5 ? 'chevron-up' : 'chevron-down',
      iconType: EvilIcons,
      menuItems: [
        {Id: '1', name: 'Middle Eastern Goods', onPress: () => {}},
        {Id: '2', name: 'Religious Items', onPress: () => {}},
        {Id: '3', name: 'Bible Study Materials', onPress: () => {}},
      ],
      onPress: index => {
        LayoutAnimation.configureNext(
          LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
        );
        setMenuIndex(menuIndex === index ? -1 : index);
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
      <ScrollView
      style={{height: windowHeight}}
      >
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
            <View
              style={{
                borderColor: Color.veryLightGray,
                width: windowWidth * 0.6,

                borderBottomWidth: moderateScale(1, 0.6),
              }}>
              <TouchableOpacity
                onPress={
                  item?.menuItems ? () => item?.onPress(index) : item?.onPress
                }
                style={{
                  // width :'100%',
                  width: windowWidth * 0.6,
                  // justifyContent :'space-around',
                  // borderBottomWidth: 0.5,
                  borderColor: Color.black,
                  marginVertical: moderateScale(10, 0.3),
                  flexDirection: 'row',

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
              {item?.menuItems && menuIndex === index && (
                <View style={{paddingLeft: moderateScale(7,0.4)}}>
                  {item.menuItems.map((subMenu, index) => (
                    <TouchableOpacity key={index} onPress={subMenu?.onPress}>
                      <View style={styles.subMenu}>
                        <CustomText style={{color: Color.themeDarkGray}}>{subMenu.name}</CustomText>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              {/* <View style={{borderwidth: 1, }}></View> */}
            </View>
          ))}
        </View>
        {/* )} */}
      </View>

      <View
        style={{
        // marginLeft: moderateScale(5, 0.3),
          marginTop: moderateScale(40, 0.3),
          position: 'absolute',
          bottom: menuIndex > -1 ? -10 : 50,
          left:-15,
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
      </ScrollView>
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
  subMenu: {
    marginVertical: moderateScale(4, 0.3),
  },
});

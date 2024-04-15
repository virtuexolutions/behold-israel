import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationService from './navigationService';
import {useSelector} from 'react-redux';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Signup from './Screens/Signup';
import LoginScreen from './Screens/LoginScreen';
import BibleCategories from './Screens/BibleCategories';
import TestmentsScreeen from './Screens/TestmentsScreeen';
import OldTestamentCategories from './Screens/oldTestamentCategories';
import BookDescriprtionScreen from './Screens/BookDescriptionScreen';
// import HomeScreen from './Screens/HomeScreen';

import Settings from './Screens/Settings';
import HomeScreen from './Screens/HomeScreen';
import StoreScreen from './Screens/StoreScreen';
import Color from './Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import RecordedLecture from './Screens/RecordedLecture';
import LiveLecture from './Screens/LiveLecture';
import KidsLectureScreen from './Screens/KidsLectureScreen';
import {Icon} from 'native-base';
import Donation from './Screens/Donation';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';
import {windowHeight} from './Utillity/utils';
import Profile from './Screens/Profile';
import PrivacyPolicy from './Screens/PrivacyPolicy';
import TermsAndConditions from './Screens/TermsAndConditions';
import DonationHistory from './Screens/DonationHistory';
import Account from './Screens/Account';
import HelpAndSupport from './Screens/HelpAndSupport';
import WalkThroughScreen from './Screens/WalkthroughScreen';
import Campaigns from './Screens/Campaigns';
import DonationDetails from './Screens/DonationDetails';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import DonateNow from './Screens/DonateNow';
import CheckOutScreen from './Screens/CheckoutScreen';
import ProductDetails from './Screens/ProductDetails';
import ProductDetail from './Screens/ProductDetail';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import MemberShipForm from './Screens/MemberShipForm';
import Form from './Screens/Form';
import Drawer from './Drawer/Drawer';
import GoodThings from './Screens/GoodThings';
import ScanScreen from './Screens/ScanScreen';
import QrScanScreen from './Screens/QrScanScreen';
import CalendarScreen from './Screens/CalendarScreen';

import ChangePassword from './Screens/ChangePassword';

const AppNavigator = () => {
  // const isLogin = false;
  const isGoalCreated = useSelector(state => state.authReducer.isGoalCreated);
  const walkThrough = useSelector(state => state.authReducer.userWalkThrough);
  const role = useSelector(state => state.authReducer.role);
  console.log('🚀 ~ file: appNavigation.js:31 ~ AppNavigator ~ role:', role);

  console.log(
    '🚀 ~ file: appNavigation.js:27 ~ AppNavigator ~ walkThrough:',
    walkThrough,
  );

  const isVerified = useSelector(state => state.authReducer.isVerified);
  const token = useSelector(state => state.authReducer.token);
  console.log('🚀 ~ file: appNavigation.js:33 ~ AppNavigator ~ token:', token);

  // console.log('token>>>>', token);
  // console.log('isVerified', isGoalCreated);

  const RootNav = createNativeStackNavigator();
  const RootNavLogged = createNativeStackNavigator();

  const AppNavigatorContainer = () => {
    // const HomeScreen =
    //   role == 'admin'
    //     ? 'MyDrawer'
    //     : role == 'customer'
    //     ? 'HomeScreenOther'
    //     : 'HomeScreenOther';
    const firstScreen = !walkThrough
      ? 'WalkThroughScreen'
      : token == null
      ? 'LoginScreen'
      : 'MyDrawer';

    console.log('🚀 ~ AppNavigatorContainer ~ firstScreen:', firstScreen);
    return (
      <NavigationContainer ref={navigationService.navigationRef}>
        <RootNav.Navigator
          initialRouteName={firstScreen}
          screenOptions={{headerShown: false}}>
          <RootNav.Screen name="TabNavigation" component={TabNavigation} />
          <RootNav.Screen name="MyDrawer" component={MyDrawer} />
          <RootNav.Screen
            name="WalkThroughScreen"
            component={WalkThroughScreen}
          />
          <RootNav.Screen name="BibleCategories" component={BibleCategories} />
          <RootNav.Screen name="Store" component={StoreScreen} />
          <RootNav.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <RootNav.Screen
            name="TermsAndConditions"
            component={TermsAndConditions}
          />
          <RootNav.Screen name="DonationHistory" component={DonationHistory} />
          <RootNav.Screen name="MyAccounts" component={Account} />
          <RootNav.Screen name="HelpAndSupport" component={HelpAndSupport} />
          <RootNav.Screen name="Profile" component={Profile} />
          <RootNav.Screen name="Signup" component={Signup} />
          <RootNav.Screen name="LoginScreen" component={LoginScreen} />
          <RootNav.Screen name="ChangePasswordScreen" component={ChangePassword} />
          <RootNav.Screen name="TestmentsScreeen" component={TestmentsScreeen} />
          {/* <RootNav.Screen name="BibleCategories" component={BibleCategories} /> */}
          <RootNav.Screen
            name="OldTestamentCategories"
            component={OldTestamentCategories}
          />
          <RootNav.Screen
            name="BookDescriptionScreen"
            component={BookDescriprtionScreen}
          />
          <RootNav.Screen name="RecordedLecture" component={RecordedLecture} />
          <RootNav.Screen
            name="kidsLectureScreen"
            component={KidsLectureScreen}
          />
          <RootNav.Screen name="LiveLecture" component={LiveLecture} />
          <RootNav.Screen name="DonationScreen" component={Donation} />
          <RootNav.Screen name="DonationDetails" component={DonationDetails} />
          <RootNav.Screen name="DonateNow" component={DonateNow} />
          <RootNav.Screen name="CheckoutScreen" component={CheckOutScreen} />
          {/* <RootNav.Screen name="CheckoutScreen" component={CheckOutScreen}/> */}
          <RootNav.Screen name="ProductDetail" component={ProductDetail} />

          <RootNav.Screen
            name="PlaceOrderScreen"
            component={PlaceOrderScreen}
          />
        </RootNav.Navigator>
      </NavigationContainer>
    );
  };

  return <AppNavigatorContainer />;
};

export const TabNavigation = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      // tabBar={(props) => {
      //   return (
      //     <LinearGradient
      //       colors={['red', 'blue']}

      //       start={[1, 0]}
      //       end={[0, 0]}
      //     >
      //       <BottomTabBar
      //         {...props}
      //         style={{ backgroundColor: 'transparent' }}
      //       />
      //     </LinearGradient>
      //   );
      // }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          // backgroundColor:'pink',
          // backgroundColor: Color.red,
          // borderTopLeftRadius:15,
          // borderTopRightRadius:15,
          // paddingVertical:5
        },
        tabBarIcon: ({focused}) => {
          let iconName;
          let color = Color.theme2;
          let size = moderateScale(20, 0.3);
          let type = Ionicons;

          if (route.name === 'HomeScreen') {
            iconName = focused ? 'home' : 'home-outline';

            color = focused ? Color.theme2 : Color.white;
            size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
          } else if (route.name === 'Donation') {
            iconName = focused ? 'donate' : 'donate';
            type = FontAwesome5;
            color = focused ? Color.theme2 : Color.white;
            size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
          } else if (route.name === 'StoreScreen') {
            iconName = focused ? 'cart' : 'cart';
            color = focused ? Color.theme2 : Color.white;
            size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
          } else if (route?.name == 'Campaigns') {
            size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
          } else {
            iconName = focused ? 'settings-sharp' : 'settings-outline';
            color = focused ? Color.theme2 : Color.white;
            size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
          }
          return route.name == 'Campaigns' ? (
            <View
              style={{
                borderWidth: 5,
                borderColor: Color.lightGrey,
                height: moderateScale(60, 0.3),
                width: moderateScale(60, 0.3),
                borderRadius: moderateScale(30, 0.3),
                backgroundColor: Color.theme2,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: moderateScale(-30, 0.3),
              }}>
              <Icon
                name={'search'}
                as={Feather}
                color={Color.white}
                size={size}
              />
            </View>
          ) : (
            <Icon name={iconName} as={type} color={color} size={size} />
          );
        },
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <View style={{flex: 1}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={Color.tabBarGradient}
              style={{height: windowHeight * 0.1}}
            />
          </View>
        ),
      })}>
      <Tabs.Screen name={'HomeScreen'} component={HomeScreen} />
      <Tabs.Screen name={'Donation'} component={Donation} />
      <Tabs.Screen name={'Campaigns'} component={Campaigns} />

      {/* <Tabs.Screen name={'BibleCategories'} component={BibleCategories} /> */}
      <Tabs.Screen name={'StoreScreen'} component={StoreScreen} />
      <Tabs.Screen name={'Settings'} component={Settings} />
    </Tabs.Navigator>
  );
};
export const MyDrawer = () => {
  const DrawerNavigation = createDrawerNavigator();
  console.log("🚀 ~ MyDrawer ~ DrawerNavigation:", DrawerNavigation)
  const firstScreen = 'HomeScreen';
  return (
    <DrawerNavigation.Navigator
      drawerContent={props => <Drawer {...props} />}
      initialRouteName={'TabNavigation'}
      screenOptions={{
        headerShown: false,
      }}>
      {/* <DrawerNavigation.Screen name="HomeScreen" component={HomeScreen} /> */}
      {/* <DrawerNavigation.Screen name="ScanScreen" component={ScanScreen} /> */}
      <DrawerNavigation.Screen
        name="MemberShipForm"
        component={MemberShipForm}
      />
      <DrawerNavigation.Screen
        name="CalendarScreen"
        component={CalendarScreen}
      /> 
      <DrawerNavigation.Screen name="TabNavigation" component={TabNavigation} />

      <DrawerNavigation.Screen name="GoodThings" component={GoodThings} />
      <DrawerNavigation.Screen name="QrScanScreen" component={QrScanScreen} />
    </DrawerNavigation.Navigator>
  );
};
export default AppNavigator;

{
  /* <></>\ */
}

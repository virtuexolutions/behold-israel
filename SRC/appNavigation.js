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
// import CalendarScreen from './Screens/CalendarScreen';
import ChangePassword from './Screens/ChangePassword';
import PrayerRequestForm from './Screens/PrayerRequestForm';
import EventAndComunity from './Screens/EventAndComunity';
import OutReachMissions from './Screens/OutReachMissions';
import AboutUs from './Screens/AboutUs';
import RecommandedBooks from './Screens/RecommandedBooks';
import AboutBooks from './Screens/AboutBooks';
import GalleryFror from './Screens/GalleryFror';
import Team from './Screens/Team';
import ResetPassword from './Screens/ResetPassword';
import EnterEmail from './Screens/EnterEmail';
import VerifyNumber from './Screens/VerifyNumber';
import OrderScreen from './Screens/OrderScreen';
import OrderDetails from './Screens/OrderDetails';
import SelectChapter from './Screens/SelectChapter';
import CartoonsScreen from './Screens/CartoonsScreen';
import AnimationsScreen from './Screens/AnimationsScreen';
import Stories from './Screens/Stories';
import Podcasts from './Screens/Podcasts';
import VideoTeachings from './Screens/VideoTeachings';
import BlogScreen from './Screens/BlogScreen';
import BlogDetails from './Screens/BlogDetails';

const AppNavigator = () => {
  const walkThrough = useSelector(state => state.authReducer.userWalkThrough);
  const token = useSelector(state => state.authReducer.token);
  const RootNav = createNativeStackNavigator();
  const RootNavLogged = createNativeStackNavigator();

  const AppNavigatorContainer = () => {
 
    const firstScreen = !walkThrough
      ? 'WalkThroughScreen'
      : token == null
      ? 'LoginScreen'
      : 'MyDrawer';

    return (
      <NavigationContainer ref={navigationService.navigationRef}>
        <RootNav.Navigator
          initialRouteName={firstScreen}
          screenOptions={{headerShown: false}}>
          <RootNav.Screen name="MyDrawer" component={MyDrawer} />
          <RootNav.Screen name="WalkThroughScreen" component={WalkThroughScreen} />
          <RootNav.Screen name="BibleCategories" component={BibleCategories} />
          <RootNav.Screen name="Store" component={StoreScreen} />
          <RootNav.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <RootNav.Screen name="TermsAndConditions" component={TermsAndConditions} />
          <RootNav.Screen name="DonationHistory" component={DonationHistory} />
          <RootNav.Screen name="Donation" component={Donation} />
          <RootNav.Screen name="BookDescriprtionScreen" component={BookDescriprtionScreen}/>
          <RootNav.Screen name="MyAccounts" component={Account} />
          <RootNav.Screen name="YourOrders" component={OrderScreen} />
          <RootNav.Screen name="OrderDetails" component={OrderDetails} />
          <RootNav.Screen name="HelpAndSupport" component={HelpAndSupport} />
          <RootNav.Screen name="Profile" component={Profile} />
          <RootNav.Screen name="Signup" component={Signup} />
          <RootNav.Screen name="LoginScreen" component={LoginScreen} />
          <RootNav.Screen name="ChangePasswordScreen" component={ResetPassword} />
          <RootNav.Screen name="TestmentsScreeen" component={TestmentsScreeen} />
           <RootNav.Screen name="OldTestamentCategories" component={OldTestamentCategories} />
          <RootNav.Screen name="BookDescriptionScreen" component={BookDescriprtionScreen}/>
          <RootNav.Screen name="RecordedLecture" component={RecordedLecture} />
          <RootNav.Screen name="kidsLectureScreen" component={KidsLectureScreen}/>
          <RootNav.Screen name="LiveLecture" component={LiveLecture} />
          <RootNav.Screen name="DonationDetails" component={DonationDetails} />
          <RootNav.Screen name="DonateNow" component={DonateNow} />
          <RootNav.Screen name="CheckoutScreen" component={CheckOutScreen} />
          <RootNav.Screen name="EnterEmail" component={EnterEmail} />
          <RootNav.Screen name="VerifyNumber" component={VerifyNumber} />
          <RootNav.Screen name="ProductDetail" component={ProductDetail} />
          <RootNav.Screen name="DonationScreen" component={Donation}/>
          <RootNav.Screen name="SelectChapter" component={SelectChapter} /> 
          <RootNav.Screen name="PlaceOrderScreen" component={PlaceOrderScreen}/>
          <RootNav.Screen name="BlogDetails" component={BlogDetails}/>


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
          } else if (route.name === 'BibleCategoriesScreen') {
            iconName = focused ? 'bible' : 'bible';
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
      <Tabs.Screen name={'HomeScreen'} component={HomeScreen}  />
      <Tabs.Screen name="BibleCategoriesScreen" component={BibleCategories} initialParams={{ fromTab: true }}/>
      <Tabs.Screen name={'Campaigns'} component={Campaigns} />
      <Tabs.Screen name={'StoreScreen'} component={StoreScreen} />
      <Tabs.Screen name={'Settings'} component={Settings} />
    </Tabs.Navigator>
  );
};
export const MyDrawer = () => {
  const DrawerNavigation = createDrawerNavigator();
  const firstScreen = 'HomeScreen';
  return (
    <DrawerNavigation.Navigator
      drawerContent={props => <Drawer {...props} />}
      initialRouteName={'TabNavigation'}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          borderTopRightRadius: moderateScale(35, 0.6),
          borderBottomRightRadius: moderateScale(35, 0.6),
          backgroundColor: '#D3D3D3',
        },
      }}>
      <DrawerNavigation.Screen name="TabNavigation" component={TabNavigation} />
      <DrawerNavigation.Screen name="HomeScreen" component={HomeScreen} />
      <DrawerNavigation.Screen name="MemberShipForm" component={MemberShipForm}/>
      <DrawerNavigation.Screen name="PrayerRequestForm" component={PrayerRequestForm}/>
      <DrawerNavigation.Screen name="EventAndComunity" component={EventAndComunity}/>
      <DrawerNavigation.Screen name="OutReachMissions" component={OutReachMissions} />
      <DrawerNavigation.Screen name="BlogScreen" component={BlogScreen} />
      <DrawerNavigation.Screen name="AboutUs" component={AboutUs} />
      <DrawerNavigation.Screen name="GalleryFror" component={GalleryFror} />
      <DrawerNavigation.Screen name="GoodThings" component={GoodThings} />
      <DrawerNavigation.Screen name="QrScanScreen" component={QrScanScreen} />
      <DrawerNavigation.Screen name="RecommandedBooks" component={RecommandedBooks}/>
      <DrawerNavigation.Screen name="RecordedSermons" component={RecordedLecture} />
      <DrawerNavigation.Screen name="podcasts" component={Podcasts}/>
      <DrawerNavigation.Screen name="video_teachings" component={VideoTeachings}/>
      <DrawerNavigation.Screen name="cartoons" component={CartoonsScreen}/>
      <DrawerNavigation.Screen name="animations" component={AnimationsScreen}/>
      <DrawerNavigation.Screen name="stories" component={Stories}/>
      <DrawerNavigation.Screen name="AboutBooks" component={AboutBooks} />
      <DrawerNavigation.Screen name="Contact" component={Team} />
      <DrawerNavigation.Screen name="BlogDetails" component={BlogDetails} />
      {/* <DrawerNavigation.Screen name="BlogScreen" component={BlogScreen} /> */}


    </DrawerNavigation.Navigator>
  );
};
export default AppNavigator;

{
  /* <></>\ */
}

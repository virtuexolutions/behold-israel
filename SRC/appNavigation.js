import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationService from './navigationService';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


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
    const HomeScreen =
      role == 'admin'
        ? 'MyDrawer'
        : role == 'customer'
        ? 'HomeScreenOther'
        : 'HomeScreenOther';
    const firstScreen = 
      !walkThrough
      ? 'WalkThroughScreen'
      : token == null
      ? 'GetStarted'
      :'MyDrawer';

    return (
      <NavigationContainer ref={navigationService.navigationRef}>
        <RootNav.Navigator
          initialRouteName={"HomeScreen"}
          screenOptions={{headerShown: false}}>
          {/* <RootNav.Screen name="LoginScreen" component={LoginScreen} />
          */}
        </RootNav.Navigator>
      </NavigationContainer>
    );
  };

  return <AppNavigatorContainer />;
};

export const MyDrawer = () => {
  const DrawerNavigation = createDrawerNavigator();
  const role = useSelector(state => state.authReducer.role);
  const firstScreen =
    role == 'admin'
      ? 'HomeScreen'
      : role == 'vendor'
      ? 'SellerProduct'
      : 'CustomerDashboard';

  return (
    <DrawerNavigation.Navigator
      drawerContent={props => <Drawer {...props} />}
      initialRouteName={firstScreen}
      screenOptions={{
        headerShown: false,
      }}>
      <DrawerNavigation.Screen
        name="CustomerDashboard"
        component={CustomerDashboard}
      />
      <DrawerNavigation.Screen name="HomeScreen" component={HomeScreen} />
      <DrawerNavigation.Screen name="Profile" component={Profile} />
      <DrawerNavigation.Screen name="MyAccounts" component={MyAccounts} />

      <DrawerNavigation.Screen name="Orders" component={Orders} />
      {/* <DrawerNavigation.Screen name="Bookings" component={Bookings} /> */}

      {/* <DrawerNavigation.Screen
        name="ChangePassword"
        component={ChangePassword}
      /> */}
      <DrawerNavigation.Screen name="Myorders" component={Myorders} />

      <DrawerNavigation.Screen
        name="AdminDashboard"
        component={AdminDashboard}
      />
      <DrawerNavigation.Screen name="SellerProduct" component={SellerProduct} />
    </DrawerNavigation.Navigator>
  );
};
export default AppNavigator;

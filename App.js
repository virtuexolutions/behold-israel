/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider, useDispatch, useSelector} from 'react-redux';
// import {StripeProvider} from '@stripe/stripe-react-native';
import {NativeBaseProvider} from 'native-base';
import {store, persistor} from './SRC/Store/index';
import {
  requestCameraPermission,
  requestLocationPermission,
  requestWritePermission,
} from './SRC/Utillity/utils';
import SplashScreen from './SRC/Screens/SplashScreen';
import Settings from './SRC/Screens/Settings';
import AppNavigator from './SRC/appNavigation';
import BibleCategories from './SRC/Screens/BibleCategories';
import OldTestamentCategories from './SRC/Screens/oldTestamentCategories';

import TestmentsScreeen from './SRC/Screens/TestmentsScreeen';
import BookDescriptionScreen from './SRC/Screens/BookDescriptionScreen';
import RecordedLecture from './SRC/Screens/RecordedLecture';
import StoreScreen from './SRC/Screens/StoreScreen';
import KidsLectureScreen from './SRC/Screens/KidsLectureScreen';
import LiveLecture from './SRC/Screens/LiveLecture';
// import AppNavigator, {DrawerRoot} from './SRC/appNavigation';


const App = () => {
  const [publishableKey, setPublishableKey] = useState('');

  const fetchPublishableKey = async () => {
    const key = await fetchKey(); // fetch key from your server here
    setPublishableKey(key);
  };

  


  console.reportErrorsAsExceptions = false;
  return (
  //   <StripeProvider 
  //   publishableKey={"pk_test_51NjQZRBqyObuQCkVVZujGGQ9w7PjZegPiZvL9MEH12KsxQmTsLpBxsXdeyN8Tu3mYkN8YZt8WutsTCEexDwIOxaB00a6zjjE12"}
  //   // merchantIdentifier="merchant.identifier" // required for Apple Pay
  //   // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
  // >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <MainContainer />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
    // </StripeProvider>
  );
};

const MainContainer = () => {
  const dispatch = useDispatch();

 
  useEffect(() => {
    async function GetPermission() {
      await requestCameraPermission();
      await requestWritePermission();
      await requestLocationPermission();
    }
    GetPermission();
  }, []);

  const [isloading] = useloader(true);
  if (isloading == true) {
    return <SplashScreen />;
  }
  return <Settings/>

};

const useloader = value => {
  const [isloading, setIsloading] = useState(value);
  const [loadingTime] = useState(2000);
  useEffect(() => {
    setTimeout(() => setIsloading(false), loadingTime);
  }, []);
  return [isloading];
};
export default App;
                                                          
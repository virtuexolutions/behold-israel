import {
   StyleSheet,
   Text, 
   TouchableOpacity, 
   View, 
   BackHandler, 
   RefreshControl, 
   ImageBackground, 
   FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Icon, ScrollView } from 'native-base';
import CustomStatusBar from '../Components/CustomStatusBar';
import Color from '../Assets/Utilities/Color';
import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import { windowHeight, windowWidth } from '../Utillity/utils';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomTable from '../Components/CustomTable';
import moment from 'moment';
import { Get } from '../Axios/AxiosInterceptorFunction';
import { useSelector } from 'react-redux';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import CustomImage from '../Components/CustomImage';
import CardsComponent from '../Components/CardsComponent';
// import SearchbarComponent from '../Components/SearchbarComponent';

const HomeScreen = () => {
  const token = useSelector(state => state.authReducer.token);
  const userData = useSelector(state => state.commonReducer.userData);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isrefreshing, setIsRefreshing] = useState(false);
  const navigation = useNavigation();



  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);

  };

  const isFocused = useIsFocused();


  const dummyArray1 = [
    {
      id: 1,
      image: require('../Assets/Images/image1.png'),
      title: 'BiBle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna dolor, efficitur pulvinar placerat sed, auctor vestibulum elit.',
    },
    {
      id: 1,
      image: require('../Assets/Images/lecture.png'),
      title: 'RECORDED LECTUER',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna dolor, efficitur pulvinar placerat sed, auctor vestibulum elit.',
    },
    {
      id: 1,
      image: require('../Assets/Images/store.png'),
      title: 'STORE',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna dolor, efficitur pulvinar placerat sed, auctor vestibulum elit.',
    },
    {
      id: 1,
      image: require('../Assets/Images/live.png'),
      title: 'LIVE STREMING',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna dolor, efficitur pulvinar placerat sed, auctor vestibulum elit.',
    },
    {
      id: 1,
      image: require('../Assets/Images/donation.png'),
      title: 'Donation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna dolor, efficitur pulvinar placerat sed, auctor vestibulum elit.',
    }
  ];

  // const getUser = async () => {
  //   const url = 'auth/user';
  //   setIsLoading(true);
  //   const response = await Get(url, token);
  //   setIsLoading(false);
  //   if (response?.data?.success) {
  //     setUsers(response?.data?.data?.users);

  //   }
  // };

  // useEffect(() => {
  //   getUser();

  // }, []);

  // useEffect(() => {
  //   const backhandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     () => {
  //       BackHandler.exitApp();
  //       return true;
  //     },
  //   );
  //   return () => backhandler.remove();
  // }, []);





  return (

    <>
      <CustomStatusBar backgroundColor={'#D2E4E4'} barStyle={'dark-content'} />
      {/* <Header
        headerColor={['#D2E4E4', '#D2E4E4']}
        // showLogout
        hideUser
      /> */}

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isrefreshing}
            onRefresh={() => onRefresh()}
          />
        }
        showsVerticalScrollIndicator={false}
        style={{
          minHeight: windowHeight * 0.9,
          backgroundColor: Color.white
        }}
        contentContainerStyle={{
          paddingBottom: moderateScale(40, 0.6),
        }}>
        <View style={{
          width: windowWidth,
          height: windowHeight * 0.3,
        }}>

          <CustomImage
            style={{
              height: '100%',
              width: '100%'
            }}
            source={require('../Assets/Images/banner.jpg')}
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          scrollEnabled={true}
          contentContainerStyle={{
          }}
          data={dummyArray1}
          renderItem={({item, index}) => {
            return (
              <CardsComponent item={item} />

            );
          }}
        />

      </ScrollView>
    </>
  );
};

export default HomeScreen;

const Chuncks = ({ amount, title, iconName }) => {
  return (

    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[Color.themeColor, Color.themeColor]}
      style={styles.container}>
      <View
        style={{
          width: moderateScale(40, 0.6),
          height: moderateScale(40, 0.6),
          borderRadius: moderateScale(20, 0.6),
          backgroundColor: 'white',
          justifyContent: 'center',
          // alignItems: 'center',
        }}>
        <Icon
          name={iconName ? iconName : 'user-alt'}
          as={FontAwesome5}
          style={{
            width: '100%',
            textAlign: 'center',
          }}
          size={moderateScale(18, 0.6)}
        />
      </View>
      <CustomText
        isBold
        style={{
          color: Color.white,
          marginTop: moderateScale(5, 0.3),
          fontSize: moderateScale(20, 0.6),
        }}>
        {amount}
      </CustomText>
      <CustomText
        style={{
          color: Color.white,
          fontSize: moderateScale(10, 0.6),
          textTransform: 'none',
        }}>
        {title}
      </CustomText>
    </LinearGradient>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: windowWidth * 0.3,
    // height: windowHeight * 0.16,
    paddingVertical: moderateScale(10, 0.6),
    borderRadius: moderateScale(15, 0.6),
    alignItems: 'center',
    marginTop: moderateScale(20, 0.3),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 15,
  },
});

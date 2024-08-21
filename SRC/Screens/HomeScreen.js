import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  BackHandler,
  RefreshControl,
  ImageBackground,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Icon, ScrollView} from 'native-base';
import CustomStatusBar from '../Components/CustomStatusBar';
import Color from '../Assets/Utilities/Color';
import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import CustomImage from '../Components/CustomImage';
import CardsComponent from '../Components/CardsComponent';
import navigationService from '../navigationService';
import {SliderBox} from 'react-native-image-slider-box';
import Header from '../Components/Header';
import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = () => {
  const token = useSelector(state => state.authReducer.token);
  console.log("🚀 ~ HomeScreen ~ token:", token)
  const userData = useSelector(state => state.commonReducer.userData);

  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isrefreshing, setIsRefreshing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  const dummyArray1 = [
    {
      id: 1,
      image: require('../Assets/Images/image1.png'),
      title: 'BiBle Study Guides',
      onPress: () => navigationService.navigate('BibleCategories'),
      description:
        'Enrich your wisdom towards God’s Word with our Holy Spirit-centered Bible study guides. Curated for personal reflection or group study to strengthen the spiritual journey.',
    },
    {
      id: 2,
      image: require('../Assets/Images/lecture.png'),
      title: 'RECORDED LECTUER',
      onPress: () => navigationService.navigate('RecordedLecture'),

      description:
        'Nourish your soul with our thoughtfully curated recorded lectures. Each session is carefully chosen to inspire and uplift, guiding you to a stronger connection with your faith.',
    },
    {
      id: 3,
      image: require('../Assets/Images/store.png'),
      onPress: () =>
        navigationService.navigate('Store', {fromHomeScreen: true}),

      title: 'STORE',
      description:
        'Explore our collection of ministry-focused items, including faith-inspired stickers, candles, and more that inspire your daily walk with God.',
    },
    {
      id: 4,
      image: require('../Assets/Images/live.png'),
      onPress: () => navigationService.navigate('LiveLecture'),
      title: 'LIVE STREMING',
      description:
        'Be part of live worship sessions, Bible studies, and special events streamed directly to your device. Experience the power of the Holy Spirit in real-time with our community.',
    },
    {
      id: 5,
      image: require('../Assets/Images/donation.png'),
      onPress: () => navigationService.navigate('Donation'),

      title: 'Donation',
      description:
        'Support the mission of Holy Ghost Fraternity. Your donations empower us to extend our reach, create more spiritual resources, and touch lives through community outreach—partner with us in spreading God’s love and grace.',
    },
  ];

  const images = [
    require('../Assets/Images/banner.jpg'),
    require('../Assets/Images/slider1.jpg'),
    require('../Assets/Images/slider2.jpg'),
    require('../Assets/Images/slider3.jpg'),
  ];

  return (
    <>
      <CustomStatusBar backgroundColor={'#D2E4E4'} barStyle={'dark-content'} />

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
          backgroundColor: Color.white,
        }}>
        <View
          style={{
            height: moderateScale(30, 0.3),
            width: moderateScale(30, 0.3),
            borderRadius: moderateScale(5, 0.3),
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            zIndex: 1,
            top: 35,
            left: 20,
          }}>
          <Icon
            style={{
              textAlign: 'center',
              height: windowHeight * 0.05,
              width: windowHeight * 0.05,
              borderRadius: (windowHeight * 0.05) / 2,
              backgroundColor: Color.white,
              paddingTop: moderateScale(6.6),

              // marginTop :moderateScale
            }}
            name={'menu'}
            as={Feather}
            size={moderateScale(25, 0.3)}
            color={Color.black}
            onPress={() => {
              navigation.toggleDrawer();
              // navigationN.dispatch(DrawerActions.toggleDrawer())
            }}
          />
        </View>

        <LinearGradient
          style={{
            width: windowWidth,
            minHeight: windowHeight,
            alignItems: 'center',
            paddingBottom: moderateScale(20, 0.6),
          }}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          colors={Color.tabBarGradient}>
          <View
            style={{
              width: windowWidth,
              height: windowHeight * 0.3,
            }}>
            <SliderBox
              images={images}
              autoplay
              circleLoop
              sliderBoxHeight={250}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              dotColor={Color.theme2}
              inactiveDotColor="#90A4AE"
            />
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            scrollEnabled={true}
            decelerationRate={0.5}
            contentContainerStyle={{
              paddingTop: moderateScale(10, 0.6),
            }}
            data={dummyArray1}
            renderItem={({item, index}) => {
              return (
                <CardsComponent
                  item={item}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  key={item?.id}
                />
              );
            }}
          />
        </LinearGradient>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const Chuncks = ({amount, title, iconName}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 15,
  },
});

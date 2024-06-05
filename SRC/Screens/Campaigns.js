import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
    FlatList,
    Platform,
    AppState
  } from 'react-native';
  import React, {useState, useRef, useEffect} from 'react';
  import Header from '../Components/Header';
  import CustomText from '../Components/CustomText';
  import {windowHeight, windowWidth} from '../Utillity/utils';
  import CustomStatusBar from '../Components/CustomStatusBar';
  import {ScaledSheet, moderateScale} from 'react-native-size-matters';
  import Color from '../Assets/Utilities/Color';
  import CustomImage from '../Components/CustomImage';
  import {Icon} from 'native-base';
  import navigationService from '../navigationService';
  import ScreenBoiler from '../Components/ScreenBoiler';
  import LinearGradient from 'react-native-linear-gradient';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import EvilIcons from 'react-native-vector-icons/EvilIcons';
  import Feather from 'react-native-vector-icons/Feather';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import FundRaiseCard from '../Components/FundRaiseCard';
  import CustomButton from '../Components/CustomButton';
  import RBSheet from 'react-native-raw-bottom-sheet';
  import {useDispatch, useSelector} from 'react-redux';
  import {Get} from '../Axios/AxiosInterceptorFunction';
  import {useIsFocused} from '@react-navigation/native';
  import {mode} from 'native-base/lib/typescript/theme/tools';
//   import GetLocation from 'react-native-get-location';
//   import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
  import { setLocationEnabled } from '../Store/slices/auth';
import SearchbarComponent from '../Components/SearchbarComponent';
//   import RNSettings from 'react-native-settings';
  
  const Campaigns = ({route}) => {
    const isFocused = useIsFocused();
    const interests = useSelector(state => state.authReducer.interests);
    console.log(
      '🚀 ~ file: HomeScreen.js:37 ~ BankDetails ~ interests:',
      interests,
    );
    const dispatch = useDispatch()
    const category = route?.params?.category;
    console.log(
      '🚀 ~ file: HomeScreen.js:39 ~ BankDetails ~ category:',
      category,
    );
    const token = useSelector(state => state.authReducer.token);
    const userData = useSelector(State => State.commonReducer.userData);
    // console.log("🚀 ~ file: HomeScreen.js:32 ~ BankDetails ~ userData:", userData)
    const refRBSheet = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [nearYou, setNearYou] = useState([]);
    const [newHere, setNewHere] = useState([]);
    const [location, setLocation] = useState({});
    console.log(
      '🚀 ~ file: HomeScreen.js:57 ~ BankDetails ~ location:',
      location,
    );
    // console.log('🚀 ~ file: HomeScreen.js:42 ~ BankDetails ~ nearYou:', nearYou);
    const [fundRaisingNow, setfundRaisingNow] = useState([]);
    const [dynamicinterests, setDynamicInterests] = useState([]);
    const [selectedDynamicinterests, setSelectedDynamicinterests] = useState('');
    const [locationLoader, setLocationLoader] = useState(false);
  
    const dataArray = [
      {
        category: ' Fundraising Now',
        image: require('../Assets/Images/live.png'),
        tagLine: 'dummy1',
    
        location: 'IEWS DBA Saba Homes',
      },
      {
        category: 'Near You',
        image: require('../Assets/Images/livelec1.png'),
        tagLine:
          'dummy2',
        location: '',
      },
      {
        category: ' New Here',
        image: require('../Assets/Images/livelec2.png'),
        tagLine: 'dummy3',
        location: 'Park Royal, United Kingdom',
      },
      {
        category: 'Need Love',
        image: require('../Assets/Images/livelec3.png'),
        tagLine: 'dummy4',
        location: 'Culver City, United States',
      },
    ];

  
  
  
  
    
  
    return (
      <ScreenBoiler
        statusBarBackgroundColor={Color.tabBarGradient}
        statusBarContentStyle={'light-content'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
          }}>
          <LinearGradient
            style={{
              width: windowWidth,
              minHeight: windowHeight,
              alignItems: 'center',
            paddingBottom: moderateScale(20, 0.6),

            }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#000000', '#464646']}>
            <View
              style={{
                width: windowWidth,
                height: windowHeight * 0.1,
                backgroundColor:['#000000', '#464646'],
                // backgroundColor:'red',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: moderateScale(10, 0.3),
                }}>
                      <SearchbarComponent
                    placeHolderColor={Color.veryLightGray}
                    placeholderName={'Search for campaigns to donate'}
                    SearchStyle={{
                        width: windowWidth * 0.85,
                        backgroundColor: Color.white,
                    }} 
                    disable={false}
                    />
             
  
                <View
                  style={{
                    // width: windowWidth * 0.29,
                    // alignItems: 'flex-end',
                  }}>
                  
                  <TouchableOpacity activeOpacity={0.8}>
                    <Icon
                      name={'filter'}
                      as={Feather}
                      size={moderateScale(22, 0.3)}
                      color={Color.white}
                      onPress={() => {
                        // navigationService.navigate('SideDrawer');
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
  
         
  
            <View
              style={{
                width: windowWidth,
                // height: windowHeight * 0.07,
                //   backgroundColor: 'red',
                marginVertical: moderateScale(10, 0.6),
              }}>
              <CustomText
                isBold
                style={[
                  styles.text,
                  {
                    marginLeft: moderateScale(10, 0.6),
                    marginBottom: moderateScale(10, 0.3),
                  },
                ]}>
                Campaigns
              </CustomText>
              <ScrollView
                // horizontal={true}
                // showsHorizontalScrollIndicator={false}
                >
                {dataArray.map(item => {
                  return (
                    <FundRaiseCard 
                    item={item}
                    />
                  );
                })}
              </ScrollView>
            </View>
          
          </LinearGradient>
  
        
         
        </ScrollView>
      </ScreenBoiler>
    );
  };
  
  export default Campaigns;
  
  const styles = ScaledSheet.create({
    txt1: {
      color: Color.white,
      fontSize: moderateScale(15, 0.6),
    },
    txt2: {
      color: Color.white,
      fontSize: moderateScale(13, 0.6),
    },
    text: {
      width: windowWidth * 0.95,
      textAlign: 'left',
      marginTop: moderateScale(7, 0.3),
      fontSize: moderateScale(14, 0.6),
      color:Color.white,
    },
    text1: {
      marginLeft: moderateScale(20, 0.6),
      width: '80%',
      textAlign: 'left',
      marginBottom: moderateScale(7, 0.3),
      fontSize: moderateScale(15, 0.6),
      lineHeight: moderateScale(17, 0.6),
      color: Color.white,
    },
    thanks: {
      width: '95%',
      height: windowHeight * 0.2,
    //   backgroundColor: '#3E3028',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: moderateScale(20, 0.6),
      alignItems: 'center',
      marginTop: moderateScale(20, 0.3),
      borderRadius: moderateScale(10, 0.6),
      borderWidth:moderateScale(1,.6),
      borderColor:Color.white
    },
  });
  
  const Chunks = ({item, onPress, data}) => {
    const [selectedInterest, setSelectedInterest] = useState(false);
  
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: windowWidth * 0.27,
          height: windowHeight * 0.11,
          borderColor: data?.includes(item?.name)
            ? Color.black
            : Color.veryLightGray,
          borderRadius: moderateScale(10, 0.6),
          borderWidth: data?.includes(item?.name) ? 2 : 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: moderateScale(5, 0.6),
          padding: moderateScale(5, 0.6),
        }}>
        {data?.includes(item?.name) && (
          <View style={{position: 'absolute', top: 5, right: 5, zIndex: 1}}>
            <Icon
              name="checkcircleo"
              as={AntDesign}
              size={4}
              color={Color.themeColor}
            />
          </View>
        )}
        <View style={{width: windowWidth * 0.2, height: windowHeight * 0.1}}>
          <CustomImage
            onPress={onPress}
            resizeMode="stretch"
            source={{uri: item?.Image}}
            style={{
              width: '100%',
              height: '100%',
              // backgroundColor : 'red'
              // marginTop: moderateScale(25, 0.3),
            }}
          />
        </View>
        {/* <CustomText style={{ color: Color.black, fontSize: moderateScale(13, .6), textAlign: 'center', marginTop: moderateScale(5, .3) }}>{item?.name}</CustomText> */}
      </TouchableOpacity>
    );
  };
  
  
  
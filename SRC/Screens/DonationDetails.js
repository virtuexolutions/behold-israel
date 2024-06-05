import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomStatusBar from '../Components/CustomStatusBar';
import {moderateScale} from 'react-native-size-matters';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SliderBox} from 'react-native-image-slider-box';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Get} from '../Axios/AxiosInterceptorFunction';
import moment from 'moment';
//   import Share from 'react-native-share';

const DonationDetails = props => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const token = useSelector(state => state.authReducer.token);

  const item = props?.route?.params?.item;
  console.log('🚀 ~ DonationDetail ~ item:', item);
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState({});

  const dataArray = [
    {
      category: ' Fundraising Now',
      image: require('../Assets/Images/livelec1.png'),
      tagLine: 'Give Your Qurbani/Udhiya To The Orphan and Needy.',
      location: 'IEWS DBA Saba Homes',
    },
    {
      category: 'Near You',
      image: require('../Assets/Images/livelec1.png'),
      tagLine:
        'Islamic Academy of Burlington, United States, is a prominent educational institution that provides comprehensive.',

      location: '',
    },
    {
      category: ' New Here',
      image: require('../Assets/Images/livelec1.png'),
      tagLine: 'Muslim Rose Welfare',

      location: 'Park Royal, United Kingdom',
    },
    {
      category: 'Need Love',
      image: require('../Assets/Images/livelec1.png'),
      tagLine: 'Muslim Rose Welfare',

      location: 'Culver City, United States',
    },
  ];
  const images = [
    require('../Assets/Images/donation3.jpg'),
    require('../Assets/Images/donation2.jpg'),
    require('../Assets/Images/donation1.jpg'),
    //   require('../Assets/Images/donation4.jfif'),
    require('../Assets/Images/donation5.jpg'),
  ];

 
  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      {isLoading ? (
        <View
          style={{
            width: windowWidth,
            height: windowHeight,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator color={Color.themeColor} size={'large'} />
        </View>
      ) : (
        <LinearGradient
          style={{
            width: windowWidth,
            minHeight: windowHeight,
            // alignItems: 'center',
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#F6F3F3', '#F6F3F3']}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: moderateScale(20, 0.6),
              paddingHorizontal: moderateScale(5, 0.6),
              width: windowWidth,
              position: 'absolute',
              top: 0,
              zIndex: 1,
            }}>
            <Icon
              name={'arrow-back'}
              as={Ionicons}
              color={Color.black}
              size={6}
              onPress={() => {
                navigation.goBack();
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                // width: windowWidth * 0.21,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  // width: windowWidth * 0.1,
                  // height: windowHeight * 0.02,
                  // backgroundColor: 'rgba(0,0,0,0.3)',
                  padding: moderateScale(5, 0.6),
                  borderRadius: moderateScale(10, 0.6),
                }}>
                {/* <Icon
                  name={'sharealt'}
                  as={AntDesign}
                  color={Color.black}
                  size={6}
                  onPress={() => {
                    // fun()
                  }}
                /> */}
              </View>
            </View>
          </View>

          <SliderBox
            images={images}
            sliderBoxHeight={250}
            onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
            }
            dotColor={Color.theme2}
            inactiveDotColor="#90A4AE"
          />

          <View
            style={{
              // backgroundColor:'green',
              alignItems: 'center',
              paddingVertical: moderateScale(10, 0.6),
              paddingHorizontal: moderateScale(10, 0.6),
            }}>
            <CustomText
              numberOfLines={2}
              style={{
                width: windowWidth * 0.9,
                // backgroundColor: 'green',
                color: 'black',
                fontSize: moderateScale(20, 0.6),
              }}
              isBold>
              title
            </CustomText>
          
              <>
                <CustomText
                  style={{
                    width: windowWidth * 0.9,
                    marginTop: moderateScale(10, 0.3),
                    // backgroundColor: 'red',
                    fontSize: moderateScale(14, 0.6),
                    paddingVertical: moderateScale(5, 0.6),
                  }}
                  isBold>
                  {`$100 Fund raised from $1000`}
                  {/* dhjkshdjfkhsd */}
                </CustomText>
                <View
                  style={{
                    backgroundColor: Color.veryLightGray,
                    width: windowWidth * 0.9,
                    borderRadius: moderateScale(15, 0.6),
                    height: moderateScale(10, 0.6),
                  }}>
                  <View
                    style={{
                      backgroundColor: Color.themeColor,
                      width: `20%`,
                      borderRadius: moderateScale(15, 0.6),
                      height: moderateScale(10, 0.6),
                    }}
                  />
                </View>

                <View
                  style={{
                    width: windowWidth * 0.9,
                    flexDirection: 'row',
                    // backgroundColor: 'red',
                    paddingHorizontal: moderateScale(5, 0.6),
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <CustomText
                    style={{
                      width: windowWidth * 0.4,
                      fontSize: moderateScale(15, 0.6),
                      marginTop: moderateScale(5, 0.3),
                      color: Color.black,
                    }}
                    isBold>
                   12 donators
                  </CustomText>
                  <CustomText
                    style={{
                      backgroundColor: 'orange',
                      width: windowWidth * 0.2,
                      fontSize: moderateScale(13, 0.6),
                      color: Color.black,
                    }}>
                    {/* {moment(detail?.expire_date).diff(moment(), 'days')} */}
                   5 days left
                  </CustomText>
                </View>
              </>
          
            <View
              style={{
                width: windowWidth,
                height: windowHeight * 0.1,
                flexDirection: 'row',
                // backgroundColor:'green',
                paddingVertical: moderateScale(10, 0.6),
                paddingHorizontal: moderateScale(20, 0.6),
                justifyContent: 'space-between',
                alignItems: 'center',

                // borderColor: Color.themeColor,
                // borderWidth: 1,
              }}>
              <View
                style={{
                  // width: windowWidth * 0.2,
                  height: windowHeight * 0.04,
                  paddingHorizontal: moderateScale(5, 0.6),
                  // flexDirection: 'row',
                  borderColor: Color.themeColor,
                  borderWidth: 1,
                  borderRadius: moderateScale(20, 0.6),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <CustomText
                  style={{
                    fontSize: moderateScale(12, 0.6),
                    color: Color.black,
                  }}>
                  jesus loves you
                  {/* {item?.category} */}
                </CustomText>
              </View>
              <CustomText
                style={{
                  fontSize: moderateScale(14, 0.6),
                  color: Color.black,
                }}>
                {/* {detail?.donators}  */}
                donators 12
              </CustomText>
            </View>

            <CustomText
              style={{
                width: windowWidth * 0.9,
                color: 'black',
                fontSize: moderateScale(20, 0.6),
              }}
              isBold>
              Story
            </CustomText>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                height: windowHeight * 0.2,
              }}>
              <CustomText
                style={{
                  width: windowWidth * 0.9,
                  color: 'black',
                  fontSize: moderateScale(12, 0.6),
                  marginTop: moderateScale(10, 0.6),
                  lineHeight: moderateScale(17, 0.6),
                  textAlign: 'justify',
                }}>
                'Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book.'
              </CustomText>
            </ScrollView>
            {/* </View> */}
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: moderateScale(50, 0.6),
              alignSelf: 'center',
            }}>
            <CustomButton
              onPress={() => {
                navigation.navigate('Donation', {campaignData: detail});
              }}
              text={'Donate Now'}
              textColor={Color.white}
              // iconName={'pencil'}
              // iconType={Entypo}
              width={windowWidth * 0.7}
              height={windowHeight * 0.06}
              fontSize={moderateScale(13, 0.6)}
              marginTop={moderateScale(20, 0.3)}
              bgColor={Color.themeColor}
              borderRadius={moderateScale(20, 0.3)}
              iconStyle={{
                fontSize: moderateScale(14, 0.6),
              }}
              marginRight={moderateScale(5, 0.3)}
              isBold
            />
          </View>
        </LinearGradient>
      )}
    </ScreenBoiler>
  );
};

export default DonationDetails;

const styles = StyleSheet.create({
  txt1: {
    color: Color.white,
    fontSize: moderateScale(18, 0.6),
  },
  txt2: {
    color: Color.white,
    fontSize: moderateScale(15, 0.6),
  },
});

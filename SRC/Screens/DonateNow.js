
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Switch,
  ScrollView,
  ToastAndroid,
  Platform,
  
} from 'react-native';
import React, {useState ,useEffect} from 'react';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import CustomStatusBar from '../Components/CustomStatusBar';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import {Icon, Row, Checkbox} from 'native-base';
import navigationService from '../navigationService';
import ScreenBoiler from '../Components/ScreenBoiler';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FundRaiseCard from '../Components/FundRaiseCard';
import CustomButton from '../Components/CustomButton';
import {SliderBox} from 'react-native-image-slider-box';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import {useNavigation} from '@react-navigation/native';
// import RecieptComponent from '../Components/RecieptComponent';
// import {CardField, createToken} from '@stripe/stripe-react-native';
import {Post} from '../Axios/AxiosInterceptorFunction';
import {useSelector} from 'react-redux';

const DonateNow = ({route}) => {
  const campaignData = route?.params?.campaignData;
  const token = useSelector(state => state.authReducer.token);

  console.log(
    '🚀 ~ file: DonateNowpage.js:38 ~ DonateNowvfxvpage ~ campaignData:',
    campaignData,
  );
  const navigation = useNavigation();
  const [price, setPrice] = useState('$0.00');
  const [enabled, setEnabled] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [pressed, setPressed] = useState('ONE-TIME');
  const [dollors, setDollors] = useState(campaignData?.fix_amount > 0 ? campaignData?.fix_amount : 0.0);
  const [isVisible, setisVisible] = useState(false);
  const [purpose, setPurpose] = useState([]);
  const [stripeToken, setStripeToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  console.log(
    '🚀 ~ file: DonateNowpage.js:50 ~ DonateNowpage ~ purpose:',
    purpose,
  );

  // const Donate = async () => {
  //   setIsLoading(true);
  //   const responseData = await createToken({
  //     type: 'Card',
  //   });
  //   console.log(
  //     '🚀 ~ file: AddCard.js:90 ~ addCard ~ responseData',
  //     JSON.stringify(responseData?.token?.id, null, 2),
  //   );

  //   if (responseData.error) {
  //     setIsLoading(false);
  //     console.log(responseData.error);
  //     return alert(responseData?.error?.message);
  //   }
  //   if (responseData != undefined) {
  //     const url = 'campaigns/donate';
  //     const body = {
  //       stripeToken: responseData?.token?.id,
  //       amount: dollors,
  //       quantity : quantity,
  //       campaign_id: campaignData?.id,
  //     };
  //   //  return console.log("🚀 ~ file: DonateNowpage.js:87 ~ Donate ~ body:", body)
  //     // if(stripeToken == ''){
  //     //   return Platform.OS == 'android' ?
  //     //   ToastAndroid.show('Card not added or wrong information added' , ToastAndroid.SHORT)
  //     //   :alert('Card not added or wrong information added')
  //     // }
  //     if (dollors == 0.0) {
  //       setIsLoading(false);
  //       return Platform.OS == 'android'
  //         ? ToastAndroid.show('please add amount', ToastAndroid.SHORT)
  //         : alert('please add amount');
  //     }
  //     setIsLoading(true);
  //     const response = await Post(url, body, apiHeader(token));
  //     setIsLoading(false);

  //     if (response != undefined) {
  //       console.log('response ======== > ', response?.data);
  //       navigationService.navigate('PaymentDoneScreen',{amount : dollors});
  //       Platform.OS == 'android'
  //         ? ToastAndroid.show('Payment Successfull', ToastAndroid.SHORT)
  //         : alert('Payment Successfull');
  //     }
  //   }
  // };

  // useEffect(() => {
  //   if(quantity > 0){
  //     setDollors (quantity * campaignData?.fix_amount)
  //   }
  // }, [quantity])
  

  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: moderateScale(20, 0.6),
        }}>
        <LinearGradient
          style={{
            width: windowWidth,
            minHeight: windowHeight,
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#F6F3F3', '#F6F3F3']}>
          <View
            style={{
              width: windowWidth * 0.9,
              height: windowHeight * 0.1,
              // backgroundColor: 'blue',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
           
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: windowWidth * 0.05,
                height: windowWidth * 0.05,
                borderRadius: (windowWidth * 0.05) / 2,
                backgroundColor: '#E3e3e3',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                name={'cross'}
                as={Entypo}
                size={moderateScale(17, 0.3)}
                color={Color.white}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </TouchableOpacity>
          </View>
          <View
           style={{
            alignSelf : 'center'
          }}
          >

        
          <TextInputWithTitle
              placeholder={dollors}
              setText={setDollors}
              value={`Rs${dollors}`}
              borderBottom={1}
              // viewHeight={0.07}
              viewWidth={0.75}
              inputWidth={0.7}
              borderColor={'#000'}
              marginTop={moderateScale(15, 0.3)}
              color={Color.black}
              placeholderColor={Color.black}
              textAlign={'center'}
              fontSize={moderateScale(20, 0.6)}
              isBold
              disable
             
              // elevation
            />
              </View>
{
  campaignData?.type == 'variable' ?

          <View
            style={{
              width: windowWidth,
              paddingHorizontal: moderateScale(10, 0.6),
              paddingVertical: moderateScale(40, 0.6),
              justifyContent: 'space-between',
              // backgroundColor: 'red',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: moderateScale(10, 0.6),
              }}>
              <CustomText
                style={{
                  fontSize: moderateScale(16, 0.6),
                  color: Color.black,
                  marginRight: moderateScale(5, 0.3),
                }}
                isBold>
                10
              </CustomText>
              <Icon
                name={'minuscircleo'}
                color={Color.themeColor}
                as={AntDesign}
                size={6}
                onPress={() => {
                  dollors > 0 && setDollors(prev => prev - 10);
                }}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <CustomText
                style={{
                  flexDirection: 'row',
                  fontSize: moderateScale(15, 0.6),
                  // backgroundColor: 'red',
                  width: windowWidth * 0.15,
                }}>
                Rs{dollors}
              </CustomText>
              <View
                style={{
                  backgroundColor: Color.themeColor,
                  paddingHorizontal: moderateScale(10, 0.6),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <CustomText
                  style={{
                    color: Color.white,
                    fontSize: moderateScale(11, 0.6),
                    textTransform: 'uppercase',
                  }}>
                  {'PKR'}
                </CustomText>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: moderateScale(10, 0.6),
              }}>
              <Icon
                name={'pluscircleo'}
                color={Color.themeColor}
                as={AntDesign}
                size={6}
                onPress={() => {
                  setDollors(prev => prev + 10);
                }}
              />
              <CustomText
                style={{
                  fontSize: moderateScale(16, 0.6),
                  color: Color.black,
                  marginLeft: moderateScale(5, 0.3),
                }}
                isBold>
                10
              </CustomText>
            </View>
          </View>
          :   <View
          style={{
            alignSelf : 'center',
            flexDirection: 'row',
            // backgroundColor: 'red',
            width: windowWidth * 0.6,
            justifyContent: 'space-between',
            paddingVertical: moderateScale(10, 0.6),
            alignItems: 'center',
          }}>
          <Icon
            onPress={() => {
              quantity > 0 && setQuantity(prev => prev - 1);
            }}
            name={'minuscircleo'}
            color={Color.themeColor}
            as={AntDesign}
            size={6}
          />
          <CustomText
            style={{fontSize: moderateScale(20, 0.6), color: Color.black}}>
            {quantity}
          </CustomText>
          <Icon
            onPress={() => {
              setQuantity(prev => prev + 1);
            }}
            name={'pluscircleo'}
            color={Color.themeColor}
            as={AntDesign}
            size={6}
          />
        </View>
}
          {/* <CardField
            postalCodeEnabled={false}
            placeholders={{
              number: '4242 4242 4242 4242',
            }}
            cardStyle={{
              backgroundColor: '#FFFFFF',
              textColor: '#000000',
            }}
            style={{
              width: '100%',
              height: 50,
              marginVertical: 30,
            }}
            onCardChange={cardDetails => {
              console.log('cardDetails', cardDetails);
            }}
            onFocus={focusedField => {
              console.log('focusField', focusedField);
            }}
          /> */}

          <CustomButton
            text={
              isLoading ? (
                <ActivityIndicator color={'white'} size={'small'} />
              ) : (
                'Continue'
              )
            }
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
            onPress={() => {
              // Donate();
              // setisVisible(true);
              // navigationService.navigate('PaymentDoneScreen');
            }}
          />
        </LinearGradient>
      </ScrollView>
    </ScreenBoiler>
  );
};

export default DonateNow;
 


import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ToastAndroid,
  ScrollView,
  ImageBackground,
  Platform,
  // Modal,
} from 'react-native';
import React, {useState} from 'react';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import {moderateScale} from 'react-native-size-matters';
import CustomImage from '../Components/CustomImage';
import Header from '../Components/Header';
import Feather from 'react-native-vector-icons/Feather';
import Color from '../Assets/Utilities/Color';
// import PaymentModal from '../Components/PaymentModal';
import {Post} from '../Axios/AxiosInterceptorFunction';
import {useDispatch, useSelector} from 'react-redux';
import {AddToCart, EmptyCart} from '../Store/slices/common';
import {useNavigation} from '@react-navigation/native';
import navigationService from '../navigationService';
import CustomButton from '../Components/CustomButton';
import {color} from 'native-base/lib/typescript/theme/styled-system';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PaymentModal from '../Components/PaymentModal';
// import {} from '@stripe/stripe-react-native';

import Modal from 'react-native-modal';
import { CardField, createToken} from '@stripe/stripe-react-native';

const PlaceOrderScreen = () => {
  const navigation = useNavigation();
  const token = useSelector(state => state.authReducer.token);
  const cartData = useSelector(state => state.commonReducer.cart);
  console.log("🚀 ~ PlaceOrderScreen ~ cartData:", JSON.stringify(cartData, null, 2))
  const userdata = useSelector(state => state.commonReducer.userData);
  console.log("🚀 ~ PlaceOrderScreen ~ userdata:", userdata)
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [afterDiscount, setAfterDiscount] = useState(0)
  const [name, setName] = useState(userdata?.name);
  // const [lastName, setLastName] = useState(userdata?.name);
  const [email, setEmail] = useState(userdata?.email);
  const [phone, setPhone] = useState(userdata?.phone);
  const [country, setCountry] = useState(userdata?.country);
  const [address, setAddress] = useState(userdata?.address);
  const [postcode, setPostCode] = useState(userdata?.postal_code);
  const [stripeToken, setStripeToken] = useState('');
  const [isChecked, setIsChecked] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [newData, setnewData] = useState([]);
  const array = [1, 2, 3, 4];

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const calcTotal = (totalQ, total, discount) => {
    cartData?.map(item => {
      totalQ += item?.quantity;
      total += item?.price * item?.quantity;
      // total +=
      //   (item?.size ? item?.size_id?.price : item?.wholsale_price) *
      //   item?.quantity;

      discount +=
        (item?.size
          ? item?.size_id?.discount_price
            ? item?.size_id?.discount_price
            : item?.size_id?.price
          : item?.discount_price
          ? item?.discount_price
          : item?.wholsale_price) * item?.quantity;
    });
    // setTotalQuantity(total_quantity);
    // setTotalPrice(total_price);
    // setAfterDiscount(afterDiscount);
    console.log(
      'final calculations======',
      totalQ,
      total,
      discount,
    );
    return {totalQ, total, discount}
  };
  const stripePaymentFunction = () => {
    createToken({
      type: 'Card',
    })
      .then(token => {
         console.log('token=============> ', token);
        setStripeToken(token?.token?.id)
        Platform.OS == 'android'
        ? ToastAndroid.show(`Confirmed!`, ToastAndroid.SHORT)
        : alert(`Confirmed!`);
      })
      .catch(error => {
        console.log('error= ', error);
      });
  };
  const PlaceOrder = async () => {
    let totalQ = 0;
    let total = 0;
    let discount = 0;
    const result = calcTotal(totalQ, total, discount);
    console.log("🚀 ~ PlaceOrder ~ total:", total)
    const url = 'auth/checkout';
    const body = {
      name: name,
      // last_name: lastName,
      email: email,
      phone: phone,
      country: country,
      // address1: address,
      address: address,
      post_code: postcode,
      payment_method:
        isChecked == 'Cash on delivery'
          ? 'cod'
          : isChecked == 'pay through stripe'
          ? 'stripe'
          : '',
      total_quantity: result?.totalQ,
      total_amount:result?.total,
      // amount: result?.discount,
      // discount_amount: result?.discount,
      products: cartData?.map(item => {
        return {
          id: item?.id,
          price: item?.price,

          // price: item?.size
          //   ? item?.size_id?.discount_price
          //     ? item?.size_id?.discount_price
          //     : item?.size_id?.price
          //   : item?.discount_price
          //   ? item?.discount_price
          //   : item?.wholsale_price,
          quantity: item?.quantity,
          // size_id: item?.size ? item?.size_id?.id : item?.id,
        };
      }),
    };
    if (isChecked == 'pay through stripe') {
      if (stripeToken == '') {
        alert('Please enter your card details');
      } else {
        body.stripeToken = stripeToken;
      }
    }
    for (let key in body) {
      if (body[key] == '') {
        return Platform.OS == 'android'
          ? ToastAndroid.show(`${key} is empty`, ToastAndroid.SHORT)
          : alert(`requried field is empty`);
      }
    }

    if (isNaN(postcode)) {
      return Platform.OS == 'android'
        ? ToastAndroid.show(
            `Please insert a correct post code`,
            ToastAndroid.SHORT,
          )
        : alert(`Please insert a correct post code`);

    }

    if (isNaN(phone)) {
      return Platform.OS == 'android'
        ? ToastAndroid.show(
            `Please insert a correct phone number`,
            ToastAndroid.SHORT,
          )
        : alert(`Please insert a correct phone number`);
    }

    if (isChecked == '') {
      return Platform.OS == 'android'
        ? ToastAndroid.show(`Payment method not selected`, ToastAndroid.SHORT)
        : alert(`Payment method not selected`);
    }
    console.log("🚀 ~ PlaceOrder ~ body:", body)
    setIsLoading(true);
    
    const response = await Post(url, body, apiHeader(token));
    setIsLoading(false);
    if (response != undefined) {
       console.log("🚀 ~ PlaceOrder ~ response:", response?.data)
       // console.log('', response?.data);
       dispatch(EmptyCart());
      //  navigation.navigate("Store");
       navigation.goBack();
      // navigationService.navigate('PaymentInvoice', {
      //   body: response?.data?.order_info,
      // });
    }
  };

 

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: windowHeight,
      }}>
    <ImageBackground
      style={{
        width: windowWidth,
        minHeight: windowHeight,
        paddingBottom: moderateScale(10, 0.6),
        justifyContent: 'center',
        alignItems: 'center',
      }}
      source={require('../Assets/Images/Home_Bg_image.png')}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.back}>
        <Icon
          name="arrowleft"
          as={AntDesign}
          style={styles.icon2}
          color={Color.white}
          size={moderateScale(20, 0.3)}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </TouchableOpacity>

        <CustomText />
        <TextInputWithTitle
          titleText={'Your name'}
          placeholder={'Your name'}
          setText={setName}
          value={name}
          viewHeight={0.06}
          viewWidth={0.8}
          inputWidth={0.7}
          border={1}
          borderColor={'#0F02022E'}
          backgroundColor={'white'}
          marginBottom={moderateScale(20, 0.3)}
          color={'#ABB1C0'}
          placeholderColor={'#ABB1C0'}
          borderRadius={moderateScale(20, 0.6)}
        />
        {/* <TextInputWithTitle
          titleText={'Last name'}
          placeholder={'Last name'}
          setText={setLastName}
          value={lastName}
          viewHeight={0.06}
          viewWidth={0.8}
          inputWidth={0.7}
          border={1}
          borderColor={'#0F02022E'}
          backgroundColor={'white'}
          marginBottom={moderateScale(20, 0.3)}
          color={'#ABB1C0'}
          placeholderColor={'#ABB1C0'}
          borderRadius={moderateScale(20, 0.6)}
        /> */}
        <TextInputWithTitle
          titleText={'Your email address'}
          placeholder={'Your email address '}
          setText={setEmail}
          value={email}
          viewHeight={0.06}
          viewWidth={0.8}
          inputWidth={0.7}
          border={1}
          borderColor={'#0F02022E'}
          backgroundColor={'white'}
          marginBottom={moderateScale(20, 0.3)}
          color={'#ABB1C0'}
          placeholderColor={'#ABB1C0'}
          borderRadius={moderateScale(20, 0.6)}
        />
        <TextInputWithTitle
          titleText={'Phone'}
          placeholder={'Phone'}
          setText={setPhone}
          value={phone}
          viewHeight={0.06}
          viewWidth={0.8}
          inputWidth={0.7}
          border={1}
          borderColor={'#0F02022E'}
          backgroundColor={'white'}
          marginBottom={moderateScale(20, 0.3)}
          color={'#ABB1C0'}
          placeholderColor={'#ABB1C0'}
          borderRadius={moderateScale(20, 0.6)}
          keyboardType={'numeric'}
        />
        <TextInputWithTitle
          titleText={'Country'}
          placeholder={'Country'}
          setText={setCountry}
          value={country}
          viewHeight={0.06}
          viewWidth={0.8}
          inputWidth={0.7}
          border={1}
          borderColor={'#0F02022E'}
          backgroundColor={'white'}
          marginBottom={moderateScale(20, 0.3)}
          color={'#ABB1C0'}
          placeholderColor={'#ABB1C0'}
          borderRadius={moderateScale(20, 0.6)}
        />
        <TextInputWithTitle
          titleText={'Address'}
          placeholder={'Address'}
          setText={setAddress}
          value={address}
          viewHeight={0.06}
          viewWidth={0.8}
          inputWidth={0.7}
          border={1}
          borderColor={'#0F02022E'}
          backgroundColor={'white'}
          marginBottom={moderateScale(20, 0.3)}
          color={'#ABB1C0'}
          placeholderColor={'#ABB1C0'}
          borderRadius={moderateScale(20, 0.6)}
        />
        <TextInputWithTitle
          keyboardType={'numeric'}
          titleText={'Post code'}
          placeholder={'Post code'}
          setText={setPostCode}
          value={postcode}
          viewHeight={0.06}
          viewWidth={0.8}
          inputWidth={0.7}
          border={1}
          borderColor={'#0F02022E'}
          backgroundColor={'white'}
          marginBottom={moderateScale(20, 0.3)}
          color={'#ABB1C0'}
          placeholderColor={'#ABB1C0'}
          borderRadius={moderateScale(20, 0.6)}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // backgroundColor:'yellow',
            width: windowWidth * 0.75,
            paddingBottom: moderateScale(15, 0.3),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
               setIsModal(false)
                
                setIsChecked('Cash on delivery');
              }}
              style={{
                width: windowHeight * 0.015,
                backgroundColor:
                  isChecked == 'Cash on delivery'
                    ? Color.theme2
                    : Color.mediumGray,
                height: windowHeight * 0.015,
                borderRadius: (windowHeight * 0.015) / 2,
                borderColor: Color.mediumGray,
                borderWidth: 2,
              }}></TouchableOpacity>
            <CustomText
              onPress={() => {
                setIsModal(false)
                setIsChecked('Cash on delivery');
              }}
              style={{
                color: Color.white,
                marginLeft: moderateScale(5, 0.3),
              }}>
              Cash on delivery
            </CustomText>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                setIsModal(true);
                setIsChecked('pay through stripe');
              }}
              style={{
                width: windowHeight * 0.015,
                backgroundColor:
                  isChecked == 'pay through stripe'
                    ? Color.theme2
                    : Color.mediumGray,
                height: windowHeight * 0.015,
                borderRadius: (windowHeight * 0.015) / 2,
                borderColor: Color.mediumGray,
                borderWidth: 2,
              }}></TouchableOpacity>
            <CustomText
              onPress={() => {
                setIsModal(true);
                setIsChecked('pay through stripe');
              }}
              style={{
                color: Color.white,
                marginLeft: moderateScale(5, 0.3),
              }}>
              pay through stripe
            </CustomText>
          </View>
        </View>
        {
          isModal && <View style={{width: windowWidth * 0.85,
          height: windowHeight * 0.15, 
          backgroundColor:'grey',
          borderRadius:moderateScale(12,0.3),
          marginBottom: moderateScale(11,0.2),
          alignItems:'center'}}>
            <CardField
              postalCodeEnabled={true}
              placeholders={{
                number: '4242 4242 4242 4242',
              }}
              cardStyle={{
                backgroundColor: '#D3D3D3',
                borderRadius: 15,
                width: 320,
              }}
              style={{
                width: '85%',
                height: 50,
                marginVertical: 10,
              }}
              onCardChange={cardDetails => {
                console.log('cardDetails', cardDetails);
                if(cardDetails?.complete) {
                  ToastAndroid.show("Card Details has been completed", ToastAndroid.SHORT)
                }
              }}
              onFocus={focusedField => {
                console.log('focusField', focusedField);
              }}
            />
            
               <CustomButton
               isBold
               text={'Confirm'}
               textColor={Color.white}
               width={windowWidth * 0.35}
               height={windowHeight * 0.05}
               onPress={() => {
                 stripePaymentFunction();
                 // setIsModal(false)
               }}
               bgColor={Color.themeColor}
               // isGradient
               borderRadius={moderateScale(30, 0.3)}
             />
            
          </View>
        }
        <CustomButton
          text={
            isLoading ? (
              <ActivityIndicator size={'small'} color={Color.white} />
            ) : (
              'Place order'
            )
          }
          textColor={Color.white}
          width={windowWidth * 0.8}
          height={windowHeight * 0.07}
          fontSize={moderateScale(16, 0.6)}
          bgColor={Color.theme2}
          borderRadius={moderateScale(30, 0.3)}
          onPress={() => {
            // dispatch(EmptyCart());
            // navigation.navigate('HomeScreen');
            PlaceOrder();
          }}
        />

        {/* <PaymentModal
          isModal={isModal}
          setIsModal={setIsModal}
          setToken={setStripeToken}
        /> */}
    
    </ImageBackground>
      </ScrollView>
  );
};

export default PlaceOrderScreen;

const styles = StyleSheet.create({
  bottomImage: {
    width: '100%',
    height: '100%',
  },
  back: {
    width: moderateScale(35, 0.6),
    height: moderateScale(35, 0.6),
    // borderRadius: moderateScale(5, 0.6),
    // borderWidth: 0.5,
    // borderColor: '#FFFFFF',
    position: 'absolute',
    left: moderateScale(10, 0.6),
    top: moderateScale(10, 0.6),
    zIndex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

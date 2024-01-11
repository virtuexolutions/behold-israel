import {
  FlatList,
  View,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import React, {useEffect} from 'react';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import CartItem from '../Components/CartItem';
import {useState} from 'react';
import CustomButton from '../Components/CustomButton';
import navigationService from '../navigationService';
import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {Icon, Toast} from 'native-base';
// import { selectedProductSize } from '../Store/slices/common';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const CheckoutScreen = ({route}) => {
  const navigation = useNavigation();
  //   const cartitem =useSelector(state => state.commonReducer.cart)
  // console.log("🚀 ~ CheckoutScreen ~ cartitem:", cartitem)
  const selectedProductSize = useSelector(state => state.commonReducer.item);
  const cardData = useSelector(state => state.commonReducer.cart);
  const token = useSelector(state => state.authReducer.token);
  console.log(
    '🚀 ~ file: CheckOutScreen.js:27 ~ CheckOutScreen ~ token:',
    token,
  );
  const [finalAmount, setFinalAmount] = useState(0);
  const [productsForCard, setProdctsForCart] = useState([]);
  const subTotal = route?.params?.subTotal;

  // useEffect(() => {
  //   if (cardData.length == 0) {
  //     navigationService.navigate('HomeScreen');
  //   }
  // }, [cardData]);

  return (
    <>
      <CustomStatusBar backgroundColor={'#FDFDFD'} barStyle={'dark-content'} />
      {/* <Header
          showLeft={true}
          leftName={'arrow-left'}
          leftType={Feather}
          title={'cart'}
          showRight={true}
          rightName={'shopping-bag'}
          rightType={Feather}
        /> */}

      <ImageBackground
        style={{
          width: windowWidth,
          minHeight: windowHeight,
          paddingBottom: moderateScale(40, 0.6),
          justifyContent: 'center',
          // backgroundColor:'red',
          // height: windowHeight*0.8,
          alignItems: 'center',
          paddingBottom: moderateScale(20, 0.3),
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

        <FlatList
          showsVerticalScrollIndicator={false}
          data={cardData}
          style={
            {
              //   backgroundColor: 'white',
              // justifyContent:'center',
            }
          }
          contentContainerStyle={{
            minHeight: windowHeight,
            width: windowWidth,
            alignItems: 'center',
            paddingTop: moderateScale(65, 0.6),
            // backgroundColor:'green'
          }}
          renderItem={({item, index}) => {
            return <CartItem item={item} fromCheckout={true} />;
          }}
          ListFooterComponent={() => {
            return (
              <View
                style={
                  {
                    // backgroundColor:'red',
                    // padding:moderateScale(10,.6),
                    // height:windowHeight,
                  }
                }>
                <CustomButton
                  isBold
                  //   onPress={() => {
                  //     const temp = cardData.some(
                  //       (item, index) => item?.size && Object.keys(item?.size_id).length == 0,
                  //     );
                  //     console.log(
                  //       '🚀 ~ file: CheckOutScreen.js:65 ~ CheckOutScreen ~ temp:',
                  //       temp,
                  //     );
                  //     if (temp) {
                  //       Platform.OS == 'android'
                  //         ? ToastAndroid.show(
                  //             ' Please Select size',
                  //             ToastAndroid.SHORT,
                  //           )
                  //         : Alert.alert('Please Select size');
                  //     } else {
                    //     }
                    //   }}
                    onPress={() => {

                      navigationService.navigate('PlaceOrderScreen');
                    }}
                    text={'Proceed'}
                  textColor={Color.white}
                  width={windowWidth * 0.8}
                  height={windowHeight * 0.07}
                  fontSize={moderateScale(16, 0.6)}
                  // marginBottom={moderateScale(10,.3)}
                  // marginTop={moderateScale(10, 0.3)}
                  bgColor={Color.theme2}
                  borderRadius={moderateScale(30, 0.3)}
                  // isGradient
                />
              </View>
            );
          }}
        />
      </ImageBackground>
    </>
  );
};

export default CheckoutScreen;

const styles = ScaledSheet.create({
  heading: {
    fontSize: moderateScale(20, 0.3),
    textAlign: 'left',
    width: windowWidth * 0.9,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.9,
    marginTop: moderateScale(10, 0.3),
    borderBottomWidth: 1,
    borderColor: Color.lightGrey,
    paddingBottom: moderateScale(10, 0.3),
  },
  subHeading: {
    fontSize: moderateScale(16, 0.3),
  },
  userTypeContainer: {
    padding: moderateScale(10, 0.3),
    marginTop: moderateScale(10, 0.3),
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: moderateScale(5, 0.3),
  },
  circle: {
    height: moderateScale(13, 0.3),
    width: moderateScale(13, 0.3),
    borderRadius: moderateScale(6.5, 0.3),
    borderWidth: 1,
    backgroundColor: Color.white,
    borderColor: Color.green,
    marginLeft: moderateScale(15, 0.3),
  },
  txt2: {
    fontSize: moderateScale(12, 0.3),
  },
  back: {
    width: moderateScale(35, 0.6),
    height: moderateScale(35, 0.6),
    borderRadius: moderateScale(5, 0.6),
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    position: 'absolute',
    left: moderateScale(10, 0.6),
    top: moderateScale(10, 0.6),
    zIndex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

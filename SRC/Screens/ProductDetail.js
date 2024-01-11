import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  Alert,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import CustomImage from '../Components/CustomImage';
import {Icon, ScrollView} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../Components/CustomButton';

import CustomStatusBar from '../Components/CustomStatusBar';
import Header from '../Components/Header';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Color from '../Assets/Utilities/Color';
import {useDispatch, useSelector} from 'react-redux';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import {
  AddToCart,
  decrementQuantity,
  increamentQuantity,
  selectedProductSize,
} from '../Store/slices/common';
import {imageSizeUrl, imageUrl} from '../Config';

const ProductDetail = props => {
  const navigation = useNavigation();
  const focused = useIsFocused();
  const item = props.route.params.item;
  console.log('🚀 ~ DressesDetail.js:50 ~ DressesDetail ~ selectedItem:', item);

  const cartData = useSelector(state => state.commonReducer.item);

  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  console.log(
    '🚀 ~ file: DressesDetail.js:48 ~ DressesDetail ~ selectedItem:',
    selectedItem,
    selectedItem
      ? `${imageUrl}/${selectedItem?.image}`
      : `${imageUrl}${item?.large_image}`,
  );
  const cardData = useSelector(state => state.commonReducer.cart);
  const [selectedItem, setSelectedItem] = useState(
    cardData?.find(data => data?.id == item?.id)?.size_id
      ? cardData?.find(data => data?.id == item?.id)?.size_id
      : {},
  );
  console.log(
    '🚀 ~ file: DressesDetail.js:50 ~ DressesDetail ~ selectedItem:',
    cardData,
  );
  const [sizeArray, setSizeArray] = useState(
    item?.varation?.map(item => item?.size),
  );
  const [like, setLike] = useState(item?.like);
  const [index, setIndex] = useState(1);
  const [quantity, setQuantity] = useState(
    cardData?.find(data => data?.id == item?.id)
      ? cardData?.find(data => data?.id == item?.id)?.quantity
      : 1,
  );
  const [cotton, setcotton] = useState(1);
  const images = [
    require('../Assets/Images/image3.png'),
    require('../Assets/Images/Mask2.png'),
    require('../Assets/Images/image3.png'),
    require('../Assets/Images/Mask2.png'),
    require('../Assets/Images/Mask.png'),
  ];

  const [finalItem, setFinalItem] = useState(item);

  useEffect(() => {
    setSelectedItem(item?.varation?.find(item => item?.size == selectedSize));
    if (selectedSize != '') {
      dispatch(
        selectedProductSize({
          id: item?.id,
          item: item?.varation?.find(data => data?.size == selectedSize),
        }),
      );
    }
  }, [selectedSize]);

  useEffect(() => {
    if (cartData?.some(data => data?.id == item?.id)) {
      setSelectedSize(
        Object.keys(cartData?.find(data => data?.id == item?.id)?.size_id)
          .length > 0
          ? cartData?.find(data => data?.id == item?.id)?.size_id?.size
          : '',
      );

      setSelectedItem(
        Object.keys(cartData?.find(data => data?.id == item?.id)?.size_id)
          .length > 0
          ? cartData?.find(data => data?.id == item?.id)?.size_id
          : {},
      );
    }
  }, [focused]);

  return (
    <>
      <ImageBackground
        style={{
          width: windowWidth,
          minHeight: windowHeight,
          paddingBottom: moderateScale(10, 0.6),
          justifyContent: 'center',
          // backgroundColor:'red',
          // height: windowHeight*0.8,
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
        <CustomStatusBar
          backgroundColor={'#FDFDFD'}
          barStyle={'dark-content'}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            height: windowHeight * 0.85,
            // justifyContent: 'center',
            // backgroundColor: 'red',
            alignItems: 'center',
            paddingTop: moderateScale(60, 0.6),
          }}>
          <View style={styles.banner}>
            <View style={[styles.container]}>
              <CustomImage
                source={item?.image}
                resizeMode={'contain'}
                style={{
                  height: '100%',
                  height: '100%',
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: windowWidth * 0.95,
                alignItems: 'center',
                paddingHorizontal: moderateScale(10, 0.6),
                paddingVertical: moderateScale(10, 0.6),
              }}>
              <CustomText
                isBold
                style={{
                  color: Color.white,
                  fontSize: moderateScale(18, 0.6),
                  width: windowWidth * 0.6,
                  textAlign: 'left',
                }}>
                {finalItem?.title}
              </CustomText>

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  setLike(!like);
                }}>
                {like ? (
                  <Icon
                    name={'heart'}
                    as={Entypo}
                    size={moderateScale(25, 0.3)}
                    color={'#E50808'}
                  />
                ) : (
                  <Icon
                    name={'heart-outlined'}
                    as={Entypo}
                    size={moderateScale(25, 0.3)}
                    color={Color.white}
                  />
                )}
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: moderateScale(10, 0.6),
                alignItems: 'center',
                width: windowWidth * 0.95,
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  // backgroundColor: 'red',
                }}>
                <CustomText
                  isBold
                  style={{
                    textAlign: 'left',
                    color: Color.white,
                    fontSize: 24,
                    marginRight: moderateScale(10, 0.3),
                    // width: windowWidth * 0.24,
                  }}>
                  {item?.price}
                </CustomText>
                {item?.discount_price && (
                  <CustomText
                    isBold
                    style={{
                      textAlign: 'left',
                      color: Color.veryLightGray,
                      fontSize: moderateScale(15, 0.6),
                      textDecorationLine: 'line-through',
                      textDecorationStyle: 'solid',
                      // width: windowWidth * 0.24,
                    }}>
                    $
                    {selectedItem && Object.keys(selectedItem).length > 0
                      ? selectedItem?.discount_price
                        ? selectedItem?.price
                        : item?.discount_price
                      : item?.wholsale_price}
                  </CustomText>
                )}
              </View>
              <View style={styles.conterContainer}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('details page increment')
                    // if (item?.qty <item?.totalquantity) {
                    //   dispatch(increamentQuantity(item?.id));
                    // //   setQuantity(quantity + 1);
                    // } else {
                    //   Platform.OS == 'android'
                    //     ? ToastAndroid.show(
                    //         'Sorry! You can not add more',
                    //         ToastAndroid.SHORT,
                    //       )
                    //     : Alert.alert('Sorry! You can not add more');
                    // }
                    item?.qty < item?.totalquantity &&
                    dispatch(increamentQuantity({id: item?.id}));
                  }}
                  style={styles.icon}>
                  <CustomText
                    isBold
                    style={{
                      color:Color.black,
                      fontSize: moderateScale(15, 0.6),
                    }}>
                    +
                  </CustomText>
                </TouchableOpacity>

                <CustomText
                  isBold
                  style={{
                    color:Color.white,
                    fontSize: moderateScale(14, 0.6),
                  }}>
                    {cardData?.find((data,index) => data?.id == item?.id )?.qty}
                  {/* {item?.qty} */}
                </CustomText>

                <TouchableOpacity
                  onPress={() => {
                    {
                        cardData?.find((data,index) =>  data?.id == item?.id ) 
                        ?.qty > 1 && 
                        dispatch(decrementQuantity({id: item?.id}));
                    }
                      console.log('detail page decrement')
                  }}
                  style={styles.icon}>
                  <CustomText
                    isBold
                    style={{
                      color: Color.black,
                    //   alignItems:'center'
                      fontSize: moderateScale(15, 0.6),
                    }}>
                    -
                  </CustomText>
                </TouchableOpacity>
              </View>
            </View>
            {!['', null, undefined].includes(item?.size) && (
              <>
                <CustomText
                  isBold
                  style={{
                    color: '#201E1D',
                    fontSize: moderateScale(14, 0.6),
                    width: windowWidth * 0.17,
                    // backgroundColor:'red',
                    width: windowWidth * 0.95,
                    textAlign: 'left',
                    paddingHorizontal: moderateScale(10, 0.6),
                    paddingTop: moderateScale(10, 0.6),
                  }}>
                  Size
                </CustomText>
              </>
            )}
            <CustomText
              isBold
              style={{
                color: Color.white,
                fontSize: moderateScale(14, 0.6),
                width: windowWidth * 0.17,
                // backgroundColor:'red',
                width: windowWidth * 0.95,
                textAlign: 'left',
                paddingHorizontal: moderateScale(10, 0.6),
                paddingTop: moderateScale(10, 0.6),
              }}>
              Description
            </CustomText>
            <CustomText
              style={{
                color: Color.white,
                fontSize: moderateScale(13, 0.6),
                width: windowWidth * 0.95,
                textAlign: 'left',
                paddingHorizontal: moderateScale(10, 0.6),
                paddingVertical: moderateScale(10, 0.6),
              }}>
              {item?.discription}
            </CustomText>
          </View>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <CustomButton
            disabled={
              cardData?.find((data, index) => data?.id == item?.id) && true
            }
            isBold
            onPress={() => {
              dispatch(
                AddToCart({...item, quantity: quantity, size_id: selectedItem}),
              );
            }}
            text={
              cardData.find((data, index) => data?.id == item?.id)
                ? 'Added'
                : 'ADD TO CART'
            }
            textColor={Color.white}
            width={windowWidth * 0.8}
            height={windowHeight * 0.07}
            fontSize={moderateScale(16, 0.6)}
            bgColor={Color.theme2}
            borderRadius={moderateScale(30, 0.3)}
            marginBottom={moderateScale(20, 0.3)}
            // isGradient
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  size: {
    height: windowHeight * 0.04,
    width: windowWidth * 0.08,
    borderRadius: (windowWidth * 0.1) / 2,
    justifyContent: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight * 0.1,
    //   backgroundColor: '#FFFFFF',
    //  alignItems:'center',
    bottom: 15,
    justifyContent: 'center',
  },
  container: {
    paddingTop: moderateScale(10, 0.6),
    height: windowHeight * 0.3,
    width: windowWidth * 0.88,
    borderRadius:moderateScale(10,.6),
    overflow:'hidden',
    alignSelf: 'center',
    backgroundColor: 'green',
  },
  colorContainer: {
    height: windowHeight * 0.04,
    width: windowWidth * 0.08,
    borderRadius: (windowWidth * 0.1) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: moderateScale(15, 0.3),
  },
  icon: {
    width: windowWidth * 0.06,
    height: windowWidth * 0.06,
    borderRadius: (windowWidth * 0.06) / 2,
    backgroundColor: Color.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: moderateScale(5, 0.3),
  },
  banner: {
    width: windowWidth * 0.95,
    // height: windowHeight * 0.77,
    paddingTop:moderateScale(10,.6),
    // backgroundColor: '#ffffff',
    borderWidth:moderateScale(1,.6),
    borderColor:Color.white,
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 10,
    marginTop: moderateScale(10, 0.3),
    shadowColor: '#0000000A',
    shadowOffset: {width: 0, height: 2},
    justifyContent: 'center',
    alignItems: 'center',
  },

  conterContainer: {
    paddingVertical: moderateScale(5, 0.6),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor:'red'
  },

  ColorLine: {
    flexDirection: 'row',
    marginTop: moderateScale(15, 0.3),
    marginBottom: moderateScale(15, 0.3),
  },

  ColorLine1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: windowWidth * 0.7,
    marginTop: moderateScale(15, 0.3),
    marginBottom: moderateScale(15, 0.3),
  },

  bottomBanner: {
    width: windowWidth,
    height: windowHeight * 0.13,
    position: 'absolute',
    bottom: moderateScale(0, 0.3),
    backgroundColor: '#fff',
    elevation: 1,
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

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from './CustomText';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomImage from './CustomImage';
import {Icon} from 'native-base';
import {
  RemoveToCart,
  addQuantity,
  decrementQuantity,
  increamentQuantity,
  setColor,
  setProductColor,
  setProductSize,
  setSize,
  subQuantity,
} from '../Store/slices/common';
import {useDispatch, useSelector} from 'react-redux';
import numeral from 'numeral';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { baseUrl } from '../Config';

const CartItem = ({item, fromCheckout}) => {
  console.log('🚀 ~ file: CartItem.js:25 ~ CartItem ~ item:', item?.photo);
  const cartData = useSelector(state => state.commonReducer.cart);
  console.log("🚀 ~ CartItem ~ cartData:", cartData)

  const dispatch = useDispatch();
  const  navigation =useNavigation()

  return (
    <View style={styles.cardContainer} key={item?.id}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={styles.otherContainer}>
          <Icon
            name={'circle'}
            as={Entypo}
            size={moderateScale(20, 0.3)}
            color={Color.themeLightGray}
            style={{
              marginRight: moderateScale(5, 0.3),
            }}
          />
          <CustomImage
            source={{uri:`${baseUrl}${item?.photo}`}}
            style={{
              width: windowWidth * 0.3,
              height: windowHeight * 0.15,
              borderRadius: moderateScale(10, 0.3),
            }}
          />
        </View>
        <View style={styles.other1}>
          <View style={{
            flexDirection:'row',
            // position:'absolute'
          }}>
            <CustomText style={styles.text1}>{item?.title}</CustomText>
          <Icon
          style={{
            position:'absolute',
            right:10,
            top:0
          }}
                name={'circle-with-cross'}
                as={Entypo}
                color={Color.white}
                size={moderateScale(15, 0.3)}
                onPress={() => {
               
               dispatch(RemoveToCart({id: item?.id}))
               
                }}
              />
          </View>
          <CustomText style={[styles.text1 ,{
            fontSize:moderateScale(11,.6)
          }]}>{item?.discription}</CustomText>
          {/* <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: windowWidth * 0.45,
              marginTop: moderateScale(5, 0.3),
            }}>
            {item?.selectedSize ? (
              <CustomText>Selected Size : {item?.selectedSize}</CustomText>
            ) : (
              item?.size?.map((item1, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      dispatch(
                        setSize({
                          id: item?.id,
                          size: item1,
                        }),
                      );
                    }}
                    style={styles.sizeBox}>
                    <CustomText style={{color: Color.black}}>
                      {item1}
                    </CustomText>
                  </TouchableOpacity>
                );
              })
            )}
          </View> */}
          {/* {item?.selectedColor ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CustomText style={{color: Color.black, textAlign: 'left'}}>
                Selected Color:{' '}
              </CustomText>
              <View
                style={[
                  styles.colorBox,
                  {backgroundColor: item?.selectedColor.toLowerCase()},
                ]}></View>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: windowWidth * 0.45,
                // marginTop: moderateScale(5, 0.3),
              }}>
              {item?.colors?.map((item1, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      dispatch(
                        setColor({
                          id: item?.id,
                          colors: item1,
                        }),
                      );
                    }}
                    style={[
                      styles.colorBox,
                      {
                        backgroundColor: item1.toLowerCase(),
                        borderWidth: 2,
                        borderColor: item1?.toLowerCase(),
                      },
                      item?.selectedColor &&
                        item?.selectedColor.toLowerCase() ==
                          item1.toLowerCase() && {
                          borderColor: item?.selectedColor?.toLowerCase(),
                        },
                    ]}></TouchableOpacity>
                );
              })}
            </View>
          )} */}
          <View
            style={[
              styles.other1,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: moderateScale(10, 0.3),
                alignItems: 'center',
              },
            ]}>
            <CustomText style={styles.amount}>

              {(cartData?.find((data ,index) => data?.id == item?.id)?.price *item?.quantity).toString() }
            {/* {item?.price * item?.qty}  */}
              {/* {item?.price * item?.qty} PKR */}
            </CustomText>

            <View
              style={{
                marginRight: moderateScale(15, 0.3),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name={'add-circle-sharp'}
                as={Ionicons}
                color={Color.white}
                size={moderateScale(25, 0.3)}
                onPress={() => {
                  console.log('increment')
                  // item?.quantity < item?.totalquantity &&
                    dispatch(increamentQuantity({id: item?.id}));
                }}
              />
              <CustomText
                isBold
                style={{
                  color:Color.white,
                  marginHorizontal: moderateScale(5, 0.3),
                  fontSize: moderateScale(12, 0.3),
                }}>
                {item?.quantity}
              </CustomText>
              <Icon
                name={'circle-with-minus'}
                as={Entypo}
                color={Color.white}
                size={moderateScale(24, 0.3)}
                onPress={() => {
                   dispatch(decrementQuantity({id: item?.id}));
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cardContainer: {
    minHeight: windowHeight * 0.2,
    width: windowWidth * 0.9,
    marginBottom: moderateScale(20, 0.3),
    borderWidth: 1,
    borderRadius: moderateScale(10, 0.6),
    borderColor: Color.veryLightGray,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  name: {
    fontSize: moderateScale(20, 0.3),
    color: Color.black,
    marginLeft: moderateScale(5, 0.3),
    marginBottom: moderateScale(10, 0.3),
  },
  otherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  other1: {
    marginLeft: moderateScale(5, 0.3),
    flexWrap: 'wrap',
    width: windowWidth * 0.5,
    // backgroundColor : 'yellow',
    overflow: 'hidden',
  },
  text1: {
    fontSize: moderateScale(16, 0.3),
    color: Color.white,
    width: windowWidth * 0.45,
  },
  text: {
    fontSize: moderateScale(13, 0.3),
    color: Color.black,
    width: windowWidth * 0.45,
    backgroundColor: 'red',
  },
  sizeBox: {
    paddingVertical: moderateScale(3, 0.3),
    paddingHorizontal: moderateScale(5, 0.3),
    borderRadius: moderateScale(5, 0.3),
    borderWidth: 1,
    borderColor: Color.themeLightGray,
    marginRight: moderateScale(5, 0.3),
    // backgroundColor :'red',
    // width : 20 , height : 20
  },
  colorBox: {
    width: moderateScale(20, 0.3),
    height: moderateScale(20, 0.3),
    borderRadius: moderateScale(10, 0.3),
    // marginRight: moderateScale(5, 0.3),
  },
  amount: {
    fontSize: moderateScale(18, 0.3),
    color: Color.white,
  },
});

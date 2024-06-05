import {
  FlatList,
  View,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
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
import CustomText from '../Components/CustomText';
import OrderCard from '../Components/OrderCard';
import {Text} from 'react-native';
import moment from 'moment';
import numeral from 'numeral';
import { baseUrl, imageUrl } from '../Config';
import CustomImage from '../Components/CustomImage';


const OrderDetails = props => {
  const data = props?.route?.params?.data;
  console.log(
    '🚀 ~ file: OrderDetails.js:28 ~ OrderDetails ~ data:',
    data?.order_detail,
  );
  // data?.order_detail?.map((item, index) => console.log("ITem ====> ", item));
  const cartData = useSelector(state => state.commonReducer.item);

  return (
    <ImageBackground style={{
      width: windowWidth,
      minHeight: windowHeight,
      paddingBottom: moderateScale(10, 0.6),
      // justifyContent: 'center',
      // alignItems: 'center',
    }}
    source={require('../Assets/Images/Home_Bg_image.png')}>
      <Header
        showBack={true}
        leftName={'arrow-left'}
        leftType={Feather}
        title={'Orders Details'}
      />

      <ScrollView
        style={{
          // backgroundColor: 'white',
          paddingBottom: moderateScale(50, 0.6),
        }}>
        <CustomText
          style={{
            fontSize: moderateScale(18, 0.6),
            color: Color.white,
            textAlign: 'left',
            paddingHorizontal: moderateScale(15, 0.3),
            paddingVertical: moderateScale(10, 0.3),
          }}
          isBold>
          item
        </CustomText>
    
       {data?.order_detail?.map((item, index) =>
       
          <View style={styles.view}>
            <View
              style={{
                height: windowHeight * 0.06,
                width: windowWidth * 0.1,
              }}>
              <CustomImage
                style={{
                  width: '100%',
                  height: '100%',
                }}
                source={
                {uri :`${baseUrl}${item?.product?.photo}`}
                    //  : require('../Assets/Images/Mask2.png')
                 }
              />
            </View>
           
              <CustomText
                style={{
                  fontSize: moderateScale(14, 0.6),
                  color: Color.mediumGray,
                  width:windowWidth*0.65,
                  textAlign: 'left',
                  paddingHorizontal: moderateScale(10, 0.3),
                  paddingVertical: moderateScale(10, 0.3),
                }}
                isBold>
                {item?.product?.title}
              </CustomText>
              <View style={styles.row}>
                <CustomText
                  style={{
                    fontSize: moderateScale(14, 0.6),
                    color: Color.mediumGray,
                    textAlign: 'left',
                    paddingVertical: moderateScale(10, 0.3),
                  }}
                  isBold>
                  {item.price} x{item?.quantity}
                </CustomText>
            
              </View>
          </View>
       )   
}       
        <CustomText style={styles.heading} isBold>
          order details
        </CustomText>
        <View style={styles.firstRow}>
          <View style={styles.row}>
            <CustomText style={styles.text2}>OrderId</CustomText>
            <CustomText style={styles.text2}>{data?.order_number}</CustomText>
          </View>
          <View style={styles.row}>
            <CustomText style={styles.text2}>order time</CustomText>
            <CustomText style={styles.text2}>
              {moment(data?.updated_at).format('LT')}
            </CustomText>
          </View>
          <View style={styles.row}>
            <CustomText style={styles.text2}>payment method</CustomText>
            <CustomText style={styles.text2}>{data?.payment_method}</CustomText>
          </View>
          <View
            style={[
              styles.row,
              {
                borderBottomWidth: 1,
                borderColor: Color.mediumGray,
                paddingVertical: moderateScale(10, 0.6),
              },
            ]}>
            <CustomText style={styles.text2}>Delivery address</CustomText>
            <CustomText
              style={[
                styles.text2,
                {
                  textAlign:'right',
                  width: windowWidth * 0.35,
                },
              ]}>
              {data?.address}
            </CustomText>
          </View>

          <View style={styles.row}>
            <CustomText style={styles.text2}>Total</CustomText>
            <CustomText style={styles.text2}>{numeral(data?.total_amount).format('$0,0.00')}</CustomText>
          </View>
          {/* <View style={styles.row}>
            <CustomText style={styles.text2}>Discount</CustomText>
            <CustomText style={styles.text2}>{numeral(data?.total_amount- data?.discount_amount).format('$0,0.00')}</CustomText>
          </View> */}
          <View style={styles.row}>
            <CustomText style={styles.text2}>subTotal</CustomText>
            <CustomText style={styles.text2}>{numeral(data?.total_amount).format('$0,0.00')}</CustomText>
          </View>
          {/* <View style={styles.row}>
            <CustomText style={styles.text2}>discount</CustomText>
            <CustomText style={styles.text2}>10%</CustomText>
          </View>
          <View style={styles.row}>
            <CustomText style={styles.text2}>Total</CustomText>
            <CustomText style={styles.text2}>{data?.total_amount}</CustomText>
          </View> */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default OrderDetails;

const styles = ScaledSheet.create({
  view: {
    flexDirection: 'row',
    backgroundColor: "#4d3d2f",
    marginHorizontal: moderateScale(10, 0.3),
    paddingVertical: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    borderRadius: moderateScale(10, 0.3),
    marginBottom: moderateScale(10, 0.3),
    justifyContent:'space-between',
    alignItems:'center'
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    // paddingHorizontal: moderateScale(15, 0.6),
    paddingVertical: moderateScale(3, 0.6),
  },
  text2:{
    color:'white'
  },
  textRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Color.mediumGray,
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  firstRow: {
    backgroundColor: "#4d3d2f",
    marginHorizontal: moderateScale(10, 0.3),
    paddingHorizontal: moderateScale(10, 0.3),
    paddingVertical: moderateScale(15, 0.3),
    borderRadius: moderateScale(10, 0.6),
    marginBottom: moderateScale(20, 0.3),
  },
  heading: {
    fontSize: moderateScale(18, 0.6),
    color: Color.white,
    textAlign: 'left',
    paddingHorizontal: moderateScale(15, 0.3),
    paddingVertical: moderateScale(10, 0.3),
  },
});

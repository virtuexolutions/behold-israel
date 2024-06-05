import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import CustomText from './CustomText';
import {Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import numeral from 'numeral';
import { imageSizeUrl, imageUrl } from '../Config';


const OrderCard = ({data}) => {
  // console.log("🚀 ~ file: OrderCard.js:12 ~ OrderCard ~ data:", data?.item_info[0]?.product_info)
  const  navigation =useNavigation()
  return (




    <View style={styles.container}>


      <View style={styles.textRow}>
        <View
          style={{
            // backgroundColor: 'red',


            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <CustomText style={styles.text2}>OrderId : </CustomText>
          <CustomText style={styles.text2}>{data?.order_number}</CustomText>
        </View>
        <View style={{justifyContent: 'center', flexDirection: 'row'}}>
          <CustomText style={styles.text2}>{moment(data?.created_at).format('lll')} </CustomText>
        </View>
        <CustomText
        isBold
          style={[
            styles.text2,
            {color: data?.status == 'completed' ? 'green' : 'red',
          fontSize: moderateScale(11,0.2)},
          ]}>
          {data?.status}
        </CustomText>
      </View>
      <FlatList
        data={data?.item_info?.slice(0, 5)}
        horizontal
        renderItem={({item, index}) => {
          return (
            <>
              {index == 4 && (
                <View
                  style={[
                    styles.imageView,
                    {
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  ]}>
                  <Text
                    style={{backgroundColor: Color.lightGray, color: 'black' ,
                    fontSize:moderateScale(15,.3)
                    }}>
                    {data?.item_info?.length - 4}+
                  </Text>
                </View>
              )}
              {/* <View style={styles.imageView}>
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                  source={
                    item?.product_info ? {uri :`${imageUrl}/${item?.product_info?.large_image}`} :
                     item?.small_image
                       ? {uri: `${imageSizeUrl}${item?.small_image}`}
                       : require('../Assets/Images/Mask2.png')
                   }
               
                />
              </View> */}
            </>
          );
        }}
      />

      <View style={styles.buttonRow}>
        <CustomText isBold style={styles.text1}> Amount: {numeral(data?.total_amount).format('0.$')}</CustomText>
        <CustomButton
          // disabled={ cardData.find((data ,index) => data?.id == item?.id) && true}
          isBold
          onPress={() => { 
            navigation.navigate('OrderDetails' , {data :data})
          }}
          text={'Order Details'}
          textColor={Color.white}
          width={windowWidth * 0.29}
          height={windowHeight * 0.045}
          fontSize={moderateScale(11, 0.6)}
          bgColor={Color.red}
          borderRadius={moderateScale(30, 0.3)}
          // isGradient
        />
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  textRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Color.mediumGray,
    justifyContent: 'space-between',
  },
  text1: {
    fontSize: moderateScale(14, 0.3),
    color: Color.black,
    // width: windowWidth * 0.2
    padding: moderateScale(10, 0.6),
    textAlign: 'left',
  },
  text2: {
    fontSize: moderateScale(14, 0.3),
    color: Color.white,
    // width: windowWidth * 0.2
    paddingVertical: moderateScale(9, 0.6),
    textAlign: 'left',
    fontSize: moderateScale(12, 0.3),
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageView: {
    height: windowHeight * 0.1,
    width: windowWidth * 0.15,
    overflow: 'hidden',
    marginHorizontal: moderateScale(6, 0.3),
    borderRadius: moderateScale(5, 0.3),
    marginTop: moderateScale(10, 0.3),
  },
  container: {
    width: windowWidth * 0.94,
    height:windowHeight * 0.15,
    paddingVertical:moderateScale(12,0.3),
    backgroundColor:'#695747',
    borderRadius: moderateScale(15, 0.3),
    marginHorizontal: moderateScale(10, 0.3),
    paddingHorizontal: moderateScale(10, 0.3),
    borderWidth: 1,
    borderColor:"#624f3d",
    marginBottom: moderateScale(15, 0.3),
    elevation:6,
    shadowColor:'#e1d6cb',
    shadowOffset:{ width: 1, height: 0.5},
    shadowOpacity: 0.75
  },
});

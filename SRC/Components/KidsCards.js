import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import CustomImage from './CustomImage';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {AddToCart, RemoveToCart} from '../Store/slices/common';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from '../Assets/Utilities/Color';
import {baseUrl} from '../Config';
import CustomButton from './CustomButton';

const KidsCards = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cardData = useSelector(state => state.commonReducer.cart);

  return (
    <TouchableOpacity
      style={{
        backgroundColor: Color.white,
        padding: moderateScale(10, 0.6),
        width: windowWidth * 0.39,
        borderRadius: moderateScale(10, 0.3),
        marginVertical: moderateScale(10, 0.3),
        marginHorizontal: moderateScale(10, 0.3),
      }}>
      <View style={styles.image}>
        <CustomImage
          onPress={() => {
            if (cardData.find((data, index) => data?.id == item?.id)) {
              Platform.OS == 'android'
                ? ToastAndroid.show('item already added', ToastAndroid.SHORT)
                : Alert.alert('item already added');
            } else {
              dispatch(AddToCart(item));
              console.log('item succsessfully add to cart');
              // dispatch(AddToCart({...item, quantity: 1, size_id: {}}));
            }
          }}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: moderateScale(10, 0.6),
            overFlow: 'hidden',
          }}
          source={{uri: `${baseUrl}${item?.photo}`}}
        />
      </View>

      <CustomText isBold style={styles.text}>
        {item?.title}
      </CustomText>
      <CustomText numberOfLines={2} isBold style={styles.des}>
        {item?.description}
      </CustomText>
      <CustomText numberOfLines={1} isBold style={styles.price}>
        ${item?.price}
      </CustomText>
      <TouchableOpacity
        onPress={() => {
          if (cardData.find((data, index) => data?.id == item?.id)) {
            dispatch(RemoveToCart({id: item?.id}));
          } else {
            dispatch(AddToCart({...item, quantity: 1}));
            // dispatch(AddToCart({...item, quantity: 1, size_id: {}}));
          }
        }}>
        <Icon
          as={Ionicons}
          name={
            cardData?.some((data, index) => data?.id === item?.id)
              ? 'cart'
              : 'cart-outline'
          }
          size={moderateScale(24, 0.3)}
          color={Color.black}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default KidsCards;

const styles = StyleSheet.create({
  image: {
    height: windowHeight * 0.189,
    width: windowWidth * 0.34,
  },
  text: {
    fontSize: moderateScale(14, 0.6),
    color: Color.themeBlack,
    width: windowWidth * 0.35,
  },
  des: {
    fontSize: moderateScale(12, 0.6),
    color: Color.grey,
    paddingVertical: moderateScale(2, 0.6),
  },
  price: {
    fontSize: moderateScale(15, 0.6),
    color: Color.themeBlack,
  },
});

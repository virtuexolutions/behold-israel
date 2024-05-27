import {View, Text, Platform, ToastAndroid, Alert} from 'react-native';
import React from 'react';
import CustomImage from './CustomImage';
import Color from '../Assets/Utilities/Color';
import {windowWidth, windowHeight} from '../Utillity/utils';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import CustomText from './CustomText';
import {Icon} from 'native-base';
import {Rating} from 'react-native-ratings';
import {useDispatch, useSelector} from 'react-redux';
import {
  setDeleteFavouriteBook,
  setSaveFavouriteBook,
} from '../Store/slices/common';

const NewestBookComponent = ({item, setSaveBooks, saveBooks}) => {
  const dispatch = useDispatch();
  const FavouriteBook = useSelector(state => state.commonReducer.favouriteBook);
  console.log(
    '🚀 ~ NewestBookComponent ~ FavouriteBook============> here from component:',
    FavouriteBook,
  );
  return (
    <View style={styles.newestbooks}>
      <View style={styles.img}>
        <CustomImage
          style={{
            height: '100%',
            width: '100%',
            borderRadius: moderateScale(5, 0.6),
            overflow: 'hidden',
          }}
          source={require('../Assets/Images/mission2.png')}
        />
      </View>
      <View
        style={{
          paddingTop: moderateScale(10, 0.6),
        }}>
        <CustomText
          style={{
            color: Color.white,
            paddingHorizontal: moderateScale(10, 0.6),
            width: windowWidth * 0.9,
            fontSize: moderateScale(15, 0.6),
          }}>
          lorem ipsum
        </CustomText>

        <CustomText
          style={{
            color: Color.white,
            paddingHorizontal: moderateScale(10, 0.6),
            width: windowWidth * 0.9,
            fontSize: moderateScale(10, 0.6),
            paddingVertical: moderateScale(5, 0.6),
          }}>
          lorem ipsum
        </CustomText>
        <Rating
          type="custom"
          readonly
          startingValue={2}
          ratingCount={5}
          imageSize={moderateScale(13, 0.3)}
          style={{
            width: windowWidth * 0.24,
          }}
          ratingBackgroundColor={'transparent'}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          top: 40,
          right: 15,
          height: windowHeight * 0.025,
          width: windowWidth * 0.045,
          // backgroundColor :'red'
        }}>
        <CustomImage
          onPress={() => {
            if (FavouriteBook.find((data, index) => data?.id == item?.id)) {
              dispatch(setDeleteFavouriteBook(item));
              // Platform.OS == 'android'
              //   ? ToastAndroid.show('item already added', ToastAndroid.SHORT)
              //   : Alert.alert('item already added');
            } else {
              dispatch(setSaveFavouriteBook(item));
            }
            console.log('item succsessfully add to cart');

            console.log('pressed');
          }}
          style={{
            height: '100%',
            width: '100%',
          }}
          source={
            FavouriteBook.some((data, index) => data?.id == item?.id)
              ? require('../Assets/Images/save2.png')
              : require('../Assets/Images/save1.png')
          }
        />
      </View>
    </View>
  );
};

export default NewestBookComponent;
const styles = ScaledSheet.create({
  newestbooks: {
    marginVertical: moderateScale(10, 0.6),
    marginHorizontal: moderateScale(10, 0.6),
    width: windowWidth * 0.94,
    height: windowHeight * 0.14,
    // backgroundColor: 'white',
    borderRadius: moderateScale(10, 0.6),
    flexDirection: 'row',
    paddingHorizontal: moderateScale(8, 0.6),
    paddingVertical: moderateScale(10, 0.6),
    borderWidth: moderateScale(1, 0.6),
    borderColor: Color.white,
    // justifyContent :'space-between'
    // borderRadius :moderateScale(10,.6)
  },
  img: {
    height: windowHeight * 0.11,
    width: windowWidth * 0.15,
  },
});

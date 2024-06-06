import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomText from './CustomText';
import {moderateScale} from 'react-native-size-matters';
import {windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import {useNavigation} from '@react-navigation/native';

const OldTestment = ({item ,setSelectedBook ,selectedbook}) => {
 
  console.log(
    '🚀 ~ OldTestment ~ selectedbook==================>:',
    selectedbook,
  );

  const navigation = useNavigation();
  return item?.map((data, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedBook(data);
          navigation.navigate('SelectChapter', {book:data});
        }}
        numberOfLines={1}
        isBold
        style={{
          paddingVertical: moderateScale(5, 0.6),
          width: windowWidth * 0.45,
          paddingTop: moderateScale(20, 0.6),
          borderBottomWidth: moderateScale(1, 0.6),
          borderColor: Color.white,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: moderateScale(16, 0.6),
            color: Color.white,
          }}>
          {data?.book}
        </Text>
      </TouchableOpacity>
    );
  });
};

export default OldTestment;

const styles = StyleSheet.create({});

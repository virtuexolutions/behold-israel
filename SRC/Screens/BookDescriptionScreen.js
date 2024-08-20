import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import BookDescription from '../Components/BookDescription';
import {background} from 'native-base/lib/typescript/theme/styled-system';
import {Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BookDescriprtionScreen = props => {
  const data = props?.route?.params?.description;
  const bookname = props?.route?.params?.bookname;
  const chapter = props?.route?.params?.chapterNo;
  const navigation = props?.navigation;

  return (
    <ImageBackground
      style={{
        width: windowWidth,
        minHeight: windowHeight,
        paddingBottom: moderateScale(40, 0.6),
        alignItems: 'center',
      }}
      source={require('../Assets/Images/recorded.png')}>
      <View style={styles.Boxcontainer}>
        <Icon
          style={{
            textAlign: 'center',
            paddingTop: moderateScale(6.6),
          }}
          name={'arrow-back'}
          as={Ionicons}
          size={moderateScale(25, 0.3)}
          color={Color.white}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <CustomText numberOfLines={1} isBold style={styles.heading}>
        {bookname}
      </CustomText>
      <View style={styles.container}>
        <CustomText numberOfLines={1} isBold style={styles.chapterHeading}>
          {`chapter${chapter}`}
        </CustomText>
        <FlatList
          showsVerticalScrollIndicator={true}
          nestedScrollEnabled={true}
          scrollEnabled={true}
          contentContainerStyle={{
            paddingBottom: moderateScale(90, 0.6),
          }}
          data={data?.verses}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <CustomText isBold style={styles.container2}>
                  {item?.verse}.
                </CustomText>
                <CustomText
                  isBold
                  style={styles.text}>
                  {item?.text}
                </CustomText>
              </View>
            );
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default BookDescriprtionScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: moderateScale(30, 0.6),
    color: Color.white,
    paddingVertical: moderateScale(5, 0.6),
    width: windowWidth * 0.43,
    textAlign: 'center',
    marginVertical: moderateScale(15, 0.6),
    borderColor: Color.white,
  },
  container: {
    borderRadius: moderateScale(10, 0.6),
    borderColor: Color.white,
    width: windowWidth * 0.92,
    height: windowHeight * 0.85,
    borderWidth: moderateScale(1, 0.6),
    paddingBottom: moderateScale(10, 0.6),
  },
  chapterHeading: {
    fontSize: moderateScale(18, 0.6),
    color: Color.white,
    paddingVertical: moderateScale(5, 0.6),
    width: windowWidth * 0.79,
    paddingHorizontal: moderateScale(15, 0.6),
    textAlign: 'left',
  },
  Boxcontainer: {
    height: moderateScale(30, 0.3),
    width: moderateScale(30, 0.3),
    borderRadius: moderateScale(5, 0.3),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    top: 20,
    left: 17,
  },
  text:{
    fontSize: moderateScale(12, 0.6),
    color: Color.white,
    paddingVertical: moderateScale(5, 0.6),
    width: windowWidth * 0.79,
     textAlign: 'left',
  },
  container2: {
    fontSize: moderateScale(12, 0.6),
    color: Color.white,
    paddingVertical: moderateScale(5, 0.6),
    width: windowWidth * 0.09,
    textAlign: 'center',
    paddingHorizontal: moderateScale(3, 0.3),
  },
});

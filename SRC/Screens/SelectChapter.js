import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../Utillity/utils';
import OldTestment from '../Components/OldTestment';
import CustomText from '../Components/CustomText';
import {useNavigation} from '@react-navigation/native';
// import CardContainer from '../Components/CardContainer'

const SelectChapter = props => {
  const selectedbook = props?.route?.params?.book;
  console.log(
    '🚀 ~ SelectChapter ~ selectedbook==============>aye :',
    selectedbook,
  );

  const navigation = useNavigation();

  const [book, setBook] = useState(selectedbook?.book);
  const [selectedChapter, setSelectedChapter] = useState('');
  console.log(
    '🚀 ~ SelectChapter ~ selectedChapter======================>:',
    selectedChapter,
  );

  useEffect(() => {
    selectedbook?.chapters
  }, [selectedbook?.chapters]);

  return (
    <ImageBackground
      style={{
        width: windowWidth,
        minHeight: windowHeight,
        paddingBottom: moderateScale(40, 0.6),
        alignItems: 'center',
      }}
      resizeMode="cover"
      source={require('../Assets/Images/recorded.png')}>
      <CustomText numberOfLines={1} isBold style={styles.heading}>
        {selectedbook?.book}
      </CustomText>
      <FlatList
        showsVerticalScrollIndicator={true}
        nestedScrollEnabled={true}
        scrollEnabled={true}
        contentContainerStyle={{
          borderRadius: moderateScale(10, 0.6),
          borderColor: Color.white,
          width: windowWidth * 0.85,
          alignItems: 'center',
          borderWidth: moderateScale(1, 0.6),
          padding: moderateScale(20, 0.6),
          paddingBottom: moderateScale(80, 0.6),
        }}
        data={selectedbook?.chapters}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedChapter(item?.chapter);
                navigation.navigate('BookDescriprtionScreen', {
                  description: item,
                  bookname: book,
                  chapter: selectedChapter,
                });
              }}
              numberOfLines={1}
              isBold
              style={styles.btn}>
              <Text style={styles.text}>{item?.chapter}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </ImageBackground>
  );
};

export default SelectChapter;

const styles = StyleSheet.create({
  heading: {
    fontSize: moderateScale(20, 0.6),
    color: Color.white,
    paddingVertical: moderateScale(5, 0.6),
    width: windowWidth * 0.6,
    textAlign: 'center',
    paddingVertical: moderateScale(30, 0.6),
  },
  btn: {
    paddingVertical: moderateScale(5, 0.6),
    width: windowWidth * 0.45,
    paddingTop: moderateScale(20, 0.6),
    borderBottomWidth: moderateScale(1, 0.6),
    borderColor: Color.white,
  },
  text: {
    textAlign: 'center',
    fontSize: moderateScale(16, 0.6),
    color: Color.white,
  },
});

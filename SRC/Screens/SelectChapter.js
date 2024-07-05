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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from 'native-base';

// import CardContainer from '../Components/CardContainer'

const SelectChapter = props => {
  const selectedbook = props?.route?.params?.book;

  const navigation = useNavigation();

  const [book, setBook] = useState(selectedbook?.book);
  const [selectedChapter, setSelectedChapter] = useState('');
  

  return (
    <ImageBackground
      style={{
        width: windowWidth,
        minHeight: windowHeight,
        paddingBottom: moderateScale(40, 0.6),
        alignItems: 'center',
        // justifyContent:'center'
      }}
      resizeMode="cover"
      source={require('../Assets/Images/recorded.png')}>
                              <View
        style={{
          height: moderateScale(30, 0.3),
          width: moderateScale(30, 0.3),
          borderRadius: moderateScale(5, 0.3),
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex:1,
          top:28,
          left:17,
        }}>
           <Icon
          style={{
            textAlign:'center',
        
            paddingTop: moderateScale(6.6),

            // marginTop :moderateScale
          }}
          name={'arrow-back'}
          as={ Ionicons}
          size={moderateScale(25, 0.3)}
          color={Color.white}
          onPress={() => {
     
              navigation.goBack();
                  // navigationN.dispatch(DrawerActions.toggleDrawer())
            
          }}
          />
          </View>
      <CustomText numberOfLines={1} isBold style={styles.heading}>
        {selectedbook?.book}
      </CustomText>
      <View style={styles.container}>
      <CustomText
          numberOfLines={1}
          isBold
          style={{
            fontSize: moderateScale(18, 0.6),
            color: Color.white,
            paddingVertical: moderateScale(5, 0.6),
            width: windowWidth * 0.79,
            paddingHorizontal:moderateScale(10,.6),
            // backgroundColor:'red',
            textAlign: 'left',
          }}>
          chapters
        </CustomText>
        <FlatList
        numColumns={6}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          scrollEnabled={true}
          contentContainerStyle={{
            paddingBottom: moderateScale(80, 0.6),
          }}
          // style={styles.container}
          data={selectedbook?.chapters}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BookDescriprtionScreen', {
                    description: item,
                    bookname: book,
                    chapter: selectedChapter,
                    chapterNo: item?.chapter,
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
      </View>
    </ImageBackground>
  );
};

export default SelectChapter;

const styles = StyleSheet.create({
  heading: {
    fontSize: moderateScale(25, 0.6),
    color: Color.white,
    paddingVertical: moderateScale(5, 0.6),
    width: windowWidth * 0.6,
    textAlign: 'center',
    paddingVertical: moderateScale(30, 0.6),
  },
  btn: {
    paddingVertical: moderateScale(5, 0.6),
    width: windowWidth * 0.1,
    // paddingTop: moderateScale(20, 0.6),
    borderWidth:1,
    marginHorizontal :moderateScale(8,.3),
    marginVertical:moderateScale(8,.3),
    // borderBottomWidth: moderateScale(1, 0.6),
    borderColor: Color.white,
  },
  text: {
    textAlign: 'center',
    fontSize: moderateScale(16, 0.6),
    color: Color.white,
  },
  container: {
    borderRadius: moderateScale(15, 0.6),
    borderColor: Color.white,
    width: windowWidth * 0.92,
    height: windowHeight * 0.6,
    // alignItems: 'center',
    borderWidth: moderateScale(1, 0.6),
    padding: moderateScale(10, 0.6),
    // justifyContent :'center',
    // backgroundColor:'red'
  },
});

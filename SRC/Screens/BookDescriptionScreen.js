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

const BookDescriprtionScreen = props => {
  const data = props?.route?.params?.description;
  const bookname = props?.route?.params?.bookname;
  const chapter = props?.route?.params?.chapter
  console.log("🚀 ~ BookDescriprtionScreen ~ chapter============:", chapter)
  // const description = [
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet imperdiet mauris, eget interdum leo. In venenatis suscipit arcu, ut scelerisque nunc ornare eu. Praesent diam enim, maximus vitae nunc vitae, sollicitudin finibus dui. Suspendisse potenti. Vivamus bibendum ipsum eu varius iaculis. Etiam efficitur ipsum eleifend tortor euismod, ut molestie magna dignissim. Nam lacinia nulla tempor, aliquet urna ut, porttitor nisl. Fusce vulputate pellentesque vestibulum. Proin nec orci eu quam dignissim volutpat. Maecenas sit amet dictum elit. Pellentesque bibendum mollis dictum. Phasellus efficitur, dolor in tincidunt euismod, diam dolor viverra nibh, a convallis ex lacus a lorem. Quisque sit amet sapien ac felis blandit auctor. Etiam bibendum tellus vel molestie varius. Aenean eu fringilla leo. Donec pharetra gravida massa sed ornare. Maecenas mi nunc, consequat vitae nunc sed, interdum bibendum tellus. Nulla tristique nisi ac sem posuere varius. Aliquam cursus urna lacus, at sodales velit pretium nec. Vivamus in elementum purus. Sed commodo tellus sagittis suscipit vulputate. Pellentesque sollicitudin neque et lacus condimentum, eu blandit lacus molestie. Donec mi risus, lacinia eget ullamcorper ut, rutrum sed velit. Ut in quam et libero cursus pulvinar ac non metus. Quisque risus felis, bibendum at arcu a, dapibus imperdiet lectus. Vestibulum a consequat enim. Cras condimentum tempus lectus id ullamcorper. Proin nec iaculis lectus. Mauris imperdiet odio elit, nec sodales quam condimentum et. Aliquam rutrum quam vitae tortor lobortis malesuada. Nullam mattis ornare ultrices. Vivamus euismod condimentum elit. Vivamus euismod dolor vitae enim suscipit laoreet. Pellentesque metus elit, venenatis nec ante et, tempor egestas magna. Vivamus dolor turpis, fermentum id magna eget, ultricies hendrerit arcu. Ut sagittis lectus id est ultrices, sit amet tempus lacus dictum. Nulla blandit efficitur purus dictum efficitur. Nam id sem lorem. Pellentesque dapibus nisl in porta volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in dictum quam. Nulla finibus sit amet nisi sed mollis.',
  // ];

  // const oldTestmentBooksName = {
  //   id: 1,
  //   categoryName: 'old testment',
  //   data: [
  //     {
  //       id: 1,
  //       bookname: 'Genesis',
  //     },
  //     {
  //       id: 2,
  //       bookname: 'Exodus',
  //     },
  //     {
  //       id: 3,
  //       bookname: 'Leviticus',
  //     },
  //     {
  //       id: 4,
  //       bookname: 'Numbers',
  //     },
  //     {
  //       id: 5,
  //       bookname: 'Deuteronomy',
  //     },
  //     {
  //       id: 6,
  //       bookname: 'Joshua',
  //     },
  //     {
  //       id: 7,
  //       bookname: 'Judges',
  //     },
  //     {
  //       id: 8,
  //       bookname: 'Ruth',
  //     },
  //     {
  //       id: 9,
  //       bookname: '1Samuel',
  //     },
  //     {
  //       id: 10,
  //       bookname: '2Samuel',
  //     },
  //   ],
  // };
  // const newTestmentBooksName = {
  //   id: 2,
  //   categoryName: 'new testment',
  //   data: [
  //     {
  //       id: 1,
  //       bookname: 'Matthew',
  //     },
  //     {
  //       id: 2,
  //       bookname: 'Mark',
  //     },
  //     {
  //       id: 3,
  //       bookname: 'Luke',
  //     },
  //     {
  //       id: 4,
  //       bookname: 'John',
  //     },
  //     {
  //       id: 5,
  //       bookname: 'Acts',
  //     },
  //     {
  //       id: 6,
  //       bookname: 'Romans',
  //     },
  //     {
  //       id: 7,
  //       bookname: '1Corinthians',
  //     },

  //     {
  //       id: 8,
  //       bookname: '2Corinthians',
  //     },
  //     {
  //       id: 9,
  //       bookname: 'Galatians',
  //     },
  //     {
  //       id: 10,
  //       bookname: 'Ephesians',
  //     },
  //   ],
  // };

  // console.log('kamal kya taste hai yar ',
  //     newTestmentBooksName?.data?.map((item,index) => item?.bookname)?.find((item1 ,index) => item1 ==data)
  // )
  // console.log('herrrrrrrrrrrrrrr ',bookArray?.map((item,index) => item?.data[0]?.bookname)?.find((item1,index) => item1))

  return (
    <ImageBackground
      style={{
        width: windowWidth,
        minHeight: windowHeight,
        paddingBottom: moderateScale(40, 0.6),
        // justifyContent: 'center',
        alignItems: 'center',
      }}
      source={require('../Assets/Images/recorded.png')}>
      <CustomText numberOfLines={1} isBold style={styles.heading}>
        {bookname}
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
            // backgroundColor:'red',
            textAlign: 'left',
          }}>
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
            console.log('🚀 ~ BookDescriprtionScreen ~ item:', item);
            return (
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <CustomText
                  isBold
                  style={{
                    fontSize: moderateScale(13, 0.6),
                    color: Color.white,
                    paddingVertical: moderateScale(5, 0.6),
                    width: windowWidth * 0.06,
                    textAlign: 'center',
                    // backgroundColor:'green',
                    paddingHorizontal: moderateScale(3, 0.3),
                  }}>
                  {item?.verse}
                </CustomText>
                <CustomText
                  isBold
                  style={{
                    fontSize: moderateScale(12, 0.6),
                    color: Color.white,
                    paddingVertical: moderateScale(5, 0.6),
                    width: windowWidth * 0.79,
                    // backgroundColor:'red',
                    textAlign: 'left',
                  }}>
                  {item?.text}
                </CustomText>
              </View>

              //   <BookDescription item={item?.text} verseNo={item?.verse}/>
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
    // borderBottomWidth: moderateScale(1, 0.6),
    borderColor: Color.white,
  },
  container: {
    borderRadius: moderateScale(10, 0.6),
    borderColor: Color.white,
    width: windowWidth * 0.92,
    height: windowHeight * 0.85,
    alignItems: 'center',
    borderWidth: moderateScale(1, 0.6),
    padding: moderateScale(9, 0.6),
  },
});

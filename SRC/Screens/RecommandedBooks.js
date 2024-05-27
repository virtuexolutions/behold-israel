import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import Color from '../Assets/Utilities/Color';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import {color, position} from 'native-base/lib/typescript/theme/styled-system';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import NewestBookComponent from '../Components/NewestBookComponent';
import PopularBooks from '../Components/PopularBooks';

const RecommandedBooks = () => {
  const navigation = useNavigation();
  const [saveBooks ,setSaveBooks] = useState(false)
//   const [aboutBook ,setAboutBook] =useState(fa)
  const data = [
    {
      id: 1,
      title: 'lorem ipsum',
      image: require('../Assets/Images/mission2.png'),
      authorName :'lorem ipsum',
      ratings :4,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
      id: 2,
      title: 'lorem ipsum',
      authorName :'lorem ipsum',
      ratings :3,
      image: require('../Assets/Images/mission2.png'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 3,
      title: 'lorem ipsum',
      authorName :'lorem ipsum',
      ratings :2,
      image: require('../Assets/Images/mission2.png'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
      id: 4,
      title: 'lorem ipsum',
      authorName :'lorem ipsum',
      ratings :4,
      image: require('../Assets/Images/mission2.png'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
      id: 5,
      title: 'lorem ipsum',
      authorName :'lorem ipsum',
      ratings :1,
      image: require('../Assets/Images/mission2.png'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 6,
      title: 'lorem ipsum',
      authorName :'lorem ipsum',
      ratings :5,
      image: require('../Assets/Images/mission2.png'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
  ];
  return (
    <ImageBackground
      style={{
        width: windowWidth,
        minHeight: windowHeight,
        paddingBottom: moderateScale(40, 0.6),
      }}
      source={require('../Assets/Images/setting_Bg.png')}>
      <Header
        showLeft={true}
        leftName={'menu'}
        leftType={Feather}
        title={'Recommanded Books'}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={
          {
            // paddingTop: moderateScale(10, 0.6),
          }
        }
        contentContainerStyle={{
          paddingBottom: moderateScale(150, 0.3),
        }}>
        <CustomText
          //   isBold
          style={{
            color: Color.white,
            paddingHorizontal: moderateScale(10, 0.6),
            width: windowWidth * 0.9,
            fontSize: moderateScale(18, 0.6),
            paddingVertical: moderateScale(10, 0.6),
          }}>
          popular books
        </CustomText>

        <FlatList
          horizontal
          scrollEnabled={true}
          data={data}
          renderItem={({item, index}) => {
            return <PopularBooks item={item} />;
          }}
        />
        <CustomText
          //   isBold
          style={{
            color: Color.white,
            paddingHorizontal: moderateScale(10, 0.6),
            width: windowWidth * 0.9,
            fontSize: moderateScale(18, 0.6),
            paddingVertical: moderateScale(10, 0.6),
          }}>
          newest{' '}
        </CustomText>
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          data={data}
          renderItem={({item, index}) => {
            return <NewestBookComponent item={item} saveBooks={saveBooks} setSaveBooks={setSaveBooks}/>;
          }}
        />
      
      </ScrollView>
    </ImageBackground>
  );
};

export default RecommandedBooks;
const styles = ScaledSheet.create({

});

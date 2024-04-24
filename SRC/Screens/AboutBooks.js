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

import {Rating} from 'react-native-ratings';

const AboutBooks = props => {
  const navigation = useNavigation();
  const item = props?.route?.params?.item;
  console.log(
    '🚀 ~ AboutBooks ~ item====================>? params here:',
    item,
  );
  const [saveBooks, setSaveBooks] = useState(false);
  const data = [
    {
      id: 1,
      title: 'lorem ipsum',
      image: require('../Assets/Images/mission2.png'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
      id: 2,
      title: 'lorem ipsum',
      image: require('../Assets/Images/mission2.png'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 3,
      title: 'lorem ipsum',
      image: require('../Assets/Images/mission2.png'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
      id: 4,
      title: 'lorem ipsum',
      image: require('../Assets/Images/mission2.png'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    },
    {
      id: 5,
      title: 'lorem ipsum',
      image: require('../Assets/Images/mission2.png'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 6,
      title: 'lorem ipsum',
      image: require('../Assets/Images/mission2.png'),
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
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
        leftName={'back'}
        leftType={Feather}
        title={'About Book'}
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
        <View style={styles.imgcontainer}>
          <CustomImage
            style={{
              height: '100%',
              width: '100%',
            }}
            source={item?.image}
          />
        </View>
        <View
          style={{
            width: windowWidth,
            // backgroundColor:Color.red,
            alignItems: 'center',
            paddingVertical: moderateScale(5, 0.6),
          }}>
          <CustomText
            //   isBold
            style={{
              color: Color.white,
              paddingHorizontal: moderateScale(10, 0.6),
              // width: windowWidth * 0.9,
              fontSize: moderateScale(18, 0.6),
              paddingTop: moderateScale(15, 0.6),
            }}>
            {item?.title}
          </CustomText>
          <CustomText
            //   isBold
            style={{
              color: Color.white,
              paddingHorizontal: moderateScale(10, 0.6),
              // width: windowWidth * 0.9,
              fontSize: moderateScale(13, 0.6),
              paddingVertical: moderateScale(5, 0.6),
            }}>
            {item?.title}
          </CustomText>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: moderateScale(10, 0.6),
            }}>
            <Rating
              type="custom"
              readonly={false}
              //   ratingBackgroundColor={'transparent'}
              // tintColor={'grey'}
              //   ratingColor={'#F5C443'}
              startingValue={2}
              ratingCount={5}
              imageSize={moderateScale(13, 0.3)}
              style={{
                width: windowWidth * 0.24,
              }}
              ratingBackgroundColor={'transparent'}
            />
            <CustomText
              //   isBold
              style={{
                color: Color.white,
                paddingHorizontal: moderateScale(10, 0.6),
                // width: windowWidth * 0.9,
                fontSize: moderateScale(14, 0.6),
                paddingVertical: moderateScale(10, 0.6),
              }}>
              2.5
            </CustomText>
          </View>
          <CustomText
            //   isBold
            style={{
              color: Color.white,
              lineHeight: moderateScale(18, 0.6),
              paddingHorizontal: moderateScale(10, 0.6),
              // width: windowWidth * 0.9,
              fontSize: moderateScale(12, 0.6),
              paddingVertical: moderateScale(10, 0.6),
            }}>
            {item?.description}
          </CustomText>
        </View>
        <View
          style={{
            marginHorizontal: moderateScale(18, 0.3),
            // backgroundColor: Color.white,
            width: windowWidth * 0.9,
            flexDirection: 'row',
            justifyContent: 'space-between',
            //   borderRadius: moderateScale(10, 0.3),
          }}>
          <CustomButton
            isBold
            height={windowHeight * 0.06}
            width={windowWidth * 0.4}
            text={'preview'}
            onPress={() => {}}
            marginTop={moderateScale(20, 0.3)}
            bgColor={'#FFC928'}
            borderRadius={moderateScale(25, 0.6)}
            textColor={'black'}
            fontSize={moderateScale(13, 0.6)}
          />
          <CustomButton
            isBold
            height={windowHeight * 0.06}
            width={windowWidth * 0.4}
            text={'Details'}
            onPress={() => {}}
            marginTop={moderateScale(20, 0.3)}
            bgColor={'#FFC928'}
            borderRadius={moderateScale(25, 0.6)}
            textColor={'black'}
            fontSize={moderateScale(13, 0.6)}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AboutBooks;
const styles = ScaledSheet.create({
  imgcontainer: {
    height: windowHeight * 0.35,
    width: windowWidth,
    // backgroundColor :'red'
  },
});

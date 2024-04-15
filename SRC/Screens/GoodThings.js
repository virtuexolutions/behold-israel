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
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from '../Assets/Utilities/Color';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import {color, position} from 'native-base/lib/typescript/theme/styled-system';
import Header from '../Components/Header';
import Feather from 'react-native-vector-icons/Feather';
import CustomImage from '../Components/CustomImage';

const GoodThings = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [selectedItem, setSelectedItem] = useState([]);
  console.log('🚀 ~ GoodThings ~ selectedItem:', selectedItem);
  const data = [
    {
      id: 1,
      name: 'marilyn T.jackson',
      desc: 'Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum has been the industrys sta',
      // image: require('../Assets/Images/dummyUser.png'),
    },
    {
      id: 2,
      name: 'marilyn T.jackson',
      desc: 'Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum has been the industrys sta',
      // image: require('../Assets/Images/dummyUser.png'),
    },
    {
      id: 3,
      name: 'marilyn T.jackson',
      desc: 'Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum has been the industrys sta',
      // image: require('../Assets/Images/dummyUser.png'),
    },
    {
      id: 4,
      name: 'marilyn T.jackson',
      desc: 'Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum has been the industrys sta',
      // image: require('../Assets/Images/dummyUser.png'),
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
        // headerColor={'transparent'}
        showLeft={true}
        leftName={'menu'}
        leftType={Feather}
        title={'Good Things'}
        // titleStyle={{}}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        // style={}
        // contentContainerStyle={}
      >
        <CustomText
          style={{
            marginHorizontal: moderateScale(15, 0.3),
            color: Color.white,
            textAlign: 'center',
            fontSize: moderateScale(12, 0.6),
          }}>
          {
            'Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum has been the industrys sta'
          }
        </CustomText>

        {data?.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedItem(item);
              }}
              style={{
                backgroundColor:
                  selectedItem?.id == item?.id ? Color.white : 'transparent',
                marginVertical: moderateScale(10, 0.6),
                width: windowWidth * 0.95,
                marginHorizontal: moderateScale(10, 0.3),
                height: windowHeight * 0.1,
                borderRadius: moderateScale(10, 0.6),
                borderColor: Color.white,
                borderWidth: 1,
              }}>
              <CustomText
                isBold
                style={{
                  paddingHorizontal: moderateScale(10, 0.6),
                  paddingTop: moderateScale(5, 0.6),
                  fontSize: moderateScale(15, 0.6),
                  color:
                    selectedItem?.id == item?.id ? Color.black : Color.white,
                }}>
                {' '}
                {item?.name}
              </CustomText>
              <CustomText
                style={{
                  paddingVertical: moderateScale(5, 0.3),
                  marginHorizontal: moderateScale(15, 0.3),
                  color:
                    selectedItem?.id == item?.id ? Color.black : Color.white,
                  // width : windowWidth ,
                  textAlign: 'justify',
                  fontSize: moderateScale(12, 0.6),
                }}>
                {item?.desc}
              </CustomText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
};

export default GoodThings;
const styles = ScaledSheet.create({
  back: {
    width: moderateScale(35, 0.6),
    height: moderateScale(35, 0.6),
    borderRadius: moderateScale(25, 0.6),
    borderWidth: 0.5,
    backgroundColor: Color.white,
    borderColor: '#FFFFFF',
    position: 'absolute',
    left: moderateScale(10, 0.6),
    top: moderateScale(10, 0.6),
    zIndex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

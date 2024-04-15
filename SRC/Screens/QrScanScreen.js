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
import QrScanComponent from '../Components/QrScanComponent';

const QrScanScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [selectedItem, setSelectedItem] = useState([]);
  console.log('🚀 ~ GoodThings ~ selectedItem:', selectedItem);
  const data = [
    {
      id: 1,
      image: require('../Assets/Images/dummyUser.png'),
    },
    {
      id: 2,
      image: require('../Assets/Images/dummyUser.png'),
    },
    {
      id: 3,
      image: require('../Assets/Images/dummyUser.png'),
    },
    {
      id: 4,
      image: require('../Assets/Images/dummyUser.png'),
    },
  ];

  return (
    <ImageBackground
      style={{
        width: windowWidth,
        height: windowHeight,
        paddingBottom: moderateScale(40, 0.6),
      }}
      source={require('../Assets/Images/setting_Bg.png')}>
      <Header
        // headerColor={'transparent'}
        showLeft={true}
        leftName={'menu'}
        leftType={Feather}
        title={true}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <QrScanComponent />

        <View
          style={{
            marginVertical :moderateScale(10,.6),
            marginHorizontal: moderateScale(20, 0.6),
            width: windowWidth * 0.87,
            borderWidth: 0.4,
            borderColor: Color.red,
          }}></View>
        <QrScanComponent />
      </ScrollView>
    </ImageBackground>
  );
};

export default QrScanScreen;
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

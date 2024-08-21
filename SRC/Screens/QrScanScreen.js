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
import {border, color, position} from 'native-base/lib/typescript/theme/styled-system';
import Header from '../Components/Header';
import Feather from 'react-native-vector-icons/Feather';
import CustomImage from '../Components/CustomImage';
import QrScanComponent from '../Components/QrScanComponent';

const QrScanScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [selectedItem, setSelectedItem] = useState([]);
  console.log('🚀 ~ GoodThings ~ selectedItem:', selectedItem);
  // const data = [
  //   {
  //     id: 1,
  //     image: require('../Assets/Images/dummyUser.png'),
  //   },
  //   {
  //     id: 2,
  //     image: require('../Assets/Images/dummyUser.png'),
  //   },
  //   {
  //     id: 3,
  //     image: require('../Assets/Images/dummyUser.png'),
  //   },
  //   {
  //     id: 4,
  //     image: require('../Assets/Images/dummyUser.png'),
  //   },
  // ];

  const resources = [
    {
      id: 1,
      title: "Explore Our Online Hub",
      description: "Want to explore more about our community and resources? Scan this QR code and visit our website, where you’ll find teachings, updates, and opportunities to have strength in your faith."
    },
    {
      id: 2,
      title: "Spiritual Growth at Fingertips",
      description: "Ready to start your spiritual journey? Use this QR code to synchronize with our app and access Christian teachings, live sermons, and more - just a click away."
    },
    {
      id: 3,
      title: "Share Your Generosity",
      description: "Become a reason for transforming lives with your generosity. Scan this QR code to reach our donation form and support us in our mission to support people and share the message of hope."
    }
  ];
  
  return (
    <ImageBackground
      style={{
        width: windowWidth,
        height: windowHeight,
        paddingBottom: moderateScale(20, 0.6),
      }}
      source={require('../Assets/Images/setting_Bg.png')}>
      <Header
        // headerColor={'transparent'}
        showLeft={true}
        leftName={'menu'}
        leftType={Feather}
        title={'Qr scan '}
      />
      <ScrollView showsVerticalScrollIndicator={false}
     
      >
 {resources?.map((item , index) => <QrScanComponent title={item.title} description={item.description} />)}
{/* 
        <View
          style={styles.border}></View>
        <QrScanComponent /> */}
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
  border:{
    marginVertical :moderateScale(10,.6),
    marginHorizontal: moderateScale(20, 0.6),
    width: windowWidth * 0.87,
    borderWidth: 0.4,
    borderColor: Color.red,
    // backgroundColor :'red'
  }
});

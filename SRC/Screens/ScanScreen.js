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

const ScanScreen = () => {
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
        minHeight: windowHeight,
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: windowHeight * 0.1,
        }}>
        <FlatList
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: moderateScale(10, 0.3),
          }}
          contentContainerStyle={{
            paddingHorizontal: moderateScale(8, 0.3),
          }}
          data={data}
          horizontal
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  marginHorizontal: moderateScale(10, 0.6),
                  // backgroundColor :'red',
                  height: windowHeight * 0.7,
                  width: windowWidth * 0.8,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    height: windowHeight * 0.15,
                    width: windowHeight * 0.15,
                    overflow: 'hidden',
                    borderColor: 'red',
                    borderWidth: moderateScale(1, 0.6),
                    borderRadius: moderateScale((windowHeight * 0.15) / 2),
                    marginHorizontal: moderateScale(25, 0.3),
                  }}>
                  <CustomImage
                    style={{
                      overflow: 'hidden',

                      height: '100%',
                      width: '100%',
                    }}
                    source={item?.image}
                  />
                </View>
                <View
                  style={{
                    height: windowHeight * 0.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <CustomText
                    isBold
                    style={{
                      color: Color.white,
                      width: windowWidth,
                      textAlign: 'center',
                      fontSize: moderateScale(25, 0.6),
                      paddingVertical: moderateScale(10, 0.6),
                    }}>
                    Donna W.wade
                  </CustomText>
                  <CustomText
                    style={{
                      // paddingVertical: moderateScale(10, 0.3),
                      marginHorizontal: moderateScale(25, 0.3),
                      color: Color.white,
                      width: windowWidth * 0.7,
                      textAlign: 'justify',
                      fontSize: moderateScale(12, 0.6),
                    }}>
                    {
                      'Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum has been the industrys sta'
                    }
                  </CustomText>
                  <View
                    style={{
                      height: windowHeight * 0.25,
                      width: windowHeight * 0.25,
                      overflow: 'hidden',
                      //   borderColor :'red',
                      //   borderWidth: moderateScale(1, 0.6),
                      borderRadius: moderateScale(10, 0.6),
                      marginVertical: moderateScale(20, 0.6),

                      //   marginHorizontal: moderateScale(25, 0.3),
                    }}>
                    <CustomImage
                      style={{
                        overflow: 'hidden',

                        height: '100%',
                        width: '100%',
                      }}
                      source={require('../Assets/Images/scan.png')}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default ScanScreen;
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

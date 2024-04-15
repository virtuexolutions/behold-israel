import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Hidden, Icon} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import Header from '../Components/Header';
import Feather from 'react-native-vector-icons/Feather';
import {color, position} from 'native-base/lib/typescript/theme/styled-system';
import DonationComponent from '../Components/DonationComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Color from '../Assets/Utilities/Color';

const Donations = () => {
  const [donationCount ,setDonationCount] =useState(10)
  console.log("🚀 ~ Donations ~ donationCount:", donationCount)
  const data = [
    {
      id: 1,
      image: require('../Assets/Images/donationn.jpg'),
      title: 'Donation',
    },
    {
      id: 2,
      image: require('../Assets/Images/donationn.jpg'),
      title: 'Donation',
    },
    {
      id: 3,
      image: require('../Assets/Images/donationn.jpg'),
      title: 'Donation',
    },
    {
      id: 4,
      image: require('../Assets/Images/donationn.jpg'),
      title: 'Donation',
    },
  ];
  return (
    <ImageBackground
      resizeMode="cover"
      width={windowWidth}
      minHeight={windowHeight}
      source={require('../Assets/Images/setting_Bg.png')}>
      <ScrollView>
        <Header
          // headerColor={'transparent'}
          showLeft={true}
          leftName={'menu'}
          leftType={Feather}
          title={'Donation'}
          // title={}
        />
        <CustomText
          style={{
            width: windowWidth * 0.9,
            paddingBottom: moderateScale(15, 0.6),
            marginHorizontal: moderateScale(25, 0.3),
            textAlign: 'center',
            // backgroundColor: 'red',
            color: 'white',
            fontSize: moderateScale(10, 0.2),
          }}>
          estándar de las industrias desde el año 1500, cuando un impresor
          desconocido usó una galería de textos y los mezcló
        </CustomText>

        <View style={styles.boxConatiner}>
          {/* <FlatList
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            scrollEnabled={true}
            decelerationRate={0.5}
            contentContainerStyle={{
              paddingTop: moderateScale(10, 0.6),
            }}
            data={data}
            renderItem={({item, index}) => {
              return (
               <DonationComponent item={item}/>
              );
            }}
          /> */}
          {data?.map((item, index) => {
            return <DonationComponent item={item} />;
          })}
        </View>
        <View style={{height: windowHeight * 0.65}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={{
              height: windowHeight * 0.16,
              width: windowWidth * 0.93,
              alignSelf: 'center',
              marginTop: moderateScale(35, 0.3),
            }}>
            <ImageBackground
              style={{
                borderRadius: moderateScale(17, 0.3),
                height: '100%',
                width: '100%',
                overflow: 'hidden',
              }}
              source={require('../Assets/Images/deno-2.jpg')}>
              <CustomText
                numberOfLines={2}
                // isBold
                style={{
                  backgroundColor: 'white',
                  opacity: 0.6,
                  position: 'absolute',
                  left: 20,
                  bottom: 20,
                  fontSize: moderateScale(10, 0.6),
                  color: 'black',
                  paddingVertical: moderateScale(5, 0.3),
                  width: '89%',
                }}>
                sahiasua dfiuafsdiasdf uiasdfuasdfiusdfui iaui uisd asdfuasdf u
                sdiauasdif uasdisduaf isdiafuidusf udsfau asd fu asdf iuasdf
              </CustomText>
            </ImageBackground>
          </TouchableOpacity>

          <View
            style={{
              marginTop: moderateScale(15, 0.2),
              height: windowHeight * 0.1,
              borderRadius: moderateScale(12, 0.2),
              opacity: 0.9,
              width: windowWidth * 0.93,
              alignSelf: 'center',
              backgroundColor: 'grey',
              paddingHorizontal: moderateScale(18, 0.3),
              paddingVertical: moderateScale(12, 0.3),
              // marginVertical : moderateScale(10,0.3),
            }}>
            <View
              style={{
                width: windowWidth * 0.82,
                borderRadius: moderateScale(30, 0.3),
                backgroundColor: 'white',
                opacity: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

                paddingHorizontal: moderateScale(10, 0.3),
                paddingVertical: moderateScale(5, 0.2),
              }}>
              <TouchableOpacity
                style={{
                  width: windowWidth * 0.12,
                  height: windowWidth * 0.12,
                  borderRadius: (windowWidth * 0.12) / 2,
                  backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  style={{
                    textAlign: 'center',
                  }}
                  name="minus"
                  as={FontAwesome}
                  size={moderateScale(16, 0.6)}
                  color={'#fff'}
                />
              </TouchableOpacity>
              <CustomText
                isBold
                style={{
                  fontSize: moderateScale(20, 0.6),
                  // color :Color.white
                }}>
                  {/* {donationCount} */}
                $10
              </CustomText>
              <TouchableOpacity onPress={() =>{
                
                // prev => [...prev, prev + 10]
                // setDonationCount(prev => [...prev, prev + 10])
              }} 
                style={{
                  width: windowWidth * 0.12,
                  height: windowWidth * 0.12,
                  borderRadius: (windowWidth * 0.12) / 2,
                  backgroundColor: 'red',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  style={{
                    textAlign: 'center',
                  }}
                  name="plus"
                  as={FontAwesome}
                  size={moderateScale(16, 0.6)}
                  color={'#fff'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.donationInputBox}>
            <CustomText
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: moderateScale(21, 0.2),
              }}>
              Card Information
            </CustomText>
            <View style={styles.input}>
              <CustomText>Enter your Donation</CustomText>
            </View>
          </View>
          <CustomButton
            isBold
            onPress={() => {
              // checkOut();
            }}
            text={'Donate Now'}
            textColor={Color.white}
            width={windowWidth * 0.8}
            height={windowHeight * 0.07}
            fontSize={moderateScale(15, 0.6)}
            // marginBottom={moderateScale(10,.3)}
            marginTop={moderateScale(20, 0.3)}
            bgColor={Color.theme2}
            borderRadius={moderateScale(30, 0.3)}
            // isGradient
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Donations;

const styles = StyleSheet.create({
  boxConatiner: {
    width: windowWidth,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 18,
    alignItems: 'center',
    height: windowHeight * 0.28,
    paddingHorizontal: moderateScale(10, 0.2),
    // backgroundColor :'red'
  },
  boxConatiner2: {
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    height: windowHeight * 0.5,
    // paddingHorizontal:moderateScale(10,0.2)
  },
  menuButton: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 10,
    top: 10,
    borderRadius: (windowWidth * 0.1) / 2,
  },
  input: {
    width: windowWidth * 0.82,
    borderRadius: moderateScale(30, 0.3),
    backgroundColor: 'white',
    opacity: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: moderateScale(10, 0.3),
    paddingVertical: moderateScale(15, 0.2),
  },
  button: {
    backgroundColor: 'red',
    width: windowWidth * 0.75,
    height: windowHeight * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(22, 0.2),
  },
  donationInputBox: {
    marginTop: moderateScale(11, 0.2),
    height: windowHeight * 0.18,
    borderRadius: moderateScale(17, 0.2),
    opacity: 0.9,
    width: windowWidth * 0.93,
    alignSelf: 'center',
    backgroundColor: 'grey',
    gap: 20,
    paddingHorizontal: moderateScale(18, 0.3),
    paddingVertical: moderateScale(12, 0.3),
    // marginVertical : moderateScale(10,0.3),
  },
});

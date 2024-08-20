import {View, Text, StyleSheet, FlatList, ImageBackground} from 'react-native';
import React from 'react';
import ScreenBoiler from '../Components/ScreenBoiler';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import {moderateScale} from 'react-native-size-matters';
import TeamCardComponent from '../Components/teamCardComponent';
import Header from '../Components/Header';
import Color from '../Assets/Utilities/Color';

const Team = () => {
  const items = [
    {
      id: 1,
      name: 'Chinwe Nwabude',
      subName: 'Lorem Ipsum Text',
      imageUrl: require('../Assets/Images/t1.jpg'),
    },
    {
      id: 2,
      name: 'Dr. Eucharia Nnawulezi',
      subName: 'Lorem Ipsum Text',
      imageUrl: require('../Assets/Images/t2.png'),
    },
    {
      id: 3,
      name: 'Dr. Lorreta Oguonu',
      subName: 'Lorem Ipsum Text',
      imageUrl: require('../Assets/Images/t3.jpg'),
    },
    {
      id: 4,
      name: 'OGE NWITOR HEAD OF INTERCESSORY MINISTRY',
      subName: 'Lorem Ipsum Text',
      imageUrl: require('../Assets/Images/t4.jpg'),
    },
    {
      id: 5,
      name: 'Tommy Chuke',
      subName: 'Lorem Ipsum Text',
      imageUrl: require('../Assets/Images/t5.jpg'),
    },
    {
      id: 6,
      name: 'UCHE ENENWALI ATTORNEY/BOARD SECRETARY',
      subName: 'Lorem Ipsum Text',
      imageUrl: require('../Assets/Images/t6.jpg'),
    },
    {
      id: 7,
      name: 'STEWARD, DEPUTY CHIEF',
      subName: 'Lorem Ipsum Text',
      imageUrl: require('../Assets/Images/t7.png'),
    },
    {
      id: 8,
      name: 'Dr. Peter Oraekwe Head of Media and Security',
      subName: 'Lorem Ipsum Text',
      imageUrl: require('../Assets/Images/t8.jpg'),
    },
    {
      id: 9,
      name: 'Rev. Sr. Maria Paracleta Anekwe Spiritual Counselor',
      subName: 'Lorem Ipsum Text',
      imageUrl: require('../Assets/Images/t9.png'),
    },
    {
      id: 10,
      name: 'Dr Lady Schola Ogomaka P.R.O and Publicity Secretary',
      subName: 'Lorem Ipsum Text',
      imageUrl: require('../Assets/Images/t10.jpg'),
    },
    {
      id: 11,
      name: 'TONY ONUAKU PA TO FR. EBUBE MUONSO',
      subName: 'Lorem Ipsum Text',
      imageUrl: require('../Assets/Images/t11.png'),
    },
  ];
  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      <ImageBackground
        resizeMode="cover"
        source={require('../Assets/Images/setting_Bg.png')}
        style={styles.mainScreen}>
        <Header
          title={'Our Team'}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
        <View
          style={{
            width: windowWidth,
            height: windowHeight * 0.84,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
          showsVerticalScrollIndicator={false}
            data={items}
            contentContainerStyle={{
              paddingBottom: moderateScale(20,.6)
            }}
            keyExtractor={item => {
              return item.id}
            }
            renderItem={({item}) => {
              return <TeamCardComponent item={item} />}
            }
          />
        </View>
      </ImageBackground>
    </ScreenBoiler>
  );
};

export default Team;

const styles = StyleSheet.create({
  mainScreen: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.themeDarkGray,
    // paddingHorizontal:moderateScale(17,0.3)
  },
});

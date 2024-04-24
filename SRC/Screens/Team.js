import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import ScreenBoiler from '../Components/ScreenBoiler'
import { windowHeight, windowWidth } from '../Utillity/utils'
import CustomImage from '../Components/CustomImage'
import CustomText from '../Components/CustomText'
import { moderateScale } from 'react-native-size-matters'
import TeamCardComponent from '../Components/teamCardComponent'
import Header from '../Components/Header'
import Color from '../Assets/Utilities/Color'

const Team = () => {
   
  const items = [
        {
          id: 1,
          name: "Ya'sub David",
          subName: "Lorem Ipsum Text",
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjU1VoqEcWBAdM9IstqejHlMsXzmWU8SphA&s"
        },
        {
          id: 2,
          name: "Steve John",
          subName: "Lorem Ipsum Text",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_W_zEqzAEAQmQxuTFd8VlLhDOpRynLIiKbx7Bra7ybg&s"
                },
        {
          id: 3,
          name: "Benjamin Joseph",
          subName: "Lorem Ipsum Text",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFwtA7faay6C0pyHHWJPUcLFIVkuhOxi_8odcO1ImjX_U5PDpTxzxm9nyYTUwPjVwNBc&usqp=CAU"},
        {
          id: 4,
          name: "David Franklin",
          subName: "Lorem Ipsum Text",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZ7BZGz5lgc3dtni7cUQyegaMBC7LIA0j3N7FEWvBSGvF9bc_SltBiWEGOC2Jv-m-T4w&usqp=CAU"
        },
        {
          id: 5,
          name: "Tara Atronott",
          subName: "Lorem Ipsum Text",
                  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpEDVjjDChtMTD5Tur8mPtSOho5-69uqFeQ&s"   }
      ];
  return(
    <ScreenBoiler
    statusBarBackgroundColor={'white'}
    statusBarContentStyle={'dark-content'}
    >
    
    <ImageBackground 
    resizeMode='cover'
       source={require('../Assets/Images/setting_Bg.png')}
    style={styles.mainScreen}>
        <Header title={'Our Team'}
      onPress={() =>{
        navigation.toggleDrawer();
      }}
      
      />
      <View style={{width: windowWidth , height: windowHeight * 0.84, justifyContent:'center', alignItems:'center'}}>

        <FlatList data={items} 
        keyExtractor={item =>item.id} 
        renderItem={({item})=> <TeamCardComponent item={item}/>}/>      
        </View>
    </ImageBackground>

    </ScreenBoiler>
  )
}

export default Team;

const styles= StyleSheet.create({
    mainScreen:{
        width: windowWidth,
        height: windowHeight,
        backgroundColor:Color.themeDarkGray,
        // paddingHorizontal:moderateScale(17,0.3)
    }
})
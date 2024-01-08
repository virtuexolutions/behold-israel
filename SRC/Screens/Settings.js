import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import CustomImage from '../Components/CustomImage';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { moderateScale } from 'react-native-size-matters';
import { windowHeight, windowWidth } from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import { Icon } from 'native-base';

const options=[
    { id:"o1", name: "Profile", next:">"},
    { id:"o2", name: "Privacy Policy", next:">"},
    { id:"o3", name: "Donation History", next:">"},
    { id:"o4", name: "Terms & Condition", next:">"},
    { id:"o5", name: "About", next:">"},
    { id:"o6", name: "Secuirty", next:">"},
    { id:"o7", name: "Account", next:">"},
    { id:"o8", name: "Help", next:">"},
    { id:"o9", name: "Logout", next:">"},
]

const Settings = () => {
  return (
    <ImageBackground 
    resizeMode='cover'
    style={styles.mainScreen}
    source={require("../Assets/Images/setting_Bg.png")}>
<View style={styles.header}>

<View style ={styles.imageContainer}>
<CustomImage
              resizeMode="contain"
              source={require('../Assets/Images/dummyUser1.png')}
              style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'blue',
                }}
                />
</View>
<View style={StyleSheet.userInfo}>
                <CustomText style={styles.txt5}>DONNA W. WADE</CustomText>
                <CustomText style={styles.txt6} >Lorem ipsum dolor sit amet,
                 consectetur adipiscing elit.Sed magna dolor, efficitur pulvinar placerat sed, auctor vestibulum elit.</CustomText>
              
            
</View>         

</View>

<View style={styles.optionsContainer}>
    {
        options.map((opt, index)=>
    <View key={index} style={[styles.option, opt.name === "Logout" && styles.logout ]}>
         <CustomText style={{color: "#FFFF"}}>{opt.name}</CustomText>  
         {opt.name === "Logout" ? <Icon as={Ionicons} name='exit-outline' size={5} color={'#FFFF'}/> :
         <CustomText style={{color: "#FFFF"}}>{opt.next}</CustomText>  
         
         }

    </View>
        
        )
    }

</View>

    </ImageBackground>
  )
}

export default Settings;

const styles= StyleSheet.create({
    mainScreen:{
        flex:1
    },
    imageContainer:{
        width: windowWidth * 0.3, 
        height: windowWidth * 0.3,
        borderColor: "red", 
        borderRadius: windowWidth * 0.3 / 2,
        borderWidth: 2,
        overflow: "hidden"
    },
    image:{
        // borderRadius:100,
        width: '100%',
        height:200
    },
    header:{
        marginTop:12,
        flexDirection: 'row',
        gap: 12
    },
    userInfo:{
        marginRight: 24
    },
    txt5:{
        fontSize: 30,
        fontWeight: 'bold',
        color: "#FFFF",
        

    },
    txt6:{
        fontSize: 12,
        textAlign:'left',
        width: windowWidth * 0.6,     // fontWeight: 'bold',
        color: "#FFFF",

    },
    option:{
        paddingHorizontal:8,
        paddingVertical:5,
        marginVertical: 12,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor: "#FFFF",
        borderBottomWidth:1
    },
    logout:{
        borderBottomWidth:0,
    },
    optionsContainer:{
        paddingVertical:12,
        paddingHorizontal:13,
        marginHorizontal: 14,
        marginVertical:15,
        borderBottomWidth:0.5,
        borderTopWidth:0.5,
        borderWidth: 2,
        borderBottomColor:"#0000003D",
        borderColor: '#FFFF',
        borderRadius: 12,
    }
});
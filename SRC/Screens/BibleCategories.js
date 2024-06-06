import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {moderateScale, ScaledSheet} from 'react-native-size-matters';

import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import CustomImage from '../Components/CustomImage';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
let cardContents=[
    {
        id: 'c1',
        image: require('../Assets/Images/old_tastement_img.png'),
        heading:'Old Tetstament',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus nisi, tincidunt eget egestas ac, lobortis sed nisi. Nunc vestibulum est eget tristique commodo. Sed nisl lacus,',
        subtitle:'Lorem ipsum dolor sit amet'
    },
    {
        id: 'c2',
        image: require('../Assets/Images/old_tastement_img.png'),
        heading:'New Tetstament',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus nisi, tincidunt eget egestas ac, lobortis sed nisi. Nunc vestibulum est eget tristique commodo. Sed nisl lacus,',
        subtitle:'Lorem ipsum dolor sit amet'
    },
  ];

function Card({image, heading, description, subtitle ,onPress ,setSelectedTestment}){
    const navigation = useNavigation();
    return(

        <TouchableOpacity onPress={() => {
            // setSelectedTestment(heading)
            navigation.navigate('TestmentsScreeen',{selectedTestment :heading})
            console.log('helllooooooooooooooooooo========>')
        }}>

        <ImageBackground source={image}
        resizeMode='contain'
        style={{width:'100%', height: 200,
         textAlign:'center',
         justifyContent:'center',
         alignItems:'center',
         // flex
      marginLeft:12,
      marginRight:19
        //  paddingHorizontal:'25'
     }} >

            
             <CustomText style={styles.txt5}>{heading}</CustomText>
             <CustomText style={styles.txt6}>{description}</CustomText>
             <CustomText style={styles.txt7}>
             {subtitle}
             </CustomText>
            
         </ImageBackground>
        </TouchableOpacity>
    );
}


const BibleCategories = () => {
    const navigation = useNavigation()
    const [selectedTestment ,setSelectedTestment] =useState('')
    // console.log("🚀 ~ BibleCategories ~===========>selectedT/estment:", selectedTestment)
  
    return (
        <ScrollView>
{/* <CustomImage source={require('../Assets/Images/Home_Bg_image.png')}></CustomImage> */}
    <ImageBackground
    source={require('../Assets/Images/Home_Bg_image.png')}
    resizeMode='cover'
    style={{
        // padding:
        width:windowWidth ,
        minHeight:windowHeight,
    gap:23,
    // justifyContent: 'space-between'
}}>
           <View
        style={{
          height: moderateScale(30, 0.3),
          width: moderateScale(30, 0.3),
          borderRadius: moderateScale(5, 0.3),
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex:1,
          top:28,
          left:fromTabs ? 17 : 7,
        }}>
           <Icon
          style={{
            textAlign:'center',
            height :windowHeight*0.05,
            width:windowHeight*0.05,
            borderRadius :windowHeight*0.05 /2,
            backgroundColor :fromTabs ?  Color.white : 'transparent',
            paddingTop: moderateScale(6.6),

            // marginTop :moderateScale
          }}
          name={fromTabs ? 'menu': 'arrow-back'}
          as={fromTabs ? Feather : Ionicons}
          size={moderateScale(25, 0.3)}
          color={fromTabs ? Color.black : Color.white}
          onPress={() => {
              if(fromTabs){
            navigation.toggleDrawer();
          }
          else{
              navigation.goBack();
          }
            // navigationN.dispatch(DrawerActions.toggleDrawer())
            
          }}
          />
        </View>
<View>
    <ImageBackground
    
    style={{
        width: windowWidth,
        height: 200,
        paddingLeft:moderateScale(40,0.3),
        justifyContent:'center',
        opacity:0.85,
        elevation:6,
        zIndex:0,

    }}
    source={require('../Assets/Images/holy-bible-wooden.jpg')}
    >
        <CustomText style={[styles.txt5, {
            fontSize: moderateScale(15, 15), textAlign:'left', }]}>BIBLE</CustomText>
        <CustomText style={[styles.txt6,{textAlign:'left'}]}>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Sed magna dolor, efficitur pulvinar placerat sed, auctor vestibulum elit.</CustomText>
    </ImageBackground>

    
    <LinearGradient
       start={{x: 0, y: 0.05}}
       end={{x: 0, y: 0.75}}
       colors={['#ffffff00', '#141414']}
    style={{width:windowWidth , height:windowHeight * 0.1,
    // borderTopLeftRadius:moderateScale(6,0.2),
    // borderTopRightRadius:moderateScale(6,0.2),
    opacity:0.85,
    // shadowOffset: {height: 2, width: 0},
    // shadowOpacity: 1,
    // shadowRadius: 4,
    zIndex:1,
    position:'absolute', bottom:0}}></LinearGradient>
    

</View>


{
    cardContents.map((content,id)=>{
        return(
            <Card
            setSelectedTestment={setSelectedTestment}
            key={content.id}
            image={content.image}
            heading={content.heading}
            description={content.description}
            subtitle={content.subtitle}
            />)
        })
}
       
      </ImageBackground>
        </ScrollView>
  )
}

export default BibleCategories;

const styles = StyleSheet.create({
    category:{
        // marginHorizontal:10,
        width:"100%",
        height:200
    }, 
    txt5: {
        fontFamily:'Montserrat',
        textAlign:'center',
        fontSize: moderateScale(15, 0.6),
       color:'white',
       fontWeight:'bold'
      },
    txt6: {
        width:'50%',
        paddingHorizontal:'12',
        textAlign:'center',
        fontSize: moderateScale(7,),
       color:'white',
    //    overflow: 'hidden'
      },
    txt7: {
        textAlign:'center',
        fontSize: moderateScale(10, 0.1),
       color:'white'
      },
      infoText:{
        paddingHorizontal:'15',
        // position: 'absolute', justifyContent: 'center', alignItems: 'center' 
      }
})
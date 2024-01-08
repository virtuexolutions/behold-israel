import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import { moderateScale } from 'react-native-size-matters'
import CustomText from './CustomText'
import CustomImage from './CustomImage'

const LectureCards = ({item}) => {
//   console.log("🚀 ~ file: LectureCards.js:5 ~ LectureCards ~ item:", item)
  return (
    <View style={{
        flexDirection:'row',
        width:windowWidth*0.6
       }}>
        <View style={styles.imageView}>
            <CustomImage
            style={styles.image}source={item?.image}/>
        </View>
        <View style={styles.textView}>
        <CustomText
    numberOfLines={2}
    isBold
    style={styles.text1}>
        {item?.title}
</CustomText>
<CustomText
    numberOfLines={2}
    isBold
    style={[styles.text1 ,{
        fontSize: moderateScale(12, 0.6),
         }]}>
       {item?.descriptoin}
</CustomText>
<CustomText
    numberOfLines={2}
    isBold
    style={[styles.text1 ,{
        fontSize: moderateScale(11, 0.6),
    }]}>
       {item?.views}
</CustomText>
        </View>
       </View>
  )
}

export default LectureCards

const styles = StyleSheet.create({
    imageView:{
        height:windowHeight*0.15,
        width:windowWidth*0.38,
        // backgroundColor:'green',
        marginVertical:moderateScale(10,.3),
        borderRadius:moderateScale(15,.6),
        overFlow:'hidden',
        
    },
    image:{
        height:'100%',
        width:'100%',
        borderRadius:moderateScale(15,.6),
        overFlow:'hidden',
    },
    textView:{
        justifyContent:'center',
        width:windowWidth*0.4,
        // backgroundColor:'red',
    },
    text1:{
        fontSize: moderateScale(17, 0.6),
        color: Color.white,
        paddingHorizontal:moderateScale(10,.6),

    },
})
import {View, StyleSheet, Image} from 'react-native';
import CustomImage from './CustomImage';
import CustomText from './CustomText';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import{ ImageBlurShadow} from 'react-native-image-blur-shadow';
import Color from '../Assets/Utilities/Color';
const TeamCardComponent = ({item}) => {
  return (
    <View style={styles.card}>
     <View style={styles.imageContainer}>

        <Image
          resizeMode={'cover'}
          source={{uri: item.imageUrl}}
          style={{width:'100%', height:'100%'}}   
          />
          </View>

      <View style={styles.cardHeadings}>
        <CustomText
          style={{fontSize: 25, width: windowWidth * 0.4, color:'#decece'}}
          numberOfLines={2}
          isBold
          
          >
          {item.name}
        </CustomText>
        <CustomText numberOfLines={2} isBold style={{color: '#a39090'}}>
          {item.subName}
        </CustomText>
      </View>
    </View>
  );
};

export default TeamCardComponent;
const styles = StyleSheet.create({
  card: {
    width: windowWidth * 0.87,
    height: windowHeight * 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#332828",
    gap: 20,
    paddingHorizontal: moderateScale(33, 0.2),
    // elevation:4,
 
    // borderWidth:1,
    borderRadius: moderateScale(10, 0.2),
    // borderColor: 'grey',
    // shadowColor: 'black',
    // shadowOpacity: 0.25,
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 5,
    marginTop: 12,
  },
  imageContainer: {
    width: '40%',
    height: '90%',

    backgroundColor:'white',
    overflow: 'hidden',
    shadowColor: "#dbcccc",
    shadowOffset: {
      width: -4,
      height: 11,
    },
    shadowOpacity: 0.75,
    shadowRadius: 15.19,
    
    elevation: 13,
    borderRadius: moderateScale(18, 0.2)
  },
  cardHeadings: {
    flexDirection: 'column',
    gap: 19,
  },
});

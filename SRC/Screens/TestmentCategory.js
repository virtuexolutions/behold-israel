import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';

import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import CustomImage from '../Components/CustomImage';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

let cardContents = [
  {
    id: 'c1',
    image: require('../Assets/Images/old_tastement_img.png'),
    heading: 'Old Tetstament',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus nisi, tincidunt eget egestas ac, lobortis sed nisi. Nunc vestibulum est eget tristique commodo. Sed nisl lacus,',
    subtitle: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 'c2',
    image: require('../Assets/Images/old_tastement_img.png'),
    heading: 'New Tetstament',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus nisi, tincidunt eget egestas ac, lobortis sed nisi. Nunc vestibulum est eget tristique commodo. Sed nisl lacus,',
    subtitle: 'Lorem ipsum dolor sit amet',
  },
];

function Card({image, heading, description, subtitle, onPress}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('TestmentsScreeen' ,{item :heading});
        console.log('helllooooooooooooooooooo========>');
      }}>
      <ImageBackground
        source={image}
        resizeMode="contain"
        style={{
          width: '100%',
          height: 200,
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          // flex
          marginLeft: 4,
          //   marginHorizontal :moderateScale(13,.3)
          //  paddingHorizontal:'25'
        }}>
        <CustomText style={styles.txt5}>{heading}</CustomText>
        <CustomText style={styles.txt6}>{description}</CustomText>
        <CustomText style={styles.txt7}>{subtitle}</CustomText>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const TestmentCategory = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <ImageBackground
        source={require('../Assets/Images/Home_Bg_image.png')}
        resizeMode="cover"
        style={{
          width: windowWidth,
          height: windowHeight,
          //  alignItems :'center'

          //  marginHorizontal :moderateScale(10,.6)
          //   gap: 23,
        }}>
        <ImageBackground
          style={{
            width: windowWidth,
            height: 200,
            paddingLeft: 11,
            justifyContent: 'center',
          }}
          source={require('../Assets/Images/holy-bible-wooden.jpg')}>
          <CustomText
            style={[
              styles.txt5,
              {
                fontSize: moderateScale(15, 15),
                textAlign: 'left',
              },
            ]}>
            BIBLE
          </CustomText>
          <CustomText style={[styles.txt6, {textAlign: 'left'}]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna
            dolor, efficitur pulvinar placerat sed, auctor vestibulum elit.
          </CustomText>
        </ImageBackground>
        <LinearGradient
          start={{x: 0.2, y: 0.2}}
          end={{x: 0.5, y: 1.0}}
          colors={['rgba(0,0,0,0.01)', 'rgba(0,0,0,0.9)',]}
          style={{
            height: '100%',
            // justifyContent :'center',
            // alignItems :'center',
            // paddingHorizontal :moderateScale(10,.6)
            marginTop :moderateScale(70,.3)
          }}>
          {cardContents.map((content, id) => {
            return (
              <Card
                key={content.id}
                image={content.image}
                heading={content.heading}
                description={content.description}
                subtitle={content.subtitle}
              />
            );
          })}
        </LinearGradient>
      </ImageBackground>
    </ScrollView>
  );
};

export default TestmentCategory;

const styles = StyleSheet.create({
  category: {
    // marginHorizontal:10,
    width: '100%',
    height: 200,
  },
  txt5: {
    fontFamily: 'Montserrat',
    textAlign: 'center',
    fontSize: moderateScale(15, 0.6),
    color: 'white',
    fontWeight: 'bold',
  },
  txt6: {
    width: '50%',
    paddingHorizontal: '12',
    textAlign: 'center',
    fontSize: moderateScale(7),
    color: 'white',
    //    overflow: 'hidden'
  },
  txt7: {
    textAlign: 'center',
    fontSize: moderateScale(10, 0.1),
    color: 'white',
  },
  infoText: {
    paddingHorizontal: '15',
    // position: 'absolute', justifyContent: 'center', alignItems: 'center'
  },
  //   container: {
  //     paddingTop: windowHeight * 0.03,
  //     // justifyContent: "center",
  //     height: windowHeight * 0.9,
  //     width: windowWidth,
  //     // alignItems: 'center',
  //     // backgroundColor : Color.green
  //   },
});

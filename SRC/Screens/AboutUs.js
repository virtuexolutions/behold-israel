import {
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
import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import Color from '../Assets/Utilities/Color';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import {color, position} from 'native-base/lib/typescript/theme/styled-system';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';

const AboutUs = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      title: 'faith',
      description:
        'We believe in the power of faith as a driving force in our lives. We strive to deepen our relationship with God, embracing spirituality as a foundation for our actions and decisions. Through prayer, reflection, and worship, we seek to strengthen our faith and share it with others.',
    },
    {
      id: 2,
      title: 'brotherhood',
      description:
        'We value the bonds of brotherhood that unite us as a community. We foster an inclusive and supportive environment where every member feels valued, respected, and embraced. We encourage meaningful connections, mutual support, and a sense of belonging, creating lifelong friendships and a network of support.',
    },
    {
      id: 3,
      title: 'service',
      description:
        'We are committed to making a positive impact on the world around us. We believe in selflessly serving others, extending a helping hand to those in need, and advocating for justice and equality. Through volunteer work, community service projects, and acts of kindness, we strive to uplift and empower individuals, families, and communities.',
    },
    {
      id: 4,
      title: 'integrity',
      description:
        'We hold ourselves to high moral standards and ethical conduct. We value honesty, transparency, and accountability in all our actions. We strive to be people of integrity, consistently upholding our values and acting with integrity in all aspects of our lives. ',
    },
    {
      id: 5,
      title: 'personal growth',
      description:
        'We believe in continuous personal growth and development. We encourage self-reflection, learning, and self-improvement. Through educational programs, workshops, and mentoring, we provide opportunities for individuals to grow intellectually, emotionally, and spiritually.',
    },
    {
      id: 6,
      title: 'unity',
      description:
        'Our shared goal is fueled by our dedication to unity, which helps us advance in our love, service, and faith. Here, unity is about embracing our shared goal while appreciating our diversity, rather than forcing everyone to follow.',
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
        showLeft={true}
        leftName={'menu'}
        leftType={Feather}
        title={'About us'}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingTop: moderateScale(10, 0.6),
        }}
        contentContainerStyle={{
          paddingBottom: moderateScale(150, 0.3),
        }}>
        <CustomText
          isBold
          style={{
            color: '#FFC928',
            marginHorizontal: moderateScale(15, 0.6),
            width: windowWidth * 0.9,
            // backgroundColor: 'red',
            textAlign: 'center',
            fontSize: moderateScale(25, 0.6),
            paddingVertical: moderateScale(10, 0.6),
          }}>
          KNOW THE HOLY GHOST FRATERNITY PRAYER GROUP
        </CustomText>
        <CustomText
          style={{
            paddingVertical: moderateScale(5, 0.6),
            paddingHorizontal: moderateScale(8, 0.6),
            fontSize: moderateScale(13, 0.6),
            color: Color.white,
            lineHeight: moderateScale(19, 0.6),
          }}>
          At the Holy Ghost Fraternity Prayer Group, our ultimate goal is to
          create an atmosphere where people may experience the life-changing
          power of the Holy Spirit via worship, prayer, and group activities.
          With unwavering dedication, we work to develop a vibrant prayer life
          and assist others in realizing the deep happiness and serenity that
          come with yielding to the leadership of Jesus Christ. Together, we
          want to share God’s love with everyone, live out our faith, and build
          a strong community based on the direction of the Holy Spirit. As we
          strive to be instruments of God’s grace in our world, we cordially ask
          you to accompany us on this shared spiritual journey.
        </CustomText>
        <View
          style={{
            height: windowHeight * 0.35,
            width: windowWidth * 0.97,
            marginHorizontal: moderateVerticalScale(5, 0.6),
          }}>
          <CustomImage
            style={{height: '100%', width: '100%'}}
            source={require('../Assets/Images/mission2.png')}
          />
        </View>
        <CustomButton
          isBold
          height={windowHeight * 0.06}
          width={windowWidth * 0.7}
          text={'join out community'}
          onPress={() => {
            navigation.navigate('MemberShipForm');
          }}
          marginTop={moderateScale(20, 0.3)}
          bgColor={'#FFC928'}
          borderRadius={moderateScale(25, 0.6)}
          textColor={'black'}
        />
        <CustomText
          style={{
            paddingVertical: moderateScale(15, 0.6),
            paddingHorizontal: moderateScale(8, 0.6),
            fontSize: moderateScale(13, 0.6),
            color: Color.white,
            lineHeight: moderateScale(19, 0.6),
          }}>
          By embracing these values, the Holy Ghost fraternity movement aims to
          create a community that nurtures the spiritual, personal, and social
          development of its members, while making a positive impact on society.
        </CustomText>
        {data?.map((item, index) => {
          return (
            <>
              <CustomText
              isBold
                style={{
                    paddingTop :moderateScale(10,.6),
                //   paddingVertical: moderateScale(18, 0.6),
                  paddingHorizontal: moderateScale(10, 0.6),
                  fontSize: moderateScale(18, 0.6),
                  color:'#FFC928',
                  lineHeight: moderateScale(19, 0.6),
                }}>
                {item?.title}
              </CustomText>
              <CustomText
                style={{
                  paddingVertical: moderateScale(10, 0.6),
                  paddingHorizontal: moderateScale(8, 0.6),
                  fontSize: moderateScale(13, 0.6),
                  color: Color.white,
                  lineHeight: moderateScale(19, 0.6),
                }}>
                {item?.description}
              </CustomText>
            </>
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
};

export default AboutUs;
const styles = ScaledSheet.create({});

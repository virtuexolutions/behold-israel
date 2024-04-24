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

const OutReachMissions = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      image: require('../Assets/Images/mission1.png'),
      description:
        'Holy Ghost Fraternity Prayer Movement International, USA (HGFI or Ministry) is a global Catholic Ministry founded in October 2023 at St. Eugene Catholic Church, Los Angeles, California through the inspiration and direction of the Holy Spirit. HGFI is a 501(c)(3) nonprofit religious organization organized exclusively for charitable, educational, and religious purposes. HGFI is approved to operate under the guidelines of the Archdiocese of Los AngelesHoly Ghost Fraternity Prayer Movement International, USA (HGFI or Ministry) is a global Catholic Ministry founded in October 2023 at St. Eugene Catholic Church, Los Angeles, California through the inspiration and direction of the Holy Spirit. HGFI is a 501(c)(3) nonprofit religious organization organized exclusively for charitable, educational, and religious purposes. HGFI is approved to operate under the guidelines of the Archdiocese of Los Angeles.     The Daughters of The Holy Spirit, USA (DOHS) is a subsidiary of HGFI. The DOHS serves to unite women aged over 18 years and, through regular meetings and Bible reflections, help women deepen their faith and live a life of prayer.Rev. Fr. Emmanuel Obimma is the Spiritual Director of HGFI. Fr. Obimma is an ordained Catholic Priest from Onitsha Archdiocese. He is the Parish Priest of Blessed Iwene Tansi, Umudioka, Dunukofia. A lover of the Holy Spirit, Fr. Obimma was born into the family of Late Mr. and Mrs. Obimma of Nkwelle-Ezunaka in Anambra state. He is the last son out of the seven children of his parents. He was ordained a priest on August 6, 2011.',
    },
    {
      id: 2,
      image: require('../Assets/Images/mission2.png'),
      description:
        'The apostle Paul instructs us to fan into flame the gift of God which is in us through the laying on of his hands. (2 Timothy 1:6). Members of HGFI, also commonly referred to as “Adorers” revere the Holy Spirit and our Lady, mother Mary! Empowered and sealed by the Holy Spirit, Adorers are committed to preaching the Gospel and fostering in-depth spiritual encounter and re-awakening.  Our mission is to promote evangelization; propagate the Gospel of Jesus Christ across the continent; and enhance the spiritual lives of congregants through education, fellowship, and community spiritual support. Through donations and fundraisers, HGFI aims to procure food pantries; shelter for the homeless; conduct visitations to hospitals and prisons and other charitable community outreach programs. ',
    },
    {
      id: 3,
      image: require('../Assets/Images/mission1.png'),
      description:
        'Members of the Holy Ghost Fraternity Prayer Movement International are lovers of the Holy Spirit. Empowered and sealed by the Holy Spirit, we are dedicated to preaching the Gospel and fostering in-depth spiritual encounters and re-awakening.  Our mission is to promote evangelization, propagate the Gospel of Jesus Christ across the continent, and enhance the spiritual lives of congregants through education and direct services. Through donations and fundraisers, HGFI aims to procure food pantries; shelter for the homeless; conduct visitations to hospitals and prisons; provide after school programs; day-care; and other charitable community outreach programs through which the Corporation may preach the Gospel.  This Corporation is organized exclusively for charitable, educational, and religious purposes. ',
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
        title={'out reach & missions'}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingTop: moderateScale(10, 0.6),
        }}
        contentContainerStyle={{
          paddingBottom: moderateScale(50, 0.3),
        }}>
        {data?.map((item, index) => {
          return (
            <>
              <View
                style={{
                  height: windowHeight * 0.35,
                  width: windowWidth * 0.97,
                  marginHorizontal: moderateVerticalScale(5, 0.6),
                }}>
                <CustomImage
                  style={{height: '100%', width: '100%'}}
                  source={item?.image}
                />
              </View>
              <CustomText
                style={{
                  paddingVertical: moderateScale(18, 0.6),
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

export default OutReachMissions;
const styles = ScaledSheet.create({
  mainContainer: {
    height: windowHeight * 0.73,
    alignItems: 'center',
    marginHorizontal: moderateScale(10, 0.6),
    backgroundColor: Color.veryLightGray,
    width: windowWidth * 0.95,
    borderRadius: moderateScale(15, 0.6),
    // justifyContent:"space-around",
  },
});

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
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Hidden, Icon, Select} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import Header from '../Components/Header';
import Feather from 'react-native-vector-icons/Feather';
import {color, position} from 'native-base/lib/typescript/theme/styled-system';
import DonationComponent from '../Components/DonationComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Color from '../Assets/Utilities/Color';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';

const Donations = props => {
  const categoryName = props?.route?.params?.categoryName;
  console.log('🚀 ~ Donations ~ categoryName:', categoryName);
  const value = props?.route?.params?.value;
  const valueArray = props?.route?.params?.valueArray;
  const fromDrawer = props?.route?.params?.fromDrawer;

  const [donationCount, setDonationCount] = useState(10);
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  //   {
  //     id: 1,
  //     image: require('../Assets/Images/donationn.jpg'),
  //     title: 'Donation',
  //   },
  //   {
  //     id: 2,
  //     image: require('../Assets/Images/donationn.jpg'),
  //     title: 'Donation',
  //   },
  //   {
  //     id: 3,
  //     image: require('../Assets/Images/donationn.jpg'),
  //     title: 'Donation',
  //   },
  //   {
  //     id: 4,
  //     image: require('../Assets/Images/donationn.jpg'),
  //     title: 'Donation',
  //   },
  // ];
  const donationArray = ['donation', 'support For Life', 'giving'];
  const SharingWithOthersArrays = {
    donationArray: ['Widow', 'Poor', 'Handicaps', 'Orphans', 'HealthCare'],
    supportForLifeArray: [
      'Pregnant Woman',
      'Pregnanat Teenager',
      'Up Keep of the ARK',
      'Utilities',
      'Seminary',
      'Support for the priest',
      'Support for the religious',
      'Long Term Project with your name on the plaque on the wall',
      'Project: One room for retreat N6M ( $6000)',
      'To train a seminarian in Senior seminary ( N100,000 000) $100,000',
    ],
    givingArray: [
      'Weekly Giving',
      'Monthly',
      'Quarterly',
      'Termly',
      'Annually',
      'Support for the Ministry',
      'Second Collection',
    ],
  };
  return (
    <ImageBackground
      resizeMode="cover"
      width={windowWidth}
      minHeight={windowHeight}
      source={require('../Assets/Images/setting_Bg.png')}>
      <ScrollView>
        <Header
          showLeft={true}
          leftName={'menu'}
          leftType={Feather}
          title={'Donation'}
        />
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
              Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum
              dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
            </CustomText>
          </ImageBackground>
        </TouchableOpacity>

        <View style={styles.container}>
          <DropDownSingleSelect
            array={donationArray}
            item={selectedCategory}
            setItem={setSelectedCategory}
            placeholder={fromDrawer ? categoryName : 'select'}
            //   height={windowHeight*0.06}
            disabled={fromDrawer ? true : false}
            width={windowWidth * 0.9}
            dropdownStyle={{
              width: windowWidth * 0.9,
              borderBottomWidth: 0,
              // marginTop: moderateScale(-10, 0.3),
            }}
          />
          {selectedCategory != '' ||
            (categoryName != undefined && (
              <DropDownSingleSelect
                array={
                  fromDrawer
                    ? valueArray
                    : selectedCategory == 'donation'
                    ? SharingWithOthersArrays?.donationArray
                    : selectedCategory == 'support For Life'
                    ? SharingWithOthersArrays?.supportForLifeArray
                    : SharingWithOthersArrays?.givingArray
                }
                item={selectedItem}
                setItem={setSelectedItem}
                placeholder={fromDrawer ? value : 'select'}
                //   height={windowHeight*0.06}
                width={windowWidth * 0.9}
                dropdownStyle={{
                  width: windowWidth * 0.9,
                  borderBottomWidth: 0,
                  // marginTop: moderateScale(-10, 0.3),
                }}
              />
            ))}
          <CustomText style={styles.text}>
            How much you want to donate?
          </CustomText>
          <TextInputWithTitle
            titleText={'DonationCount'}
            placeholder={'DonationCount'}
            setText={setDonationCount}
            value={`${donationCount}`}
            viewHeight={0.06}
            viewWidth={0.92}
            inputWidth={0.7}
            border={1}
            borderColor={'#0F02022E'}
            backgroundColor={'white'}
            marginTop={moderateScale(10, 0.3)}
            color={'#ABB1C0'}
            placeholderColor={'#ABB1C0'}
            borderRadius={moderateScale(0, 0.6)}
            keyboardType={'numeric'}
          />
        </View>
        <View style={{height: windowHeight * 0.65}}>
          <View style={styles.grayCard}>
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() => {
                  const temp = donationCount - 10;
                  temp >= 10
                    ? setDonationCount(prev => parseInt(prev) - 10)
                    : setDonationCount(10);
                }}
                style={styles.btn}>
                <Icon
                  onPress={() => {
                    const temp = donationCount - 10;
                    temp >= 10
                      ? setDonationCount(prev => parseInt(prev) - 10)
                      : setDonationCount(10);
                  }}
                  style={styles.btnIcon}
                  name="minus"
                  as={FontAwesome}
                  size={moderateScale(16, 0.6)}
                  color={'#fff'}
                />
              </TouchableOpacity>
              <CustomText numberOfLines={1} isBold style={styles.countText}>
                ${parseInt(donationCount)}
              </CustomText>
              <TouchableOpacity
                onPress={() => {
                  setDonationCount(prev => parseInt(prev) + 10);
                }}
                style={styles.btn}>
                <Icon
                  onPress={() => {
                    setDonationCount(prev => parseInt(prev) + 10);
                  }}
                  style={styles.btnIcon}
                  name="plus"
                  as={FontAwesome}
                  size={moderateScale(16, 0.6)}
                  color={'#fff'}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.donationInputBox}>
            <CustomText style={styles.cardh1}>Card Information</CustomText>
            <View style={styles.input}>
              <CustomText>Enter your card details</CustomText>
            </View>
          </View>
          <CustomButton
            isBold
            onPress={() => {}}
            text={'Donate Now'}
            textColor={Color.white}
            width={windowWidth * 0.8}
            height={windowHeight * 0.07}
            fontSize={moderateScale(15, 0.6)}
            marginTop={moderateScale(20, 0.3)}
            bgColor={Color.theme2}
            borderRadius={moderateScale(30, 0.3)}
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
  },
  boxConatiner2: {
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    height: windowHeight * 0.5,
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
  },
  btn: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
    borderRadius: (windowWidth * 0.12) / 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnIcon: {
    textAlign: 'center',
  },
  countText: {
    width: windowWidth * 0.5,
    textAlign: 'center',
    fontSize: moderateScale(20, 0.6),
  },
  cardh1: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(21, 0.2),
  },
  row: {
    width: windowWidth * 0.83,
    borderRadius: moderateScale(30, 0.3),
    backgroundColor: 'white',
    opacity: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: moderateScale(10, 0.3),
    paddingVertical: moderateScale(5, 0.2),
  },
  grayCard: {
    marginTop: moderateScale(15, 0.2),
    height: windowHeight * 0.1,
    borderRadius: moderateScale(12, 0.2),
    opacity: 0.9,
    width: windowWidth * 0.93,
    alignSelf: 'center',
    backgroundColor: 'grey',
    paddingHorizontal: moderateScale(18, 0.3),
    paddingVertical: moderateScale(12, 0.3),
  },
  text: {
    width: windowWidth * 0.9,
    // paddingHorizontal: moderateScale(15, 0.3),
    color: 'white',
    fontSize: moderateScale(16, 0.2),
    paddingTop: moderateScale(20, 0.6),
  },
  container: {
    alignItems: 'center',
    width: windowWidth,
  },
});

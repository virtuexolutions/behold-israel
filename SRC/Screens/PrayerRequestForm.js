import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
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
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';

const PrayerRequestForm = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [relationship, setRelationship] = useState('');
  const [sender, setSender] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [description, setDescription] = useState('');
  const [prayerRequest, setPrayerRequest] = useState('');

  const data = [
    'special intension',
    'divine protection',
    'mariage anniversary',
    'rest in peace for the dead +',
    'Birthday celebration',
    'progress in studies',
    'succuessfull surgery',
    'healing from sickness',
    'fruit of the womb',
    'family progress',
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
        title={'Prayers'}
      />
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#2F1C6E', '#2FB4C0']}
        style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              paddingTop: moderateScale(10, 0.6),
            }}
            contentContainerStyle={{
              paddingBottom: moderateScale(120, 0.3),
            }}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <CustomText
                isBold
                style={styles.heading}>
                Prayer request form
              </CustomText>
              <View
                style={styles.row2}>
                <TextInputWithTitle
                  titleText={'first name'}
                  placeholder={'first name'}
                  setText={setName}
                  value={name}
                  viewHeight={0.06}
                  viewWidth={0.4}
                  inputWidth={0.35}
                  border={1}
                  borderColor={'#0F02022E'}
                  backgroundColor={'white'}
                  marginBottom={moderateScale(20, 0.3)}
                  color={'#ABB1C0'}
                  placeholderColor={'#ABB1C0'}
                  borderRadius={moderateScale(20, 0.6)}
                />
                <TextInputWithTitle
                  titleText={'last name'}
                  placeholder={'last name'}
                  setText={setLastName}
                  value={lastName}
                  viewHeight={0.06}
                  viewWidth={0.4}
                  inputWidth={0.35}
                  border={1}
                  borderColor={'#0F02022E'}
                  backgroundColor={'white'}
                  marginBottom={moderateScale(20, 0.3)}
                  color={'#ABB1C0'}
                  placeholderColor={'#ABB1C0'}
                  borderRadius={moderateScale(20, 0.6)}
                />
              </View>
              <View
                style={styles.row2}>
                <TextInputWithTitle
                  titleText={'email'}
                  placeholder={'email'}
                  setText={setEmail}
                  value={email}
                  viewHeight={0.06}
                  viewWidth={0.4}
                  inputWidth={0.35}
                  border={1}
                  borderColor={'#0F02022E'}
                  backgroundColor={'white'}
                  marginBottom={moderateScale(20, 0.3)}
                  color={'#ABB1C0'}
                  placeholderColor={'#ABB1C0'}
                  borderRadius={moderateScale(20, 0.6)}
                />
                <TextInputWithTitle
                  titleText={'sender'}
                  placeholder={'sender'}
                  setText={setSender}
                  value={sender}
                  viewHeight={0.06}
                  viewWidth={0.4}
                  inputWidth={0.35}
                  border={1}
                  borderColor={'#0F02022E'}
                  backgroundColor={'white'}
                  marginBottom={moderateScale(20, 0.3)}
                  color={'#ABB1C0'}
                  placeholderColor={'#ABB1C0'}
                  borderRadius={moderateScale(20, 0.6)}
                />
              </View>

              <View
                style={styles.row2}>
                <TextInputWithTitle
                  titleText={'contact'}
                  placeholder={'contact'}
                  setText={setContact}
                  value={contact}
                  viewHeight={0.06}
                  viewWidth={0.4}
                  inputWidth={0.35}
                  border={1}
                  borderColor={'#0F02022E'}
                  backgroundColor={'white'}
                  marginBottom={moderateScale(20, 0.3)}
                  color={'#ABB1C0'}
                  placeholderColor={'#ABB1C0'}
                  borderRadius={moderateScale(20, 0.6)}
                  keyboardType={'numeric'}
                />
                <TextInputWithTitle
                  titleText={'relationship'}
                  placeholder={'relationship'}
                  setText={setRelationship}
                  value={relationship}
                  viewHeight={0.06}
                  viewWidth={0.4}
                  inputWidth={0.35}
                  border={1}
                  borderColor={'#0F02022E'}
                  backgroundColor={'white'}
                  marginBottom={moderateScale(20, 0.3)}
                  color={'#ABB1C0'}
                  placeholderColor={'#ABB1C0'}
                  borderRadius={moderateScale(20, 0.6)}
                />
              </View>

              <DropDownSingleSelect
                array={data}
                item={prayerRequest}
                setItem={setPrayerRequest}
                placeholder={'select'}
                //   height={windowHeight*0.06}
                width={windowWidth * 0.85}
                dropdownStyle={{
                  width: windowWidth * 0.85,
                  borderBottomWidth: 0,
                  marginBottom: moderateScale(20, 0.6),
                  marginTop: moderateScale(-5, 0.3),
                }}
              />
           
              <TextInputWithTitle
                titleText={'description'}
                placeholder={'description'}
                setText={setDescription}
                value={description}
                viewHeight={0.15}
                viewWidth={0.85}
                inputWidth={0.8}
                border={1}
                borderColor={'#0F02022E'}
                backgroundColor={'white'}
                marginBottom={moderateScale(20, 0.3)}
                color={Color.themeLightGray}
                placeholderColor={Color.themeLightGray}
                borderRadius={moderateScale(20, 0.6)}
                multiline
              />
              <CustomText
                isBold
                style={styles.heading2}>
                address
              </CustomText>

              <TextInputWithTitle
                titleText={'address'}
                placeholder={'address'}
                setText={setAddress}
                value={address}
                viewHeight={0.06}
                viewWidth={0.8}
                inputWidth={0.7}
                border={1}
                borderColor={'#0F02022E'}
                backgroundColor={'white'}
                marginBottom={moderateScale(5, 0.3)}
                color={'#ABB1C0'}
                placeholderColor={'#ABB1C0'}
                borderRadius={moderateScale(20, 0.6)}
              />

              <View style={styles.row}>
                <DropDownSingleSelect
                  array={['male', 'female', 'other']}
                  item={country}
                  dropdownStyle={{
                    borderBottomWidth: 0,
                  }}
                  setItem={setCountry}
                  placeholder={'country'}
                  width={windowWidth * 0.4}
                />

                <DropDownSingleSelect
                  array={['male', 'female', 'other']}
                  item={state}
                  setItem={setState}
                  placeholder={'state'}
                  width={windowWidth * 0.4}
                  dropdownStyle={{
                    borderBottomWidth: 0,
                    marginLeft: moderateScale(-140, 0.3),
                  }}
                />
              </View>
              <View style={styles.row}>
                <DropDownSingleSelect
                  array={['male', 'female', 'other']}
                  item={city}
                  setItem={setCity}
                  dropdownStyle={{
                    borderBottomWidth: 0,
                  }}
                  placeholder={'city'}
                  width={windowWidth * 0.4}
                />

                <DropDownSingleSelect
                  array={['male', 'female', 'other']}
                  item={zip}
                  setItem={setZip}
                  placeholder={'zip'}
                  width={windowWidth * 0.4}
                  dropdownStyle={{
                    borderBottomWidth: 0,
                    marginLeft: moderateScale(-140, 0.3),
                  }}
                />
              </View>
              <CustomButton
                isBold
                height={windowHeight * 0.07}
                width={windowWidth * 0.8}
                text={'submit'}
                onPress={() => {}}
                marginTop={moderateScale(20, 0.3)}
                bgColor={'#FFC928'}
                borderRadius={moderateScale(25, 0.6)}
                textColor={'black'}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </ImageBackground>
  );
};

export default PrayerRequestForm;
const styles = ScaledSheet.create({
  back: {
    width: moderateScale(35, 0.6),
    height: moderateScale(35, 0.6),
    borderRadius: moderateScale(5, 0.6),
    borderWidth: 0.5,
    borderColor: '#FFFFFF',
    position: 'absolute',
    left: moderateScale(10, 0.6),
    top: moderateScale(10, 0.6),
    zIndex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '90%',
  },
  row2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  heading2:{
    color: '#FFC928',
    width: windowWidth * 0.75,
    fontSize: moderateScale(25, 0.6),
    paddingVertical: moderateScale(5, 0.6),
  },
  mainContainer: {
    height: windowHeight * 0.73,
    alignItems: 'center',
    marginHorizontal: moderateScale(10, 0.6),
    backgroundColor: Color.veryLightGray,
    width: windowWidth * 0.95,
    borderRadius: moderateScale(15, 0.6),
  },
  container: {
    height: windowHeight * 0.8,
    marginHorizontal: moderateScale(10, 0.3),
    width: windowWidth * 0.93,
    borderRadius: moderateScale(25, 0.6),
  },
  heading:{
    color: '#FFC928',
    width: windowWidth,
    textAlign: 'center',
    fontSize: moderateScale(25, 0.6),
    paddingVertical: moderateScale(15, 0.6),
  },
});

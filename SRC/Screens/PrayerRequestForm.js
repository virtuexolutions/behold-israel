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
import React, {useCallback, useEffect, useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Color from '../Assets/Utilities/Color';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import {color, position} from 'native-base/lib/typescript/theme/styled-system';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../Components/CustomButton';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import {Country, State, City} from 'country-state-city';
import SelectDropdown from 'react-native-select-dropdown';

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
  const [zipCode, setZipCode] = useState('');
  const [description, setDescription] = useState('');
  const [prayerRequest, setPrayerRequest] = useState('');
  const [withFilter, setFilter] = useState(true);
  const [showNumberModal, setShowNumberModal] = useState(false);
  const [countries, setCountries] = useState([]);
  // console.log("🚀 ~ PrayerRequestForm ~ countries:", JSON.stringify(countries, null, 2))
  const [states, setStates] = useState([]);
  // console.log("🚀 ~ PrayerRequestForm ~ states:", states)
  const [cities, setCities] = useState([]);
  // console.log("🚀 ~ PrayerRequestForm ~ cities:", cities)
  const isFocused = useIsFocused();
  const onSelect = country => {
    console.log('dasdasdasdads =>', JSON.stringify(country, null, 2));
    // setCountryCode(country.cca2);
    setCountry(country);
  };
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
  useEffect(() => {
    // Fetch all countries on component mount
    const countryList = Country.getAllCountries();
    setCountries(countryList);
    console.log(countryList, 'countrylissssssssssst');
    return () => {
      setCountries([]);
      setCities([]);
      setStates([]);
    };
  }, [isFocused]);
  // }, []);
  useEffect(() => {
    if (states.length > 0) {
      // This effect will run whenever `states` is updated
      console.log('States updated:', states);
    }
  }, [states]);
  // useEffect(() =>{

  // },[handleCountrySelect])
  const handleCountrySelect = selectedCountry => {
    const coutryS = countries?.find(c => c.name === selectedCountry);
    //  if(coutryS){ setCountry(coutryS);
    setCountry(coutryS);
    //   console.log('🚀 ~ PrayerRequestForm ~ country:', country);
    const statesList = State.getStatesOfCountry(coutryS.isoCode);
    console.log(statesList, '========statesList');
    setStates(statesList);
    console.log(
      '🚀 ~ PrayerRequestForm ~ country:',
      selectedCountry,
      coutryS,
      statesList,
    );

    setState(null); // Reset state and city when country changes
    setCities([]);
    // }else{
    //   Alert.alert("Undefined Object", "Please try again!")
    // }
  };

  const handleStateSelect = selectedState => {
    if (!selectedState || !country) {
      console.error('Selected state or country is undefined.');
      return;
    }
    setState(selectedState);
    // if (state) {
    const citiesList = City.getCitiesOfState(
      country.isoCode,
      selectedState.isoCode,
    );
    // console.log('🚀 ~ handleStateSelect ~ citiesList:', citiesList);
    setCities(citiesList);
    setCity(null);
  };

  // console.log('Console ===> ', states.length, states);
  // console.log('Console ===> ', cities.length, cities);
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
              <CustomText isBold style={styles.heading}>
                Prayer request form
              </CustomText>
              <View style={styles.row2}>
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
              <View style={styles.row2}>
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

              <View style={styles.row2}>
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
              <CustomText isBold style={styles.heading2}>
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
                {countries.length > 0 && (
                  <DropDownSingleSelect
                    array={countries}
                    //  array={['male', 'female', 'other']}
                    item={country}
                    dropdownStyle={{
                      borderBottomWidth: 0,
                    }}
                    setItem={name => handleCountrySelect(name)}
                    // setItem={setCountry}
                    placeholder={'country'}
                    width={windowWidth * 0.4}
                  />
                )}
                {/* <View style={{position: 'absolute', right: 0}}>
                  <SelectDropdown
                    dropdownStyle={{marginRight: moderateScale(20, 0.6)}}
                    data={ states}
                    defaultValue={state}
                  />
                </View> */}
                <DropDownSingleSelect
                  array={states}
                  item={state}
                  setItem={name =>
                    handleStateSelect(states.find(s => s.name == name))
                  }
                  disabled={states.length === 0}
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
                  array={cities}
                  // array={['male', 'female', 'other']}
                  item={city}
                  setItem={name => {
                    setCity(name);
                  }}
                  dropdownStyle={{
                    borderBottomWidth: 0,
                  }}
                  disabled={cities.length === 0}
                  placeholder={'city'}
                  width={windowWidth * 0.4}
                />
                {/* <DropDownSingleSelect
                  array={['male', 'female', 'other']}
                  item={zip}
                  setItem={setZip}
                  placeholder={'zip'}
                  width={windowWidth * 0.4}
                  dropdownStyle={{
                    borderBottomWidth: 0,
                    marginLeft: moderateScale(-140, 0.3),
                  }}
                /> */}
                <TextInputWithTitle
                titleText={'address'}
                style={{position:'absolute', 
                // bottom: 0,
                top: 15,
                right
              : 0}}
                placeholder={'ZIP'}
                setText={setZipCode}
                value={zipCode}
                viewHeight={0.06}
                viewWidth={0.4}
                inputWidth={0.4}
                border={1}
                borderColor={'#0F02022E'}
                backgroundColor={'white'}
                marginBottom={moderateScale(5, 0.3)}
                color={'#ABB1C0'}
                placeholderColor={'#ABB1C0'}
                borderRadius={moderateScale(20, 0.6)}
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
  birthday: {
    // width: windowWidth * 0.75,
    // height: windowHeight * 0.06,
    // marginTop: moderateScale(10, 0.3),
    // borderRadius: moderateScale(10, 0.6),
    // borderWidth: 1,
    // backgroundColor: 'white',
    // borderColor: Color.lightGrey,
    // flexDirection: 'row',
    // paddingHorizontal: moderateScale(10, 0.6),
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // shadowColor: Color.themeColor,
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.32,
    // shadowRadius: 5.46,
    // elevation: 9,
    // position: 'relative',
    backgroundColor: Color.white,
    height: windowHeight * 0.06,
    borderBottomWidth: moderateScale(1, 0.3),
    borderColor: Color.lightGrey,
    // borderWidth:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: moderateScale(12, 0.2),
    borderRadius: moderateScale(28, 0.2),
    marginTop: moderateScale(15, 0.3),
    // borderRadius: moderateScale(20, 0.3),
    // paddingLeft: moderateScale(32, 0.3),
    width: windowWidth * 0.4,
  },
  row: {
    flexDirection: 'row',
    width: '90%',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  heading2: {
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
  heading: {
    color: '#FFC928',
    width: windowWidth,
    textAlign: 'center',
    fontSize: moderateScale(25, 0.6),
    paddingVertical: moderateScale(15, 0.6),
  },
});

{
  /* <TouchableOpacity
              onPress={() => {
                setShowNumberModal(true);
                console.log('first');
              }}
              activeOpacity={0.9}
              style={[
                styles.birthday,
              ]}>
              <CountryPicker
                {...{
                  country,
                  // withCallingCode,
                  onSelect,
                  withFilter,
                }}
                withFlag={false}
                
                visible={showNumberModal}
                onClose={() => {
                  setShowNumberModal(false);
                }}
              />

              {country && (
                <CustomText
                  style={{
                    fontSize: moderateScale(15, 0.6),
                    color: '#5E5E5E',
                  }}>{`${country?.name}`}</CustomText>
              )}

       {!country   &&     <Icon
                name={'angle-down'}
                as={FontAwesome}
                size={moderateScale(20, 0.6)}
                color={Color.themeDarkGray}
                onPress={() => {
                  setShowNumberModal(true);
                }}
                style={{
                  // position: 'absolute',
                  // right: moderateScale(5, 0.3),
                }}
              />}
            </TouchableOpacity> */
}

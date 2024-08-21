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
import React, {useEffect, useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from '../Components/CustomText';
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import Color from '../Assets/Utilities/Color';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import {color, position} from 'native-base/lib/typescript/theme/styled-system';
import Header from '../Components/Header';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from '../Components/CustomButton';
import DatePicker from 'react-native-date-picker';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import {Country, State, City} from 'country-state-city';
import moment from 'moment';
const MemberShipForm = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setDate] = useState(new Date())
  console.log("🚀 ~ MemberShipForm ~ date:", date)
  const [open, setOpen] = useState(false)
  const [contact, setContact] = useState('');
  const [profession, setProfession] = useState('');
  const [hobby, setHobby] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [joiningAs, setJoiningAs] = useState('');
  const [gender, setGender] = useState('');
  const [religion, setReligion] = useState('');
  const [volunteer, setVolunteer] = useState('');
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const isFocused = useIsFocused();
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [maillingAddress, setMaillingAddress] = useState(false);



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

  const handleCountrySelect = selectedCountry => {
    const coutryS = countries?.find(c => c.name === selectedCountry);
    setCountry(coutryS);
    const statesList = State.getStatesOfCountry(coutryS.isoCode);
    setStates(statesList);
    console.log(
      '🚀 ~ PrayerRequestForm ~ country:',
      selectedCountry,
      coutryS,
      statesList,
    );

    setState(null); // Reset state and city when country changes
    setCities([]);
  };

  const handleStateSelect = selectedState => {
    if (!selectedState || !country) {
      console.error('Selected state or country is undefined.');
      return;
    }
    setState(selectedState);
    const citiesList = City.getCitiesOfState(
      country.isoCode,
      selectedState.isoCode,
    );
    setCities(citiesList);
    setCity(null);
  };

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
        title={true}
      />

      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#2F1C6E', '#2FB4C0']}
        style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{}}
            contentContainerStyle={{
              paddingBottom: moderateScale(120, 0.6),
            }}>
            <View style={styles.mainContainer}>
              <CustomText
                isBold
                style={{
                  color: '#FFC928',
                  // width: windowWidth,
                  textAlign: 'center',
                  fontSize: moderateScale(25, 0.6),
                  paddingVertical: moderateScale(15, 0.6),
                }}>
                membership form
              </CustomText>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '90%',
                }}>
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
                  marginBottom={moderateScale(10, 0.3)}
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
                  viewWidth={0.42}
                  inputWidth={0.35}
                  border={1}
                  borderColor={'#0F02022E'}
                  backgroundColor={'white'}
                  marginBottom={moderateScale(10, 0.3)}
                  color={'#ABB1C0'}
                  placeholderColor={'#ABB1C0'}
                  borderRadius={moderateScale(20, 0.6)}
                />
              </View>
              <TextInputWithTitle
                titleText={'email'}
                placeholder={'email'}
                setText={setEmail}
                value={email}
                viewHeight={0.06}
                viewWidth={0.85}
                inputWidth={0.8}
                border={1}
                borderColor={'#0F02022E'}
                backgroundColor={'white'}
                marginBottom={moderateScale(10, 0.3)}
                color={'#ABB1C0'}
                placeholderColor={'#ABB1C0'}
                borderRadius={moderateScale(20, 0.6)}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  width: '90%',
                }}>
                <TextInputWithTitle
                  titleText={'Dob'}
                  placeholder={'Dob'}
                  setText={setDate}
                  value={moment(date).format('YY-MM-DD').toString()}
                  viewHeight={0.06}
                  viewWidth={0.38}
                  inputWidth={0.3}
                  border={1}
                  onPressRight={() =>{
                    setOpen(true)
                  }}
                  rightIcon= {true}
                  iconName={'calendar'}
                iconType={AntDesign}
                  borderColor={'#0F02022E'}
                  backgroundColor={'white'}
                  color={'#ABB1C0'}
                  placeholderColor={'#ABB1C0'}
                  borderRadius={moderateScale(25, 0.6)}
                />

                <DropDownSingleSelect
                  array={['male', 'female']}
                  item={gender}
                  setItem={setGender}
                  placeholder={'gender'}
                  width={windowWidth * 0.45}
                  dropdownStyle={{
                    marginLeft: moderateScale(10, 0.3),
                    width: windowWidth * 0.45,
                    borderBottomWidth: 0,
                    marginTop: moderateScale(0, 0.3),
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  width: '90%',
                }}>
                <TextInputWithTitle
                  titleText={'Cell phone'}
                  placeholder={'Cell phone'}
                  setText={setContact}
                  value={contact}
                  viewHeight={0.06}
                  viewWidth={0.38}
                  inputWidth={0.35}
                  border={1}
                  borderColor={'#0F02022E'}
                  backgroundColor={'white'}
                  marginBottom={moderateScale(10, 0.3)}
                  color={'#ABB1C0'}
                  placeholderColor={'#ABB1C0'}
                  borderRadius={moderateScale(25, 0.6)}
                />

                <DropDownSingleSelect
                  array={['Ministries', 'Music']}
                  item={volunteer}
                  setItem={setVolunteer}
                  placeholder={'Volunteer'}
                  width={windowWidth * 0.45}
                  dropdownStyle={{
                    marginTop: moderateScale(0, 0.3),
                    marginLeft: moderateScale(10, 0.3),
                    borderBottomWidth: 0,
                    color: Color.black,
                  }}
                />
              </View>
              <TextInputWithTitle
                titleText={'profession'}
                placeholder={'profession'}
                setText={setProfession}
                value={profession}
                viewHeight={0.06}
                viewWidth={0.85}
                inputWidth={0.8}
                border={1}
                borderColor={'#0F02022E'}
                backgroundColor={'white'}
                marginBottom={moderateScale(10, 0.3)}
                color={'#ABB1C0'}
                placeholderColor={'#ABB1C0'}
                borderRadius={moderateScale(20, 0.6)}
              />
              <TextInputWithTitle
                titleText={'hobby'}
                placeholder={'hobby'}
                setText={setHobby}
                value={hobby}
                viewHeight={0.06}
                viewWidth={0.85}
                inputWidth={0.8}
                border={1}
                borderColor={'#0F02022E'}
                backgroundColor={'white'}
                color={'#ABB1C0'}
                placeholderColor={'#ABB1C0'}
                borderRadius={moderateScale(20, 0.6)}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  width: '90%',
                }}>
                <DropDownSingleSelect
                  array={['Christian', 'Catholic', 'Pentecostal', 'other']}
                  item={religion}
                  setItem={setReligion}
                  dropdownStyle={{
                    borderBottomWidth: 0,
                  }}
                  placeholder={'religion'}
                  width={windowWidth * 0.4}
                />

                <DropDownSingleSelect
                  array={['Member', 'Chapter']}
                  item={joiningAs}
                  setItem={setJoiningAs}
                  placeholder={'joining as'}
                  width={windowWidth * 0.4}
                  dropdownStyle={{
                    borderBottomWidth: 0,
                    marginLeft: moderateScale(-135, 0.3),
                  }}
                />
              </View>
              <CustomText
                isBold
                style={{
                  color: '#FFC928',
                  width: windowWidth * 0.75,
                  paddingHorizontal: moderateScale(10, 0.6),
                  fontSize: moderateScale(25, 0.6),
                  paddingVertical: moderateScale(5, 0.6),
                }}>
                address
              </CustomText>

              <TextInputWithTitle
                titleText={'address'}
                placeholder={'address'}
                setText={setAddress}
                value={address}
                viewHeight={0.06}
                viewWidth={0.85}
                inputWidth={0.8}
                border={1}
                borderColor={'#0F02022E'}
                backgroundColor={'white'}
                // marginBottom={moderateScale(10, 0.3)}
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
              {/* <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                }}>
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
                    marginLeft: moderateScale(-135, 0.3),
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  marginTop: moderateScale(-10, 0.3),
                }}>
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
                    marginLeft: moderateScale(-135, 0.3),
                  }}
                />
              </View> */}
              <View
                style={{
                  paddingTop: moderateScale(10, 0.6),
                  flexDirection: 'row',
                  marginHorizontal: moderateScale(10, 0.6),
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => setMaillingAddress(!maillingAddress)}
                  style={{
                    width: windowHeight * 0.02,
                    height: windowHeight * 0.02,
                    borderRadius: (windowHeight * 0.02) / 2,
                    borderWidth: moderateScale(1, 0.6),
                    borderColor: Color.white,
                  }}>
                  {maillingAddress == true && (
                    <Icon
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      name="check"
                      as={Entypo}
                      color={'#FFC928'}
                      size={moderateScale(13, 0.6)}
                    />
                  )}
                </TouchableOpacity>
                <CustomText
                  onPress={() => {
                    console.log('maillingAddress===========>');
                    setMaillingAddress(!maillingAddress);
                  }}
                  isBold
                  style={{
                    color: Color.white,
                    width: windowWidth * 0.75,
                    paddingHorizontal: moderateScale(10, 0.6),
                    fontSize: moderateScale(15, 0.6),
                    paddingVertical: moderateScale(5, 0.6),
                  }}>
                  mailling address
                </CustomText>
              </View>
              {maillingAddress == true && (
                <>
                  <CustomText
                    isBold
                    style={{
                      color: '#FFC928',
                      width: windowWidth * 0.75,
                      paddingHorizontal: moderateScale(10, 0.6),
                      fontSize: moderateScale(25, 0.6),
                      paddingVertical: moderateScale(5, 0.6),
                    }}>
                    mailling address
                  </CustomText>

                  <TextInputWithTitle
                    titleText={'address'}
                    placeholder={'address'}
                    setText={setAddress}
                    value={address}
                    viewHeight={0.06}
                    viewWidth={0.85}
                    inputWidth={0.8}
                    border={1}
                    borderColor={'#0F02022E'}
                    backgroundColor={'white'}
                    // marginBottom={moderateScale(10, 0.3)}
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
            
                </>
              )}
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
                    marginRight={moderateScale(35,.6)}
                  />
            </View>
            <DatePicker
        modal
      mode='date'
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </ImageBackground>
  );
};

export default MemberShipForm;
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
  container2: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    width: '90%',
  },
  mainContainer: {
    marginHorizontal: moderateScale(10, 0.6),
    width: windowWidth * 0.93,
    borderRadius: moderateScale(15, 0.6),
  },
  container: {
    height: windowHeight * 0.83,
    marginHorizontal: moderateScale(10, 0.3),
    width: windowWidth * 0.93,
    borderRadius: moderateScale(25, 0.6),
  },
  addressContainer: {
    height: windowHeight * 0.5,
    width: windowWidth * 0.95,
    borderRadius: moderateScale(15, 0.6),
    alignItems: 'center',
  },
});

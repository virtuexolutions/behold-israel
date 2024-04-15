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
import {ScaledSheet, moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from '../Assets/Utilities/Color';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import {color, position} from 'native-base/lib/typescript/theme/styled-system';

const MemberShipForm = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
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
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  return (
    <ImageBackground
      style={{
        width: windowWidth,
        minHeight: windowHeight,
        paddingBottom: moderateScale(40, 0.6),
      }}
      source={require('../Assets/Images/setting_Bg.png')}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.back}>
        <Icon
          name="arrowleft"
          as={AntDesign}
          style={styles.icon2}
          color={Color.white}
          size={moderateScale(20, 0.3)}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: windowHeight * 0.1,
        }}
        contentContainerStyle={
          {
            // padding : moderateScale(10,0.6),
          }
        }>
        <View
          style={styles.mainContainer}>
          <CustomText
            isBold
            style={{
              color: Color.white,
              width: windowWidth,
              textAlign: 'center',
              fontSize: moderateScale(25, 0.6),
              paddingVertical: moderateScale(10, 0.6),
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
          <TextInputWithTitle
            titleText={'email'}
            placeholder={'email'}
            setText={setEmail}
            value={email}
            viewHeight={0.06}
            viewWidth={0.8}
            inputWidth={0.7}
            border={1}
            borderColor={'#0F02022E'}
            backgroundColor={'white'}
            marginBottom={moderateScale(20, 0.3)}
            color={'#ABB1C0'}
            placeholderColor={'#ABB1C0'}
            borderRadius={moderateScale(20, 0.6)}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: moderateScale(0, 0.3),
              justifyContent: 'space-between',
              // backgroundColor: 'red',
              // paddingTop :moderateScale(10,.6),
              width: '90%',
            }}>
            <TextInputWithTitle
              titleText={'Dob'}
              placeholder={'Dob'}
              setText={setName}
              value={name}
              viewHeight={0.07}
              viewWidth={0.35}
              inputWidth={0.3}
              border={1}
              borderColor={'#0F02022E'}
              backgroundColor={'white'}
              marginBottom={moderateScale(20, 0.3)}
              color={'#ABB1C0'}
              placeholderColor={'#ABB1C0'}
              borderRadius={moderateScale(25, 0.6)}
            />

            <DropDownSingleSelect
              array={['male', 'female', 'other']}
              item={gender}
              setItem={setGender}
              placeholder={'gender'}
              //   height={windowHeight*0.06}
              width={windowWidth * 0.45}
              dropdownStyle={{
                width: windowWidth * 0.45,
                borderBottomWidth: 0,
                marginTop: moderateScale(-10, 0.3),
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // backgroundColor: 'red',
              // paddingTop :moderateScale(10,.6),
              width: '90%',
            }}>
            <TextInputWithTitle
              titleText={'Cell phone'}
              placeholder={'Cell phone'}
              setText={setName}
              value={name}
              viewHeight={0.07}
              viewWidth={0.35}
              inputWidth={0.3}
              border={1}
              borderColor={'#0F02022E'}
              backgroundColor={'white'}
              marginBottom={moderateScale(20, 0.3)}
              color={'#ABB1C0'}
              placeholderColor={'#ABB1C0'}
              borderRadius={moderateScale(25, 0.6)}
            />

            <DropDownSingleSelect
              array={['male', 'female', 'other']}
              item={volunteer}
              setItem={setVolunteer}
              placeholder={'Volunteer'}
              //   height={windowHeight*0.06}
              width={windowWidth * 0.45}
              dropdownStyle={{
                marginTop: moderateScale(-40, 0.3),
                marginLeft: moderateScale(15, 0.3),
                // height : windowHeight
                borderBottomWidth: 0,
                color: Color.black,
                height: windowHeight * 0.02,
              }}
            />
          </View>
          <TextInputWithTitle
            titleText={'profession'}
            placeholder={'profession'}
            setText={setProfession}
            value={profession}
            viewHeight={0.06}
            viewWidth={0.8}
            inputWidth={0.7}
            border={1}
            borderColor={'#0F02022E'}
            backgroundColor={'white'}
            marginBottom={moderateScale(20, 0.3)}
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
            viewWidth={0.8}
            inputWidth={0.7}
            border={1}
            borderColor={'#0F02022E'}
            backgroundColor={'white'}
            marginBottom={moderateScale(20, 0.3)}
            color={'#ABB1C0'}
            placeholderColor={'#ABB1C0'}
            borderRadius={moderateScale(20, 0.6)}
          />
          <View
            style={{
              flexDirection: 'row',
              // alignItems: 'center',
              //   justifyContent: 'space-between',
              //   backgroundColor: 'red',
              // paddingTop :moderateScale(10,.6),
              width: '90%',
            }}>
            <DropDownSingleSelect
              array={['male', 'female', 'other']}
              item={religion}
              setItem={setReligion}
              dropdownStyle={{
                position: 'absolute',
                borderBottomWidth: 0,
              }}
              placeholder={'religion'}
              width={windowWidth * 0.4}
            />

            <DropDownSingleSelect
              array={['male', 'female', 'other']}
              item={joiningAs}
              setItem={setJoiningAs}
              placeholder={'joining as'}
              width={windowWidth * 0.4}
              dropdownStyle={{
                position: 'absolute',
                borderBottomWidth: 0,
                right: -35,
                marginRight: moderateScale(-120, 0.3),
                // color: Color.black,
                // height: windowHeight * 0.02,
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginVertical: moderateScale(15, 0.6),
            height: windowHeight * 0.4,
            alignItems: 'center',
            marginHorizontal: moderateScale(10, 0.6),
            backgroundColor: Color.veryLightGray,
            width: windowWidth * 0.95,
            borderRadius: moderateScale(15, 0.6),
            // justifyContent:"space-around",
          }}>
          <CustomText
            isBold
            style={{
              color: Color.white,
              width: windowWidth,
              textAlign: 'center',
              fontSize: moderateScale(25, 0.6),
              paddingVertical: moderateScale(10, 0.6),
            }}>
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
            marginBottom={moderateScale(20, 0.3)}
            color={'#ABB1C0'}
            placeholderColor={'#ABB1C0'}
            borderRadius={moderateScale(20, 0.6)}
          />

          <View
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
                position: 'absolute',
                right: -35,
                marginRight: moderateScale(-120, 0.3),
                // color: Color.black,
                // height: windowHeight * 0.02,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
            }}>
            <DropDownSingleSelect
              array={['male', 'female', 'other']}
              item={city}
              setItem={setCity}
              dropdownStyle={{
                // position: 'absolute',
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
                position: 'absolute',
                right: -35,
                marginRight: moderateScale(-120, 0.3),
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginVertical: moderateScale(15, 0.6),
            height: windowHeight * 0.4,
            alignItems: 'center',
            marginHorizontal: moderateScale(10, 0.6),
            backgroundColor: Color.veryLightGray,
            width: windowWidth * 0.95,
            borderRadius: moderateScale(15, 0.6),
            // justifyContent:"space-around",
          }}>
          <CustomText
            isBold
            style={{
              color: Color.white,
              width: windowWidth,
              textAlign: 'center',
              fontSize: moderateScale(25, 0.6),
              paddingVertical: moderateScale(10, 0.6),
            }}>
            MAILLING address
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
            marginBottom={moderateScale(20, 0.3)}
            color={'#ABB1C0'}
            placeholderColor={'#ABB1C0'}
            borderRadius={moderateScale(20, 0.6)}
          />

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
            }}>
            <DropDownSingleSelect
              array={['male', 'female', 'other']}
              item={country}
              setItem={setCountry}
              placeholder={'country'}
              width={windowWidth * 0.4}
              dropdownStyle={{
                borderBottomWidth: 0,
              }}
            />

            <DropDownSingleSelect
              array={['male', 'female', 'other']}
              item={state}
              setItem={setState}
              placeholder={'state'}
              width={windowWidth * 0.4}
              dropdownStyle={{
                borderBottomWidth: 0,
                position: 'absolute',
                right: -35,
                marginRight: moderateScale(-120, 0.3),
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <DropDownSingleSelect
              array={['male', 'female', 'other']}
              item={city}
              dropdownStyle={{
                borderBottomWidth: 0,
              }}
              setItem={setCity}
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
                height: windowHeight * 0.02,
                borderBottomWidth: 0,
                position: 'absolute',
                right: -35,
                marginRight: moderateScale(-135, 0.3),
              }}
            />
          </View>
        </View>
      </ScrollView>
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
  mainContainer :{
    height: windowHeight * 0.73,
    alignItems: 'center',
    marginHorizontal: moderateScale(10, 0.6),
    backgroundColor: Color.veryLightGray,
    width: windowWidth * 0.95,
    borderRadius: moderateScale(15, 0.6),
    // justifyContent:"space-around",
  },
});

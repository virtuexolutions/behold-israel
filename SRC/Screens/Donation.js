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
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Hidden, Icon, Select} from 'native-base';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../Components/CustomText';
import CustomButton from '../Components/CustomButton';
import Header from '../Components/Header';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Color from '../Assets/Utilities/Color';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import DropDownSingleSelect from '../Components/DropDownSingleSelect';
import {CardField, createToken} from '@stripe/stripe-react-native';
import {Post} from '../Axios/AxiosInterceptorFunction';
import {useSelector} from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

const Donations = props => {
  const isFocused = useIsFocused()
  const token = useSelector(state => state.authReducer.token);
  const categoryName = props?.route?.params?.categoryName;
  const value = props?.route?.params?.value;
  const valueArray = props?.route?.params?.valueArray;
  const fromDrawer = props?.route?.params?.fromDrawer;
  const [selectedCategory, setSelectedCategory] = useState("");

  const [stripeToken, setStripeToken] = useState('');
  const [donationCount, setDonationCount] = useState(10);
  const [selectedItem, setSelectedItem] = useState(value || '');
  const [isLoading, setIsLoading] = useState(false);
  const [drawerState, setDrawerState] = useState(fromDrawer)
  const [selectedArray, setSelectedArray] = useState([]);
  const [SharingWithOthersArrays, setSharingWithOthersArray] = useState({
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
  });
  const donationArray = ['donation', 'support For Life', 'giving'];

  
  const Donate = async () => {
    const url = 'auth/donate';
    const body = {
      category: selectedCategory,
      sub_category: selectedItem,
      donation_amount: donationCount,
      // stripeToken:stripeToken,
    };
    if (stripeToken == '') {
      alert('Please enter your card details');
    } else {
      body.stripeToken = stripeToken;
    }
    for (let key in body) {
      if (body[key] == '') {
        return Platform.OS == 'android'
          ? ToastAndroid.show(`${key} is empty`, ToastAndroid.SHORT)
          : alert(`requried field is empty`);
      }
    }
    //  return console.log("🚀 ~ Donate ~ body:", body)
    setIsLoading(true);
    const response = await Post(url, body, apiHeader(token));
    console.log('🚀 ~ Donate ~ response:', response?.data);
    setIsLoading(false);
    ToastAndroid.show(`Donated`, ToastAndroid.SHORT);
    setSelectedItem('');
    setSelectedCategory('');
    setStripeToken('');
  };

  const stripePaymentFunction = () => {
    createToken({
      type: 'Card',
    })
      .then(token => {
        console.log('token=============> ', token);
        setStripeToken(token?.token?.id);
        // setIsModal(false)
      })

      .catch(error => {
        console.log('error= ', error);
      });
  };


  useEffect(() => {
   if(!isFocused){
      setSelectedCategory('');
      setSelectedItem('');
      setSelectedArray([])
   } 

    console.log("----  RUNNING FIRST MOUNT (isFocused) ----- ", isFocused);
  }, [isFocused]);
  console.log("🚀 ~ Donations ~ selectedArray:", selectedArray)
  useEffect(() => {
  //  console.log(categoryName);

      setSelectedCategory(categoryName || "");
      setSelectedItem(value || '');
      console.log('Running 1st useeffect')

  }, [categoryName, value]);

  useEffect(() => {
    if (!isFocused) {
      console.log('focused lost')
    setSelectedCategory('');
    setSelectedItem('');
    setSelectedArray([]);
    }
    }, [fromDrawer]);
  useEffect(() => {
    const newSelectedArray =
        selectedCategory.toLowerCase() == 'Donation'.toLowerCase()
        ? SharingWithOthersArrays.donationArray
        : selectedCategory.toLowerCase() == 'supportForLife'.toLowerCase()
        ? SharingWithOthersArrays.supportForLifeArray
        : selectedCategory.toLowerCase() == 'support For Life'.toLowerCase()
        ? SharingWithOthersArrays.supportForLifeArray
        : SharingWithOthersArrays.givingArray;
        
        setSelectedArray(newSelectedArray);
        setSelectedItem(prevItem => prevItem === value ? '' : value);

      
    
      // setSelectedArray(
      //   selectedCategory?.toLowerCase() == 'donation'.toLowerCase()
      //   ? SharingWithOthersArrays?.donationArray
      //   : selectedCategory?.toLowerCase() == 'support For Life'.toLowerCase()
      //   ? SharingWithOthersArrays?.supportForLifeArray
      //   : SharingWithOthersArrays?.givingArray,
      //   );
      console.log("Running Select Category dependiceies")
    
     
  }, [selectedCategory, value, drawerState]);
 
  // console.log( selectedCategory?.toLowerCase() == 'donation'
  // ?SharingWithOthersArrays?.donationArray
  // :selectedCategory?.toLowerCase() == 'supportForLife'.toLowerCase()
  // ?SharingWithOthersArrays?.supportForLifeArray
  // :SharingWithOthersArrays?.givingArray  , selectedCategory)
  // console.log("Consoling values ====> " ,selectedCategory, selectedItem);
  // console.log("array", selectedArray)


 
  return (
    <ImageBackground
      resizeMode="cover"
      width={windowWidth}
      minHeight={windowHeight}
      source={require('../Assets/Images/setting_Bg.png')}>
      <ScrollView>
        <Header
          showLeft={true}
          // leftName={'menu'}
          showBack={true}
          // fromDrawer ={fromDrawer}
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
            key={donationArray.length}
            array={donationArray}
            item={selectedCategory}
            setItem={setSelectedCategory}
            placeholder={categoryName ||'select'}
            //   height={windowHeight*0.06}
            disabled={fromDrawer}
            width={windowWidth * 0.9}
            dropdownStyle={{
              width: windowWidth * 0.9,
              borderBottomWidth: 0,
              // marginTop: moderateScale(-10, 0.3),
            }}
          />
          {( selectedCategory != "" &&
            <DropDownSingleSelect
            key={selectedArray.length}
              array={selectedArray}
              item={selectedItem}
              setItem={setSelectedItem}
              placeholder={selectedItem || 'select'}
              //   height={windowHeight*0.06}
              width={windowWidth * 0.9}
              dropdownStyle={{
                width: windowWidth * 0.9,
                borderBottomWidth: 0,
                // marginTop: moderateScale(-10, 0.3),
              }}
            />
          )}
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
            <CardField
              postalCodeEnabled={true}
              placeholders={{
                number: '4242 4242 4242 4242',
              }}
              cardStyle={{
                backgroundColor: '#D3D3D3',
                borderRadius: 15,
                width: 320,
              }}
              style={{
                width: '100%',
                height: 50,
                marginVertical: 10,
              }}
              onCardChange={cardDetails => {
                console.log('cardDetails', cardDetails);
                // if(cardDetails?.complete) {
                //   // stripePaymentFunction();
                //   ToastAndroid.show("Card Details has been completed", ToastAndroid.SHORT)
                // }
              }}
              onFocus={focusedField => {
                console.log('focusField', focusedField);
              }}
            />
            <CustomButton
              isBold
              text={'Confirm'}
              textColor={Color.white}
              width={windowWidth * 0.35}
              height={windowHeight * 0.05}
              onPress={() => {
                stripePaymentFunction();
                // setIsModal(false)
              }}
              bgColor={Color.red}
              // isGradient
              borderRadius={moderateScale(30, 0.3)}
            />
          </View>
          <CustomButton
            isBold
            onPress={Donate}
            text={ isLoading ? (
              <ActivityIndicator size={'small'} color={Color.white} />
            ) : (
              'Donate Now'
            )}
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
    height: windowHeight * 0.25,
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

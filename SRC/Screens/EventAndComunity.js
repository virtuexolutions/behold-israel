import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Touchable,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import {Avatar, Icon} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import CustomText from '../Components/CustomText';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import Header from '../Components/Header';
import Feather from 'react-native-vector-icons/Feather';
import Color from '../Assets/Utilities/Color';
import {SliderBox} from 'react-native-image-slider-box';
// import { SafeAreaView } from 'react-native-safe-area-context'

const EventAndComunity = (props) => {
  const fromDrawer = props?.route?.params?.fromDrawer;
  const meetup = [
    {
      id: '1',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      name: 'A',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'B',
    },
    {
      id: '3',
      image:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      name: 'C',
    },
  ];
  const images = [
    require('../Assets/Images/s1.jpg'),
    require('../Assets/Images/s2.jpg'),
    require('../Assets/Images/s3.jpg'),
    require('../Assets/Images/s2.jpg'),
  ];

  return (
    <SafeAreaView>
      <ImageBackground
        resizeMode="cover"
        width={windowWidth}
        minHeight={windowHeight}
        source={require('../Assets/Images/setting_Bg.png')}>
        <ScrollView
        style={{
          paddingBottom :moderateScale(50,.6)
        }}
          contentContainerStyle={{
            paddingBottom: moderateScale(50, 0.6),
          }}>
          <Header
            // headerColor={'transparent'}
            showBack={fromDrawer ? false : true}
            leftName={'menu'}
            leftType={Feather}
            title={'Event & community'}
            // title={}
          />
          <View
            style={{
              width: windowWidth,
              height: windowHeight * 0.35,
            }}>
            <SliderBox
            resizeMode={'cover'}
              images={images}
              autoplay
              circleLoop
              sliderBoxHeight={350}
              // onCurrentImagePressed={index =>
              //   // console.warn(`image ${index} pressed`)
              // }
              dotColor={Color.theme2}
              inactiveDotColor="#90A4AE"
            />

          </View>
          <CustomText numberOfLines={2} style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
            pellentesque nulla.pellentesque nulla.
          </CustomText>
          <View style={styles.calendarContainer}>
            <Calendar
              minDate={moment().format()}
              markingType={'period'}
              theme={{
                backgroundColor: 'transparent',
                calendarBackground: 'black',
                textSectionTitleColor: '#e6eaed',
                textSectionTitleDisabledColor: '#d9e1e8',
                selectedDayBackgroundColor: '#e6eaed',
                selectedDayTextColor: 'white',
                todayTextColor: 'white',
                dayTextColor: '#e6eaed',
                textDisabledColor: '#d9e1e8',
                arrowColor: 'white',
                disabledArrowColor: '#d9e1e8',
                // monthTextColor: "white",
                indicatorColor: 'white',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: 'bold',
                textDayFontSize: moderateScale(16, 0.3),
                textMonthFontSize: moderateScale(16, 0.3),
                textDayHeaderFontSize: moderateScale(16, 0.3),
                monthTextColor: Color.white,
              }}
              //   Specify the current date
              current={'2024-04-11'}
              // Callback that gets called when the user selects a day
              onDayPress={day => {
                console.log('selected day', day);
              }}
              // Mark specific dates as marked
              markedDates={{
                '2012-03-01': {
                  selected: true,
                  marked: true,
                  selectedColor: 'blue',
                },
                '2012-03-02': {marked: true},
                '2012-03-03': {
                  selected: true,
                  marked: true,
                  selectedColor: 'blue',
                },
              }}
            />

            <ScrollView style={styles.eventBox}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: moderateScale(15, 0.2),
                }}>
                <View style={styles.eventDate}>
                  <CustomText>03 Feb</CustomText>
                  <Icon
                    as={Octicons}
                    name="dot-fill"
                    size={moderateScale(25, 0.3)}
                    color={'grey'}
                  />
                </View>
                <View>
                  <CustomText style={{fontSize: moderateScale(18, 0.2)}}>
                    Events
                  </CustomText>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: moderateScale(15, 0.2),
                }}>
                <View style={styles.eventDate}>
                  <CustomText>03 Feb</CustomText>
                  <Icon
                    as={Octicons}
                    name="dot-fill"
                    size={moderateScale(25, 0.3)}
                    color={'grey'}
                  />
                </View>
                <View>
                  <CustomText style={{fontSize: moderateScale(18, 0.2)}}>
                    Donation
                  </CustomText>
                  <View style={styles.meetups}>
                    <CustomText
                      style={{
                        fontSize: moderateScale(10, 0.2),
                      }}>
                      WITH
                    </CustomText>
                    {meetup.map((item, index) => (
                      <Avatar
                        key={index}
                        bg="green.500"
                        size={'xs'}
                        source={{uri: item.image}}
                      />
                    ))}
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: moderateScale(15, 0.2),
                }}>
                <View style={styles.eventDate}>
                  <CustomText>03 Feb</CustomText>
                  <Icon
                    as={Octicons}
                    name="dot-fill"
                    size={moderateScale(25, 0.3)}
                    color={'grey'}
                  />
                </View>
                <View style={{gap: moderateScale(10, 0.2)}}>
                  <CustomText style={{fontSize: moderateScale(18, 0.2)}}>
                    Events
                  </CustomText>

                  <View style={styles.meetups}>
                    <CustomText
                      style={{
                        fontSize: moderateScale(10, 0.2),
                      }}>
                      WITH
                    </CustomText>
                    <Avatar
                      bg="green.500"
                      size={'xs'}
                      source={{
                        uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                      }}
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Icon
                  as={Ionicons}
                  name="add"
                  color={'white'}
                  style={{fontWeight: 'bold'}}
                  size={moderateScale(25, 0.4)}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default EventAndComunity;

const styles = StyleSheet.create({
  eventDate: {
    justifyContent: 'center',
    gap: moderateScale(16, 0.4),
    alignItems: 'center',
    flexDirection: 'row',

    paddingLeft: moderateScale(12, 0.4),
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.09,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // gap: moderateScale(45, 0.3),
  },
  calendarContainer: {
    width: windowWidth,
    height: windowHeight * 0.7,
    paddingHorizontal: moderateScale(11, 0.2),
  },
  eventBox: {
    width: '100%',
    // height:"100%",
    backgroundColor: 'white',
    marginTop: moderateScale(20, 0.2),
  },
  addButton: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,

    shadowOffset: {
      width: moderateScale(30, 0.2),
      height: moderateScale(20, 0.2),
    },
    shadowOpacity: 0.7,
    shadowColor: 'grey',
    borderRadius: (windowWidth * 0.15) / 2,
    backgroundColor: 'green',
    opacity: 0.7,
    position: 'absolute',
    // left:20,

    right: 20,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  meetups: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(7, 0.2),
  },
  descriptionText: {
    marginTop: moderateScale(15, 0.1),
    textAlign: 'center',
    paddingHorizontal: moderateScale(15, 0.2),
    paddingBottom: moderateScale(11, 0.2),
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: moderateScale(12, 0.2),
  },
});

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {FlatList, Icon, ScrollView} from 'native-base';
import CustomStatusBar from '../Components/CustomStatusBar';
import Color from '../Assets/Utilities/Color';
import {
  ScaledSheet,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CustomTable from '../Components/CustomTable';
import moment from 'moment';
import {Get} from '../Axios/AxiosInterceptorFunction';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import CustomImage from '../Components/CustomImage';
import Product from '../Components/Product';
import navigationService from '../navigationService';

const Bookings = () => {
  const token = useSelector(state => state.authReducer.token);
  const userData = useSelector(state => state.commonReducer.userData);
  // console.log('🚀 ~ file: HomeScreen.js:25 ~ HomeScreen ~ userData:', userData);

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const isFocused = useIsFocused();
  const [selectedService, setSelectedService] = useState('');
  // console.log(
  //   '🚀 ~ file: HomeScreen.js:27 ~ HomeScreen ~ isFocused:',
  //   isFocused,
  // );
  const serviceBookings = [
    {
      id: 1,
      title: 'Stitching',
      sellerName: 'ABC',
      price: 300,
      dateOfBooking: '2023-8-5',
      timeSlot: '9am - 6pm',
      userName: 'xyz',
      contact: '283623918739',
      address: 'dfjasljfkjksjglks',
      status: 'Pending',
      image: [require('../Assets/Images/stitching.jpg')],
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 2,
      title: 'Hair Cut',
      sellerName: 'ABC',
      price: 800,
      dateOfBooking: '2023-7-30',
      timeSlot: '9am - 6pm',
      status: 'Completed',
      userName: 'xyz',
      contact: '283623918739',
      address: 'dfjasljfkjksjglks',
      image: [
        require('../Assets/Images/Mask.png'),
        require('../Assets/Images/Mask.png'),
      ],
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 3,
      title: 'Bridal Makeup',
      sellerName: 'xyz',
      price: 100,
      dateOfBooking: '2023-7-25',
      timeSlot: '9am - 6pm',
      status: 'Cancelled',
      userName: 'xyz',
      contact: '283623918739',
      address: 'dfjasljfkjksjglks',
      image: [
        require('../Assets/Images/Mask.png'),
        require('../Assets/Images/Mask.png'),
      ],
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 4,
      title: 'Makeup Artist',
      sellerName: 'abc',
      price: 200,
      dateOfBooking: '2023-7-23',
      timeSlot: '9am - 6pm',
      status: 'Rejected',
      userName: 'xyz',
      contact: '283623918739',
      address: 'dfjasljfkjksjglks',
      image: [require('../Assets/Images/makeupartist.png')],
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  const productBookings = [
    {
      id: 1,
      orderId: '3746287',
      customerId: '123456789',
      sellerName: 'ABC',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: 'Rs. 100',
      paymentMethod: 'Cash On Delivery (COD)',
      address: 'kjfhksjflakjflakj',
      dateOfBooking: '2023-7-16',
      time: '10 am to 1 pm ',
      image: [require('../Assets/Images/Image.png')],
      items: [
        {id: 1, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
        {id: 2, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
        {id: 3, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
        {id: 4, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
      ],
      customerName: 'abc',
      contact: '8273638123',
      email: 'abc@gmail.com',
    },
    {
      id: 2,
      orderId: '3746287',
      customerId: '123456789',
      price: 'Rs. 100',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      sellerName: 'ABC',
      paymentMethod: 'Cash On Delivery (COD)',
      address: 'kjfhksjflakjflakj',
      dateOfBooking: '2023-7-28',
      time: '10 am to 1 pm ',
      image: [require('../Assets/Images/Image.png')],
      items: [
        {id: 1, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
        {id: 2, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
        {id: 3, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
        {id: 4, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
      ],
      customerName: 'abc',
      contact: '8273638123',
      email: 'abc@gmail.com',
    },
    {
      id: 3,
      orderId: '3746287',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      customerId: '123456789',
      price: 'Rs. 100',
      sellerName: 'ABC',
      paymentMethod: 'Cash On Delivery (COD)',
      address: 'kjfhksjflakjflakj',
      dateOfBooking: '2023-8-2',
      time: '10 am to 1 pm ',
      image: [require('../Assets/Images/Image.png')],
      items: [
        {id: 1, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
        {id: 2, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
        {id: 3, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
        {id: 4, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
      ],
      customerName: 'abc',
      contact: '8273638123',
      email: 'abc@gmail.com',
    },
    {
      id: 4,
      orderId: '3746287',
      customerId: '123456789',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      price: 'Rs. 100',
      sellerName: 'ABC',
      paymentMethod: 'Cash On Delivery (COD)',
      address: 'kjfhksjflakjflakj',
      dateOfBooking: '2023-8-5',
      time: '10 am to 1 pm ',
      image: [require('../Assets/Images/Image.png')],
      items: [
        {id: 1, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
        {id: 2, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
        {id: 3, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
        {id: 4, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
      ],
      customerName: 'abc',
      contact: '8273638123',
      email: 'abc@gmail.com',
    },
    {
      id: 5,
      orderId: '3746287',
      customerId: '123456789',
      price: 'Rs. 100',
      sellerName: 'ABC',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      paymentMethod: 'Cash On Delivery (COD)',
      address: 'kjfhksjflakjflakj',
      dateOfBooking: '2023-8-12',
      time: '10 am to 1 pm ',
      image: [require('../Assets/Images/Image.png')],
      items: [
        {id: 1, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
        {id: 2, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
        {id: 3, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
        {id: 4, name: 'jeans', image: [require('../Assets/Images/Mask.png')]},
      ],
      customerName: 'abc',
      contact: '8273638123',
      email: 'abc@gmail.com',
    },
  ];

  

  return (
    <>
      <CustomStatusBar backgroundColor={'#D2E4E4'} barStyle={'dark-content'} />
      <Header headerColor={['#D2E4E4', '#D2E4E4']} cart />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: moderateScale(60, 0.3),
        }}
        style={{
          minHeight: windowHeight * 0.9,
          backgroundColor: '#D2E4E4',
        }}>
        <CustomText
          isBold
          style={{
            fontSize: moderateScale(20, 0.6),
            marginTop: moderateVerticalScale(20, 0.6),
            marginLeft: moderateScale(20, 0.3),
          }}>
          Services
        </CustomText>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: moderateScale(10, 0.6),
            // marginTop: moderateScale(10, 0.3),
            // alignItems: 'center',

            flexDirection: 'row',
            // backgroundColor:'purple',
            // marginBottom: moderateScale(60, 0.3),
            // justifyContent: 'space-between',
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          // style={styles.categoryContainer}
        >
          {serviceBookings.map((item, index) => {
            // console.log(
            //   '🚀 ~ file: HomeScreen.js:146 ~ {categories.map ~ item:',
            //   item,
            // );
            return (
              <>
                <ServiceCard item={item} />
              </>
            );
          })}
        </ScrollView>

        <CustomText
          isBold
          style={{
            fontSize: moderateScale(20, 0.6),
            marginTop: moderateVerticalScale(20, 0.6),
            marginLeft: moderateScale(20, 0.3),
            // backgroundColor:'black'
          }}>
          Products
        </CustomText>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={productBookings}
          contentContainerStyle={{
            alignSelf: 'center',
            marginTop: moderateScale(5, 0.3),
          }}
          renderItem={({item, index}) => {
            // console.log(
            //   '🚀 ~ file: Bookings.js:719 ~ {serviceBookings.map ~ item:',
            //   item,
            // );

            return <ProductCard item={item} />;
          }}

          ListEmptyComponent={() => {
            return (
              <>
                <View
                  style={{
                    width: windowWidth * 0.8,
                    height: windowHeight * 0.4,
                    marginTop: moderateScale(30, 0.3),
                    alignSelf:'center',
                    // backgroundColor:'red'
                  }}>
                  <CustomImage
                    source={require('../Assets/Images/4.png')}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                    resizeMode={'contain'}
                  />
                </View>
                <CustomText
                  isBold
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize:moderateScale(15,0.6),
                    marginTop:moderateScale(-50,0.3)
                  }}>
                  ERROR 404 DATA NOT FOUND
                </CustomText>
              </>
            );
          }}
        />
      </ScrollView>
    </>
  );
};

export default Bookings;

const ServiceCard = ({item}) => {
  return (
    <TouchableOpacity
      key={item?.id}
      style={{
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent : 'center',
        width: windowWidth * 0.9,
        paddingVertical: moderateScale(10, 0.6),
        borderRadius: moderateScale(20, 0.6),
        borderColor: Color.veryLightGray,
        borderWidth: 1,
        //  width: windowWidth * 0.16,
        marginHorizontal: moderateScale(5, 0.3),
        backgroundColor: 'white',
      }}
      onPress={() => {}}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: moderateScale(50, 0.6),
            height: moderateScale(50, 0.6),
            borderRadius: moderateScale(5, 0.6),
            backgroundColor: 'white',
            overflow: 'hidden',
            marginLeft: moderateScale(10, 0.6),
          }}>
          <CustomImage
            source={item?.image[0]}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode={'stretch'}
            onPress={() => {}}
          />
        </View>
        <View
          style={{
            marginLeft: moderateScale(10, 0.3),
          }}>
          <CustomText
            style={{
              width: windowWidth * 0.16,
              // textAlign: 'center',
              fontSize: moderateScale(14, 0.8),
              color: 'black',
            }}
            isBold>
            {item?.sellerName}
          </CustomText>
          <CustomText
            style={{
              color: Color.veryLightGray,
              fontSize: moderateScale(12, 0.6),
              width: windowWidth * 0.7,
            }}>
            {item?.description}
          </CustomText>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: Color.veryLightGray,
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(10, 0.6),
          }}>
          <CustomText
            style={{
              color: 'black',
              fontSize: moderateScale(13, 0.6),
              // backgroundColor:'purple',

              paddingVertical: moderateScale(5, 0.6),
              marginTop: moderateScale(5, 0.3),
            }}
            isBold>
            Booking Details
          </CustomText>
          <CustomText
            style={{
              color: Color.veryLightGray,
              fontSize: moderateScale(13, 0.6),
              // backgroundColor:'purple',
              marginLeft: moderateScale(10, 0.3),
              paddingVertical: moderateScale(5, 0.6),
              marginTop: moderateScale(5, 0.3),
            }}
            isBold>
            {moment(item?.dateOfBooking).format('D MMMM')}
          </CustomText>
        </View>
        <CustomText
          style={{
            color: 'black',
            fontSize: moderateScale(12, 0.6),
            // backgroundColor:'purple',
            marginLeft: moderateScale(20, 0.3),
            // paddingVertical:moderateScale(10,.6),
          }}
          isBold>
          Name :
          <CustomText style={{color: Color.black}}>{item?.userName}</CustomText>
        </CustomText>
        <CustomText
          style={{
            color: 'black',
            fontSize: moderateScale(12, 0.6),
            // backgroundColor:'purple',
            marginLeft: moderateScale(20, 0.3),
            // paddingVertical:moderateScale(20,.6),
          }}
          isBold>
          Contact :
          <CustomText style={{color: Color.black}}>{item?.contact}</CustomText>
        </CustomText>
        <CustomText
          style={{
            color: 'black',
            fontSize: moderateScale(12, 0.6),
            // backgroundColor:'purple',
            marginLeft: moderateScale(20, 0.3),
            // paddingVertical:moderateScale(20,.6),
          }}
          isBold>
          Address :
          <CustomText style={{color: Color.black}}>{item?.address}</CustomText>
        </CustomText>
        <CustomText
          style={{
            color: 'black',
            fontSize: moderateScale(12, 0.6),
            // backgroundColor:'purple',
            marginLeft: moderateScale(20, 0.3),
            // paddingVertical:moderateScale(20,.6),
          }}
          isBold>
          Total Amount :
          <CustomText style={{color: Color.black}}>{item?.price} Rs</CustomText>
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

const ProductCard = ({item}) => {
  // console.log('🚀 ~ file: Bookings.js:878 ~ ProductCard ~ item:', item);

  return (
    <View
      key={item?.id}
      style={{
        width: windowWidth * 0.9,
        paddingVertical: moderateScale(10, 0.6),
        borderRadius: moderateScale(20, 0.6),
        borderColor: Color.veryLightGray,
        borderWidth: 1,
        marginVertical: moderateScale(10, 0.3),
        marginHorizontal: moderateScale(5, 0.3),
        backgroundColor: 'white',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: moderateScale(50, 0.6),
            height: moderateScale(50, 0.6),
            borderRadius: moderateScale(5, 0.6),
            backgroundColor: 'white',
            overflow: 'hidden',
            marginLeft: moderateScale(10, 0.6),
          }}>
          <CustomImage
            source={item?.image[0]}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode={'stretch'}
            onPress={() => {}}
          />
        </View>
        <View
          style={{
            marginLeft: moderateScale(10, 0.3),
          }}>
          <CustomText
            style={{
              width: windowWidth * 0.16,
              // textAlign: 'center',
              fontSize: moderateScale(14, 0.8),
              color: 'black',
            }}
            isBold>
            {item?.sellerName}
          </CustomText>
          <CustomText
            style={{
              color: Color.veryLightGray,
              fontSize: moderateScale(12, 0.6),
              width: windowWidth * 0.7,
            }}>
            {item?.description}
          </CustomText>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: Color.veryLightGray,
            justifyContent: 'space-between',
            paddingHorizontal: moderateScale(10, 0.6),
          }}>
          <CustomText
            style={{
              color: 'black',
              fontSize: moderateScale(13, 0.6),
              // backgroundColor:'purple',

              paddingVertical: moderateScale(5, 0.6),
              marginTop: moderateScale(5, 0.3),
            }}
            isBold>
           Items
          </CustomText>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: moderateScale(50, 0.6),
                height: moderateScale(50, 0.6),
                borderRadius: moderateScale(5, 0.6),
                backgroundColor: 'white',
                overflow: 'hidden',
                marginLeft: moderateScale(10, 0.6),
              }}>
              <CustomImage
                source={item?.item[0]?.image[0]}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                resizeMode={'stretch'}
                onPress={() => {}}
              />
            </View>
            <View
              style={{
                marginLeft: moderateScale(10, 0.3),
              }}>
              <CustomText
                style={{
                  width: windowWidth * 0.16,
                  // textAlign: 'center',
                  fontSize: moderateScale(14, 0.8),
                  color: 'black',
                }}
                isBold>
                {item?.sellerName}
              </CustomText>
              <CustomText
                style={{
                  color: Color.veryLightGray,
                  fontSize: moderateScale(12, 0.6),
                  width: windowWidth * 0.7,
                }}>
                {item?.description}
              </CustomText>
            </View>
          </View>

          <CustomText
            style={{
              color: Color.veryLightGray,
              fontSize: moderateScale(13, 0.6),
              // backgroundColor:'purple',
              marginLeft: moderateScale(10, 0.3),
              paddingVertical: moderateScale(5, 0.6),
              marginTop: moderateScale(5, 0.3),
            }}
            isBold>
            {moment(item?.dateOfBooking).format('D MMMM')}
          </CustomText>
        </View>
        <View></View>
        <CustomText
          style={{
            color: 'black',
            fontSize: moderateScale(12, 0.6),
            // backgroundColor:'purple',
            marginLeft: moderateScale(20, 0.3),
            // paddingVertical:moderateScale(10,.6),
          }}
          isBold>
          Name :
          <CustomText style={{color: Color.black}}>{item?.userName}</CustomText>
        </CustomText>
        <CustomText
          style={{
            color: 'black',
            fontSize: moderateScale(12, 0.6),
            // backgroundColor:'purple',
            marginLeft: moderateScale(20, 0.3),
            // paddingVertical:moderateScale(20,.6),
          }}
          isBold>
          Contact :
          <CustomText style={{color: Color.black}}>{item?.contact}</CustomText>
        </CustomText>
        <CustomText
          style={{
            color: 'black',
            fontSize: moderateScale(12, 0.6),
            // backgroundColor:'purple',
            marginLeft: moderateScale(20, 0.3),
            // paddingVertical:moderateScale(20,.6),
          }}
          isBold>
          Address :
          <CustomText style={{color: Color.black}}>{item?.address}</CustomText>
        </CustomText>
        <CustomText
          style={{
            color: 'black',
            fontSize: moderateScale(12, 0.6),
            // backgroundColor:'purple',
            marginLeft: moderateScale(20, 0.3),
            // paddingVertical:moderateScale(20,.6),
          }}
          isBold>
          Total Amount :
          <CustomText style={{color: Color.black}}>{item?.price} Rs</CustomText>
        </CustomText>
      </View>
    </View>
  );
};

const Chuncks = ({color, item}) => {
  return (
    <View activeOpacity={0.9}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={color}
        style={styles.container}>
        <View
          style={{
            width: moderateScale(30, 0.6),
            height: moderateScale(30, 0.6),
            borderRadius: moderateScale(15, 0.6),
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={item.logo}
            as={FontAwesome5}
            size={moderateScale(12, 0.6)}
          />
        </View>
        <CustomText
          isBold
          style={{
            color: Color.white,
            marginTop: moderateScale(15, 0.6),
          }}>
          RS {item?.amount}
        </CustomText>
        <CustomText
          style={{
            color: Color.white,
            fontSize: moderateScale(10, 0.6),
            textTransform: 'none',
          }}>
          {item?.title}
        </CustomText>
        <CustomText
          style={{
            color: Color.white,
            fontSize: moderateScale(9, 0.6),
            textTransform: 'none',
            marginTop: moderateScale(10, 0.6),
          }}>
          Tap to preview
        </CustomText>
      </LinearGradient>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: windowWidth * 0.42,
    // height : windowHeight * 0.16 ,
    paddingVertical: moderateScale(10, 0.6),
    borderRadius: moderateScale(15, 0.6),
    // alignItems : 'center',
    marginTop: moderateScale(20, 0.3),
    paddingLeft: moderateScale(15, 0.6),
    paddingTop: moderateScale(10, 0.6),
    // backgroundColor : 'red'
  },
  categoryContainer: {
    height: windowHeight * 0.09,
    width: windowWidth * 1,
    padding: moderateScale(10, 0.6),
    marginTop: moderateScale(20, 0.3),
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor:'purple',
    justifyContent: 'space-between',
  },
});

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PlatformColor,
  ToastAndroid,
  LayoutAnimation,
  ScrollView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import ScreenBoiler from '../Components/ScreenBoiler';
import CustomText from '../Components/CustomText';
import {Icon} from 'native-base';

import {useNavigation} from '@react-navigation/native';
import {SetUserRole, setUserLogoutAuth} from '../Store/slices/auth';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLogOut} from '../Store/slices/common';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DrawerDropDown from '../Components/DrawerDropDown';
import {baseUrl} from '../Config';

const Drawer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const userData = useSelector(state => state.commonReducer.userData);
  const token = useSelector(state => state.authReducer.token);

  const [menuIndices, setMenuIndices] = useState({
    parentIndex: -1,
    childIndex: -1,
    grandChildIndex: -1,
  });
  const [menuIndex, setMenuIndex] = useState(-1);
  const [nestedMenuIndex, setNestedMenuIndex] = useState(-1);
  const [innerMostMenuIndex, setInnerMostMenuIndex] = useState(-1);
  const [selectedItem, setSelectedItem] = useState('');

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
  const data = [
    {
      name: 'Home',
      // iconName: 'home',
      // iconType: Entypo,
      onPress: () => {
        navigation.navigate('TabNavigation');
      },
    },
    {
      name: 'About us',
      onPress: () => {
        {
          navigation.navigate('AboutUs');
        }
      },
    },
    {
      name: 'Sharing with other',
      iconName: menuIndex == 2 ? 'chevron-up' : 'chevron-down',
      iconType: EvilIcons,
      menuItems: [
        {
          Id: '1',
          name: 'Donation',
          nestedMenuItems: [
            {
              id: 'd1',
              itemName: 'Widow',
              expandable: false,
              onPress: () => {
                {
                  setSelectedItem('Widow');
                  navigation.navigate('Donation', {
                    categoryName: 'Donation',
                    value: 'Widow',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'd2',
              itemName: 'Poor',
              expandable: false,
              onPress: () => {
                {
                  setSelectedItem('Poor');
                  navigation.navigate('Donation', {
                    categoryName: 'Donation',
                    value: 'Poor',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'd3',
              itemName: 'Handicaps',
              expandable: false,
              onPress: () => {
                {
                  setSelectedItem('Handicaps');
                  navigation.navigate('Donation', {
                    categoryName: 'Donation',
                    value: 'Handicaps',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'd4',
              itemName: 'Orphans',
              expandable: false,
              onPress: () => {
                {
                  setSelectedItem('Orphans');
                  navigation.navigate('Donation', {
                    categoryName: 'Donation',
                    value: 'Orphans',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'd5',
              itemName: 'HealthCare',
              expandable: false,
              onPress: () => {
                {
                  setSelectedItem('HealthCare');
                  navigation.navigate('Donation', {
                    categoryName: 'Donation',
                    value: 'HealthCare',
                    fromDrawer: true,
                  });
                }
              },
            },
          ],
          expandable: true,
          onPress: index => {
            LayoutAnimation.configureNext(
              LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
            );

            setNestedMenuIndex(nestedMenuIndex === index ? -1 : index);
          },
        },
        {
          Id: '2',
          name: 'Support for life',
          nestedMenuItems: [
            {
              id: 'sl1',
              itemName: 'Pregnant Woman',
              expandable: false,
              onPress: () => {
                {
                  setSelectedItem('Pregnant Woman');
                  navigation.navigate('Donation', {
                    categoryName: 'supportForLife',
                    value: 'Pregnant Woman',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'sl2',
              itemName: 'Pregnanat Teenager',
              expandable: false,
              onPress: () => {
                {
                  {
                    setSelectedItem('Pregnanat Teenager');
                    navigation.navigate('Donation', {
                      categoryName: 'supportForLife',
                      value: 'Pregnanat Teenager',

                      fromDrawer: true,
                    });
                  }
                }
              },
            },
            {
              id: 'sl3',
              itemName: 'Up Keep of the ARK',
              expandable: false,
              onPress: () => {
                {
                  setSelectedItem('Up Keep of the ARK');
                  navigation.navigate('Donation', {
                    categoryName: 'supportForLife',
                    value: 'Up Keep of the ARK',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'sl4',
              itemName: 'Utilities',
              expandable: false,
              onPress: () => {
                {
                  setSelectedItem('Utilities');
                  navigation.navigate('Donation', {
                    categoryName: 'supportForLife',
                    value: 'Utilities',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'sl5',
              itemName: 'Seminary',
              expandable: false,
              onPress: () => {
                {
                  setSelectedItem('Seminary');
                  navigation.navigate('Donation', {
                    categoryName: 'supportForLife',
                    value: 'Seminary',

                    fromDrawer: true,
                  });
                }
              },
            },
            // {
            //   id: 'sl6',
            //   itemName: 'Up Keep of the ARK',
            //   expandable: false,
            //   onPress: () => {},
            // },
            {
              id: 'sl7',
              itemName: 'Support for the priest',
              expandable: false,
              onPress: () => {
                {
                  setSelectedItem('Support for the priest');
                  navigation.navigate('Donation', {
                    categoryName: 'supportForLife',
                    value: 'Support for the priest',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'sl8',
              itemName: 'Support for the religious',
              expandable: false,
              onPress: () => {
                {
                  setSelectedItem('Support for the religious');
                  navigation.navigate('Donation', {
                    categoryName: 'supportForLife',
                    value: 'Support for the religious',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'sl9',
              itemName:
                'Long Term Project with your name on the plaque on the wall',
              expandable: false,
              onPress: () => {
                {
                  setSelectedItem(
                    'Long Term Project with your name on the plaque on the wall',
                  );
                  navigation.navigate('Donation', {
                    categoryName: 'supportForLife',
                    value:
                      'Long Term Project with your name on the plaque on the wall',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'sl10',
              itemName: 'Project: One room for retreat N6M ( $6000)',
              expandable: false,
              onPress: () => {
                {
                  setSelectedItem('Project: One room for retreat N6M ( $6000)');
                  navigation.navigate('Donation', {
                    categoryName: 'supportForLife',
                    value: 'Project: One room for retreat N6M ( $6000)',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'sl11',
              itemName:
                'To train a seminarian in Senior seminary ( N100,000 000) $100,000',
              expandable: false,
              onPress: () => {
                {
                  setSelectedItem(
                    'To train a seminarian in Senior seminary ( N100,000 000) $100,000',
                  );
                  navigation.navigate('Donation', {
                    categoryName: 'supportForLife',
                    value:
                      'To train a seminarian in Senior seminary ( N100,000 000) $100,000',

                    fromDrawer: true,
                  });
                }
              },
            },
            // {id: 'ns9', itemName: 'Long Term Project with your name on the plaque on the wall', onPress: () => {}},
            // {id: 'ns10', itemName: 'Project: One room for retreat N6M ( $6000)', onPress: () => {}},
            // {id: 'ns11', itemName: 'To train a seminarian in Senior seminary ( N100,000 000) $100,000', onPress: () => {}},
          ],
          expandable: true,
          onPress: index => {
            LayoutAnimation.configureNext(
              LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
            );
            setNestedMenuIndex(nestedMenuIndex === index ? -1 : index);
          },
        },
        {
          Id: '3',
          name: 'Giving',
          nestedMenuItems: [
            {
              id: 'ns1',
              itemName: 'Weekly Giving',
              expandable: false,
              onPress: () => {
                {
                  navigation.navigate('Donation', {
                    categoryName: 'Giving',
                    value: 'Weekly Giving',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'ns2',
              itemName: 'Monthly',
              expandable: false,
              onPress: () => {
                {
                  navigation.navigate('Donation', {
                    categoryName: 'Giving',
                    value: 'Monthly',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'ns3',
              itemName: 'Quarterly',
              expandable: false,
              onPress: () => {
                {
                  navigation.navigate('Donation', {
                    categoryName: 'Giving',
                    value: 'Quarterly',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'ns4',
              itemName: 'Termly',
              expandable: false,
              onPress: () => {
                {
                  navigation.navigate('Donation', {
                    categoryName: 'Giving',
                    value: 'Termly',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'ns5',
              itemName: 'Annually',
              expandable: false,
              onPress: () => {
                {
                  navigation.navigate('Donation', {
                    categoryName: 'Giving',
                    value: 'Annually',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'ns6',
              itemName: 'Support for the Ministry',
              expandable: false,
              onPress: () => {
                {
                  navigation.navigate('Donation', {
                    categoryName: 'Giving',
                    value: 'Support for the Ministry',

                    fromDrawer: true,
                  });
                }
              },
            },
            {
              id: 'ns7',
              itemName: 'Second Collection',
              expandable: false,
              onPress: () => {
                {
                  navigation.navigate('Donation', {
                    categoryName: 'Giving',
                    value: 'Second Collection',

                    fromDrawer: true,
                  });
                }
              },
            },
          ],
          expandable: true,
          onPress: index => {
            LayoutAnimation.configureNext(
              LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
            );
            setNestedMenuIndex(nestedMenuIndex === index ? -1 : index);
          },
        },
      ],
      onPress: index => {
        LayoutAnimation.configureNext(
          LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
        );

        setMenuIndex(menuIndex === index ? -1 : index);
        // setNesIndex(menuIndex === index ? -1 : index);
      },
    },

    {
      name: 'campaigns',
      iconName: menuIndex == 3 ? 'chevron-up' : 'chevron-down',
      iconType: EvilIcons,
      menuItems: [
        // {
        //   Id: '1',
        //   name: 'Events & Community',
        //   expandable: false,
        //   onPress: () => {
        //     {
        //       navigation.navigate('EventAndComunity', {fromDrawer: true});
        //     }
        //   },
        // },
        {
          Id: '2',
          name: 'Out-Reach & Missions',
          expandable: false,
          onPress: () => {
            {
              navigation.navigate('OutReachMissions');
            }
          },
        },
        // {Id: '3', name: 'Who are we?', onPress: () => {}},
      ],

      onPress: index => {
        LayoutAnimation.configureNext(
          LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
        );
        setMenuIndex(menuIndex === index ? -1 : index);
        setNestedMenuIndex(-1);
        setInnerMostMenuIndex(-1);
      },
    },
    {
      name: 'resources',
      iconName: menuIndex == 4 ? 'chevron-up' : 'chevron-down',
      iconType: EvilIcons,
      menuItems: [
        {
          Id: '1',
          name: 'Study',
          nestedMenuItems: [
            {
              id: 's1',
              itemName: 'Sermons & Teachings',
              innerMostMenuItems: [
                {
                  id: 'st1',
                  itemName: 'Recorded Sermons',
                  onPress: () => {
                    navigation.navigate('RecordedSermons', {fromDrawer: true});
                  },
                },
                {
                  id: 'st2',
                  itemName: 'Podcasts',
                  onPress: () => {
                    navigation.navigate('podcasts');
                  },
                },
                {
                  id: 'st3',
                  itemName: 'Video teachings',
                  onPress: () => {
                    navigation.navigate('video_teachings');
                  },
                },
              ],
              expandable: true,
              onPress: index => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
                );
                setInnerMostMenuIndex(
                  innerMostMenuIndex === index ? -1 : index,
                );
              },
            },
            {
              id: 's2',
              itemName: 'Resources for Growth',
              innerMostMenuItems: [
                {
                  id: 'rg1',
                  itemName: 'Recommended Books',
                  onPress: () => {
                    navigation.navigate('RecommandedBooks');
                  },
                },
                {
                  id: 'rg2',
                  itemName: 'Podcast',
                  onPress: () => {
                    navigation.navigate('podcasts');
                  },
                },
                {id: 'rg2', itemName: 'Online Courses', onPress: () => {}},
              ],
              expandable: true,
              onPress: index => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
                );
                setInnerMostMenuIndex(
                  innerMostMenuIndex === index ? -1 : index,
                );
              },
            },
          ],
          expandable: true,
          onPress: index => {
            LayoutAnimation.configureNext(
              LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
            );
            setNestedMenuIndex(nestedMenuIndex === index ? -1 : index);
          },
        },
        {
          Id: '2',
          name: 'Gallery',
          // expandable:true,
          nestedMenuItems: [
            {
              id: 'g1',
              itemName: 'FROR',
              expandable: false,
              onPress: () => {
                navigation.navigate('GalleryFror');
              },
            },
            {
              id: 'g2',
              itemName: 'Testimonials',
              innerMostMenuItems: [
                {id: 'test1', itemName: 'Video', onPress: () => {}},
                {id: 'test2', itemName: 'Audio', onPress: () => {}},
              ],
              expandable: true,
              onPress: index => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
                );

                setInnerMostMenuIndex(
                  innerMostMenuIndex === index ? -1 : index,
                );

                // console.log("🚀 ~ Drawer ~ innerMostMenuIndex:", index)
              },
            },
          ],
          expandable: true,
          onPress: index => {
            LayoutAnimation.configureNext(
              LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
            );
            setNestedMenuIndex(nestedMenuIndex === index ? -1 : index);
            setInnerMostMenuIndex(-1);
          },
        },
        {
          Id: '3',
          name: 'Ministry',
          expandable: false,
          onPress: () => {
            navigation.navigate('Contact');
          },
        },
        {
          Id: '4',
          name: 'Children Corner',
          nestedMenuItems: [
            {
              id: 'cc1',
              itemName: 'Cartoons',
              expandable: false,
              onPress: () => {
                navigation.navigate('cartoons');
              },
            },
            {
              id: 'cc2',
              itemName: 'Animations',
              expandable: false,
              onPress: () => {
                navigation.navigate('animations');
              },
            },
            {
              id: 'cc3',
              itemName: 'Stories',
              expandable: false,
              onPress: () => {
                navigation.navigate('stories');
              },
            },
            {
              id: 'cc4',
              itemName: 'Movies/Documentaries',
              expandable: false,
              onPress: () => {},
            },
          ],
          expandable: true,
          onPress: index => {
            LayoutAnimation.configureNext(
              LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
            );
            setNestedMenuIndex(nestedMenuIndex === index ? -1 : index);
          },
        },
      ],
      onPress: index => {
        LayoutAnimation.configureNext(
          LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
        );
        setMenuIndex(menuIndex === index ? -1 : index);
        setNestedMenuIndex(-1);
        setInnerMostMenuIndex(-1);
      },
    },
    {
      name: 'shop',
      // iconName: menuIndex == 5 ? 'chevron-up' : 'chevron-down',
      iconType: EvilIcons,
      onPress: () => {
        navigation.navigate('StoreScreen');
      },
    },
    // {
    //   name: 'MemberShip',
    //   // iconName: 'chevron-down',
    //   // iconType: EvilIcons,
    //   onPress: () => {
    //     navigation.navigate('MemberShipForm');
    //   },
    // },
    // {
    //   name: 'Calender',
    //   // iconName: 'chevron-down',
    //   // iconType: EvilIcons,
    //   onPress: () => {
    //     navigation.navigate('CalendarScreen');
    //   },
    // },
    {
      name: 'Qr Scan',
      // iconName: 'chevron-down',
      // iconType: EvilIcons,
      onPress: () => {
        navigation.navigate('QrScanScreen');
      },
    },
    {
      name: 'GoodThings',
      // iconName: 'chevron-down',
      // iconType: EvilIcons,
      onPress: () => {
        navigation.navigate('GoodThings');
      },
    },
    {
      name: 'blogs',
      onPress: () => {
        navigation.navigate('BlogScreen');
        // Platform.OS == 'android'
        //   ? ToastAndroid.show(`Action require`, ToastAndroid.SHORT)
        //   : alert(`Action require`);
      },
    },
    {
      name: 'join us',
      iconName: 'chevron-down',
      iconType: EvilIcons,
      menuItems: [
        {
          Id: '1',
          name: 'MemberShip Form',
          onPress: () => {
            navigation.navigate('MemberShipForm');
          },
        },
        {
          Id: '2',
          name: 'Prayer Request',
          onPress: () => {
            {
              navigation.navigate('PrayerRequestForm');
            }
          },
        },
        {
          Id: '3',
          name: 'Contact US',
          onPress: () => {
            // navigation.navigate('Contact');
          },
        },
      ],
      onPress: index => {
        LayoutAnimation.configureNext(
          LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'),
        );
        setMenuIndex(menuIndex === index ? -1 : index);
        // setMenuName(data[index].name);
        setNestedMenuIndex(-1);
        setInnerMostMenuIndex(-1);
      },
      // onPress: () => {
      //   Platform.OS == 'android'
      //     ? ToastAndroid.show(`Action require`, ToastAndroid.SHORT)
      //     : alert(`Action require`);
      // },
    },
  ];

  return (
    <ScreenBoiler
      statusBarBackgroundColor={'white'}
      statusBarContentStyle={'dark-content'}>
      <ScrollView style={{height: windowHeight * 0.85}}>
        <View
          style={{
            overflow: 'hidden',
            width: windowWidth * 0.71,
            backgroundColor: '#D3D3D3',
            height: windowHeight * 0.86,
            borderBottomRightRadius: moderateScale(35, 0.6),
          }}>
          <View style={styles.profileContainer}>
            <View style={styles.Profile}>
              <CustomImage
                resizeMode={'cover'}
                source={
                  userData?.photo
                    ? {uri: `${baseUrl}${userData?.photo}`}
                    : require('../Assets/Images/dummyUser.png')
                }
                style={{width: '100%', height: '100%'}}
              />
            </View>

            <View style={{marginLeft: moderateScale(10, 0.3)}}>
              <CustomText
                style={{fontSize: moderateScale(16, 0.6), color: Color.black}}
                isBold>
                {userData?.name}
              </CustomText>

              <CustomText style={styles.email}>{userData?.email}</CustomText>
            </View>
          </View>
          <View style={styles.container}>
            {data.map((item, index) => (
              <View style={styles.mapView}>
                <TouchableOpacity
                  onPress={
                    item?.menuItems ? () => item?.onPress(index) : item?.onPress
                  }
                  style={styles.btn2}>
                  <CustomText style={styles.text2}>{item.name}</CustomText>
                  {item?.iconName && (
                    <Icon
                      style={{
                        position: 'absolute',
                        right: 0,
                      }}
                      name={item?.iconName}
                      as={item?.iconType}
                      size={moderateScale(25, 0.3)}
                      color={Color.black}
                      onPress={
                        item?.menuItems
                          ? () => item?.onPress(index)
                          : item?.onPress
                      }
                    />
                  )}
                </TouchableOpacity>

                {item?.menuItems && menuIndex === index && (
                  <DrawerDropDown
                    item={item}
                    innerMostMenuIndex={innerMostMenuIndex}
                    nestedMenuIndex={nestedMenuIndex}
                  />
                )}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View
        style={[
          styles.bottom,
          {
            bottom: menuIndex > -1 ? -10 : 50,
          },
        ]}>
        <TouchableOpacity
          onPress={() => {
            dispatch(setUserLogoutAuth());
            dispatch(setUserLogOut());
          }}
          style={styles.btn}>
          <CustomText style={styles.text}>sign out</CustomText>
          <Icon
            name={'logout'}
            as={AntDesign}
            color={Color.black}
            size={moderateScale(16, 0.3)}
          />
        </TouchableOpacity>
      </View>
    </ScreenBoiler>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  Profile: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    borderRadius: (windowWidth * 0.2) / 1,
    borderWidth: 1,
    borderColor: Color.white,
    overflow: 'hidden',
  },
  profileContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(45, 0.3),
    alignItems: 'center',
    marginLeft: moderateScale(10, 0.3),
  },
  subMenu: {
    marginVertical: moderateScale(4, 0.3),
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8, 0.2),
  },
  bottom: {
    marginTop: moderateScale(40, 0.3),
    position: 'absolute',
    left: -15,
  },
  btn: {
    width: windowWidth * 0.45,
    margin: moderateScale(15, 0.3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    paddingHorizontal: moderateScale(10, 0.3),
    fontSize: moderateScale(14, 0.6),
    color: Color.black,
    marginLeft: moderateScale(10, 0.3),
  },
  container: {
    marginLeft: moderateScale(20, 0.3),
    marginTop: moderateScale(25, 0.3),
  },
  text2: {
    fontSize: moderateScale(14, 0.6),
    color: Color.black,
    marginLeft: moderateScale(0, 0.3),
  },
  mapView: {
    borderColor: Color.veryLightGray,
    width: windowWidth * 0.6,
    borderBottomWidth: moderateScale(1, 0.6),
  },
  btn2: {
    width: windowWidth * 0.6,
    borderColor: Color.black,
    marginVertical: moderateScale(10, 0.3),
    flexDirection: 'row',
  },
  email: {
    width: windowWidth * 0.4,
    fontSize: moderateScale(11, 0.6),
    color: Color.black,
  },
});

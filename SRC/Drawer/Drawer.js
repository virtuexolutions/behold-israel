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
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../Components/CustomText';
import {Icon} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useNavigation} from '@react-navigation/native';
import {SetUserRole, setUserLogoutAuth} from '../Store/slices/auth';
import {useDispatch, useSelector} from 'react-redux';
import {setUserLogOut} from '../Store/slices/common';
import navigationService from '../navigationService';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DrawerDropDown from '../Components/DrawerDropDown';

const Drawer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector(state => state.commonReducer.userData);
  const token = useSelector(state => state.authReducer.token);
  const role = useSelector(state => state.authReducer.role);
  const [menuIndices, setMenuIndices] = useState({
    parentIndex: -1,
    childIndex: -1,
    grandChildIndex: -1,
  });
  const [menuIndex, setMenuIndex] = useState(-1);
  const [nestedMenuIndex, setNestedMenuIndex] = useState(-1);
  const [innerMostMenuIndex, setInnerMostMenuIndex] = useState(-1);
  // const [menuName, setMenuName] = useState('');
  const data = [
    {
      name: 'Home',
      // iconName: 'home',
      // iconType: Entypo,
      onPress: () => {
        navigation.navigate('HomeScreen');
      },
    },
    {
      name: 'About us',
      onPress: () => {},
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
              onPress: () => {},
            },
            {id: 'd2', itemName: 'Poor', expandable: false, onPress: () => {}},
            {
              id: 'd3',
              itemName: 'Handicaps',
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
        {
          Id: '2',
          name: 'Support for life',
          nestedMenuItems: [
            {
              id: 'sl1',
              itemName: 'Pregnant Woman',
              expandable: false,
              onPress: () => {},
            },
            {
              id: 'sl2',
              itemName: 'Pregnanat Teenager',
              expandable: false,
              onPress: () => {},
            },
            {
              id: 'sl3',
              itemName: 'Up Keep of the ARK',
              expandable: false,
              onPress: () => {},
            },
            {
              id: 'sl4',
              itemName: 'Utilities',
              expandable: false,
              onPress: () => {},
            },
            {
              id: 'sl5',
              itemName: 'Seminary',
              expandable: false,
              onPress: () => {},
            },
            {
              id: 'sl6',
              itemName: 'Up Keep of the ARK',
              expandable: false,
              onPress: () => {},
            },
            {
              id: 'sl7',
              itemName: 'Support for the priest',
              expandable: false,
              onPress: () => {},
            },
            {
              id: 'sl8',
              itemName: 'Support for the religious',
              expandable: false,
              onPress: () => {},
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
              onPress: () => {},
            },
            {
              id: 'ns2',
              itemName: 'Monthly',
              expandable: false,
              onPress: () => {},
            },
            {
              id: 'ns3',
              itemName: 'Quarterly',
              expandable: false,
              onPress: () => {},
            },
            {
              id: 'ns4',
              itemName: 'Termly',
              expandable: false,
              onPress: () => {},
            },
            {
              id: 'ns5',
              itemName: 'Annually',
              expandable: false,
              onPress: () => {},
            },
            {
              id: 'ns6',
              itemName: 'Support for the Ministry',
              expandable: false,
              onPress: () => {},
            },
            {
              id: 'ns7',
              itemName: 'Second Collection',
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
        // setNesIndex(menuIndex === index ? -1 : index);
      },
    },

    {
      name: 'campaigns',
      iconName: menuIndex == 3 ? 'chevron-up' : 'chevron-down',
      iconType: EvilIcons,
      menuItems: [
        {
          Id: '1',
          name: 'Events & Community',
          expandable: false,
          onPress: () => {},
        },
        {
          Id: '2',
          name: 'Out-Reach & Missions',
          expandable: false,
          onPress: () => {},
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
                {id: 'st1', itemName: 'Recorded Sermons', onPress: () => {}},
                {id: 'st2', itemName: 'Podcasts', onPress: () => {}},
                {id: 'st3', itemName: 'Video teachings', onPress: () => {}},
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
                {id: 'rg1', itemName: 'Recommended Books', onPress: () => {}},
                {id: 'rg2', itemName: 'Podcast', onPress: () => {}},
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
            {id: 'g1', itemName: 'FROR', expandable: false, onPress: () => {}},
            {
              id: 'g2',
              itemName: 'Testimonials',
              innerMostMenuItems: [
                {id: 'test1', itemName: 'Video', onPress: () => {}},
                {id: 'test2', itemName: 'Audio', onPress: () => {}},
              ],
              expandable: true,
              onPress: (index) => {
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
        {Id: '3', name: 'Ministry', expandable: false, onPress: () => {}},
        {
          Id: '4',
          name: 'Children Corner',
          nestedMenuItems: [
            {
              id: 'cc1',
              itemName: 'Cartoons',
              expandable: false,
              onPress: () => {},
            },
            {
              id: 'cc2',
              itemName: 'Animations',
              expandable: false,
              onPress: () => {},
            },
            {
              id: 'cc3',
              itemName: 'Stories',
              expandable: false,
              onPress: () => {},
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
      onPress: () => {},
    },
    // {
    //   name: 'MemberShip',
    //   // iconName: 'chevron-down',
    //   // iconType: EvilIcons,
    //   onPress: () => {
    //     navigation.navigate('MemberShipForm');
    //   },
    // },
    {
      name: 'Calender',
      // iconName: 'chevron-down',
      // iconType: EvilIcons,
      onPress: () => {
        navigation.navigate('CalendarScreen');
      },
    },
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
        Platform.OS == 'android'
          ? ToastAndroid.show(`Action require`, ToastAndroid.SHORT)
          : alert(`Action require`);
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
        {Id: '2', name: 'Prayer Request', onPress: () => {}},
        {Id: '3', name: 'Contact US', onPress: () => {}},
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
      <ScrollView style={{height: windowHeight}}>
        <View
          style={{
            overflow: 'hidden',
            width: windowWidth * 0.71,
            backgroundColor: '#D3D3D3',
            height: windowHeight,
            borderTopRightRadius: moderateScale(35, 0.6),
            borderBottomRightRadius: moderateScale(35, 0.6),
          }}>
          <View
            style={{
              // backgroundColor :'red',
              // marginTop :moderateScale(10,.6),
              flexDirection: 'row',
              // position :'absolute',

              marginTop: moderateScale(45, 0.3),
              alignItems: 'center',
              marginLeft: moderateScale(10, 0.3),
            }}>
            <View style={styles.Profile}>
              <CustomImage
                resizeMode={'cover'}
                source={require('../Assets/Images/dummyUser.png')}
                style={{width: '100%', height: '100%'}}
              />
            </View>

            <View style={{marginLeft: moderateScale(10, 0.3)}}>
              <CustomText
                style={{fontSize: moderateScale(16, 0.6), color: Color.black}}
                isBold>
                john
              </CustomText>

              <CustomText
                style={{
                  width: windowWidth * 0.4,
                  fontSize: moderateScale(11, 0.6),
                  color: Color.black,
                }}>
                john@gmail.com
              </CustomText>
            </View>
          </View>

          <View
            style={{
              marginLeft: moderateScale(20, 0.3),
              marginTop: moderateScale(25, 0.3),
            }}>
            {data.map((item, index) => (
              <View
                style={{
                  borderColor: Color.veryLightGray,
                  width: windowWidth * 0.6,

                  borderBottomWidth: moderateScale(1, 0.6),
                }}>
                <TouchableOpacity
                  onPress={
                    item?.menuItems ? () => item?.onPress(index) : item?.onPress
                  }
                  style={{
                    // width :'100%',
                    width: windowWidth * 0.6,
                    // justifyContent :'space-around',
                    // borderBottomWidth: 0.5,
                    borderColor: Color.black,
                    marginVertical: moderateScale(10, 0.3),
                    flexDirection: 'row',

                    // alignItems: 'center',
                  }}>
                  <CustomText
                    style={{
                      fontSize: moderateScale(14, 0.6),
                      color: Color.black,
                      marginLeft: moderateScale(0, 0.3),
                    }}>
                    {item.name}
                  </CustomText>
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
                      onPress={item?.onPress}
                    />
                  )}
                </TouchableOpacity>

                {item?.menuItems && menuIndex === index && (
                 <DrawerDropDown item={item} 
                  innerMostMenuIndex={innerMostMenuIndex}
                  nestedMenuIndex={nestedMenuIndex}
                 />
                 // <View style={{paddingLeft: moderateScale(7, 0.4)}}>
                  //   {item.menuItems.map((subMenu, index) => (
                  //     <View>
                  //       <TouchableOpacity
                  //         key={index}
                  //         onPress={
                  //           subMenu?.nestedMenuItems
                  //             ? () => subMenu?.onPress(index)
                  //             : subMenu?.onPress
                  //         }>
                  //         <View style={styles.subMenu}>
                  //           <CustomText style={{color: Color.themeBlack}}>
                  //             {subMenu.name}
                  //           </CustomText>

                  //           {subMenu?.expandable && (
                  //             <Icon
                  //               as={AntDesign}
                  //               name={
                  //                 nestedMenuIndex == index
                  //                   ? 'caretup'
                  //                   : 'caretdown'
                  //               }
                  //               size={moderateScale(7, 0.4)}
                  //             />
                  //           )}
                  //         </View>
                  //       </TouchableOpacity>
                  //       {subMenu.nestedMenuItems &&
                  //         nestedMenuIndex === index && (
                  //           <View
                  //             style={{
                  //               paddingLeft: moderateScale(7, 0.4),
                  //             }}>
                  //             {/* {subMenu?.nestedMenuItems} */}
                  //             {subMenu.nestedMenuItems.map(
                  //               (menuItem, nestedIndex) => (
                  //                 <>
                  //                   <TouchableOpacity
                  //                     key={nestedIndex}
                  //                     onPress={menuItem?.innerMostMenuItems ? 
                  //                       () => {
                  //                         menuItem?.onPress(nestedIndex)}
                  //                         : menuItem?.onPress
                  //                       }>
                  //                     <View style={styles.subMenu}>
                  //                       <CustomText
                  //                         style={{color: Color.themeDarkGray}}>
                  //                         {menuItem?.itemName}
                  //                       </CustomText>
                  //                       {menuItem?.expandable && (
                  //                         <Icon
                  //                           as={AntDesign}
                  //                           name={
                  //                             nestedIndex == index
                  //                               ? 'caretup'
                  //                               : 'caretdown'
                  //                           }
                  //                           size={moderateScale(7, 0.4)}
                  //                         />
                  //                       )}
                  //                     </View>
                  //                   </TouchableOpacity>
                  //                   {menuItem?.innerMostMenuItems &&
                  //                   innerMostMenuIndex === nestedIndex &&
                  //                      (
                  //                       <View
                  //                         style={{
                  //                           paddingLeft: moderateScale(7, 0.4),
                  //                         }}>
                  //                         {menuItem?.innerMostMenuItems.map(
                  //                           (innerMenuItem, innerMostIndex) => (
                                          
                  //                             <TouchableOpacity
                  //                               key={nestedIndex}
                  //                               onPress={
                  //                                 innerMenuItem?.onPress
                  //                               }>
                  //                               <View style={styles.subMenu}>
                  //                                 <CustomText
                  //                                   style={{
                  //                                     color:
                  //                                       Color.themeDarkGray,
                  //                                   }}>
                  //                                   {innerMenuItem?.itemName}
                  //                                 </CustomText>
                  //                               </View>
                  //                             </TouchableOpacity>
                  //                           ),
                  //                         )}
                  //                       </View>
                  //                     )}
                  //                 </>
                  //               ),
                  //             )}
                  //           </View>
                  //         )}
                  //     </View>
                  //   ))}
                  // </View>
                )}
                {/* <View style={{borderwidth: 1, }}></View> */}
              </View>
            ))}
          </View>
          {/* )} */}
        </View>

        <View
          style={{
            // marginLeft: moderateScale(5, 0.3),
            marginTop: moderateScale(40, 0.3),
            position: 'absolute',
            bottom: menuIndex > -1 ? -10 : 50,
            left: -15,
          }}>
          <TouchableOpacity
            onPress={() => {
              dispatch(setUserLogoutAuth());
              dispatch(setUserLogOut());
            }}
            style={{
              width: windowWidth * 0.45,
              margin: moderateScale(15, 0.3),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CustomText
              style={{
                paddingHorizontal: moderateScale(10, 0.3),
                fontSize: moderateScale(14, 0.6),
                color: Color.black,
                marginLeft: moderateScale(10, 0.3),
              }}>
              sign out
            </CustomText>
            <Icon
              name={'logout'}
              as={AntDesign}
              // style={styles.icon2}
              color={Color.black}
              size={moderateScale(16, 0.3)}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  subMenu: {
    marginVertical: moderateScale(4, 0.3),
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8, 0.2),
  },
});

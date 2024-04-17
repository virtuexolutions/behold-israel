import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import CustomText from './CustomText';
import AntDesign from "react-native-vector-icons/AntDesign";
import Color from '../Assets/Utilities/Color';

import { Icon } from 'native-base';


const DrawerDropDown = ({item, innerMostMenuIndex, nestedMenuIndex}) => {
  return (
    <View style={{paddingLeft: moderateScale(7, 0.4)}}>
    {item.menuItems.map((subMenu, index) => (
      <View>
        <TouchableOpacity
          key={index}
          onPress={
            subMenu?.nestedMenuItems
              ? () => subMenu?.onPress(index)
              : subMenu?.onPress
          }>
          <View style={styles.subMenu}>
            <CustomText style={{color: Color.themeBlack}}>
              {subMenu.name}
            </CustomText>

            {subMenu?.expandable && (
              <Icon
                as={AntDesign}
                name={
                  nestedMenuIndex == index
                    ? 'caretup'
                    : 'caretdown'
                }
                size={moderateScale(7, 0.4)}
              />
            )}
          </View>
        </TouchableOpacity>
        {subMenu.nestedMenuItems &&
          nestedMenuIndex === index && (
            <View
              style={{
                paddingLeft: moderateScale(7, 0.4),
              }}>
              {/* {subMenu?.nestedMenuItems} */}
              {subMenu.nestedMenuItems.map(
                (menuItem, nestedIndex) => (
                  <>
                    <TouchableOpacity
                      key={nestedIndex}
                      onPress={menuItem?.innerMostMenuItems ? 
                        () => {
                          menuItem?.onPress(nestedIndex)}
                          : menuItem?.onPress
                        }>
                      <View style={styles.subMenu}>
                        <CustomText
                          style={{color: Color.themeDarkGray}}>
                          {menuItem?.itemName}
                        </CustomText>
                        {menuItem?.expandable && (
                          <Icon
                            as={AntDesign}
                            name={
                              innerMostMenuIndex == nestedIndex
                                ? 'caretup'
                                : 'caretdown'
                            }
                            size={moderateScale(7, 0.4)}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                    {menuItem?.innerMostMenuItems &&
                    innerMostMenuIndex === nestedIndex &&
                       (
                        <View
                          style={{
                            paddingLeft: moderateScale(7, 0.4),
                          }}>
                          {menuItem?.innerMostMenuItems.map(
                            (innerMenuItem, innerMostIndex) => (
                          
                              <TouchableOpacity
                                key={nestedIndex}
                                onPress={
                                  innerMenuItem?.onPress
                                }>
                                <View style={styles.subMenu}>
                                  <CustomText
                                    style={{
                                      color:
                                        Color.themeDarkGray,
                                    }}>
                                    {innerMenuItem?.itemName}
                                  </CustomText>
                                </View>
                              </TouchableOpacity>
                            ),
                          )}
                        </View>
                      )}
                  </>
                ),
              )}
            </View>
          )}
      </View>
    ))}
  </View>
  )
}

export default DrawerDropDown;

const styles = StyleSheet.create({
    subMenu: {
        marginVertical: moderateScale(4, 0.3),
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(8, 0.2),
      },
})
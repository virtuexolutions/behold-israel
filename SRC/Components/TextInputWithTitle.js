import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  I18nManager,
  Platform,
} from 'react-native';

import {Icon} from 'native-base';
import Color from '../Assets/Utilities/Color';
import {useState} from 'react';
import {moderateScale, scale, ScaledSheet} from 'react-native-size-matters';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomText from './CustomText';

const TextInputWithTitle = props => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {props?.title && (
        <CustomText
          style={[
            {
              color: Color.veryLightGray,
              fontSize: moderateScale(12, 0.3),
              marginBottom: moderateScale(5, 0.3),
              width: windowWidth * props.viewWidth,
              // marginTop : ,
              marginTop: props.marginTop
                ? props.marginTop
                : moderateScale(10, 0.3),
            },
            props?.titleStlye,
          ]}>
          {props?.title}
        </CustomText>
      )}
      <View
        style={[
          styles.fieldSet,
          props.style,
          {
            width: windowWidth * props.viewWidth,
            borderWidth: props.border,
            // borderColor: Color.veryLightGray,
            backgroundColor: props.backgroundColor,
          },
          props.elevation && {
            shadowColor: Color.themeColor,
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          },
          props.marginBottom && {
            marginBottom: props.marginBottom,
          },
          props.autoCapitalize && {
            textTransform: props.autoCapitalize,
          },
          props.borderRadius && {
            borderRadius: props.borderRadius,
          },
          props.multiline && {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          },
          props.viewHeight && {
            height: windowHeight * props.viewHeight,
          },

          props.marginTop >= 0 && {
            marginTop: props.marginTop,
          },
          props.alignItems && {
            alignItems: props.alignItems,
          },
          props.iconName &&
            !props.rightIcon && {
              paddingLeft: moderateScale(15, 0.3),
            },
        ]}>
        {props.iconName && (
          <Icon
            name={props.iconName}
            as={props.iconType}
            style={[
              {
                // backgroundColor :'red',
                textAlign: 'center',
                color: (props.color && !props.disable) ? props.color : Color.veryLightGray,
                // fontSize: moderateScale(18, 0.6),
                // paddingLeft: Dimensions.get("window").width * 0.0175,
              },
              props.numberOfLines > 1 && {
                paddingTop: Dimensions.get('window').height * 0.005,
              },
              props.iconHeigth && {
                height: windowHeight * props.iconHeigth,
              },
              props.rightIcon && {
                position: 'absolute',
                right: moderateScale(10, 0.3),
              },
            ]}
            size={moderateScale(17, 0.3)}
            onPress={props.rightIcon  ? props.onPressRight :  props.onPressLeft}
          />
        )}

        {props.secureText ? (
          <>
            <TextInput
              style={[
                {
                  width: windowWidth * props.inputWidth,
                },
                Platform.OS === 'android'
                  ? [
                      styles.inputBox,
                      {
                        paddingBottom: 10,
                        fontSize: props?.fontSize
                          ? props?.fontSize
                          : moderateScale(12, 0.6),
                        fontWeight: '400',
                      },
                    ]
                  : [
                      styles.inputBox,
                      {
                        paddingBottom: 0,
                        
                      },
                    ],
              ]}
              onChangeText={text => props.setText(text)}
              value={props.value}
              secureTextEntry={!showPassword}
              placeholder={`${props.placeholder}`}
              placeholderTextColor={
                props.placeholderColor ? props.placeholderColor : Color.white
              }
              keyboardType={props.keyboardType}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
              style={{
                paddingHorizontal: Dimensions.get('window').width * 0.04,
                position: 'absolute',
                right: 0,
                height:
                  Platform.OS === 'android'
                    ? Dimensions.get('window').height * 0.0725
                    : Dimensions.get('window').height * 0.0525,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: "red",
              }}>
              <Icon
                name={showPassword ? 'eye' : 'eye-slash'}
                as={FontAwesome}
                color={Color.themeLightGray}
                size={moderateScale(18, 0.3)}
              />
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity activeOpacity={1} onPress={props.onPressLeft}>
            <TextInput
              maxLength={props?.maxLength}
              style={[
                {
                  width: windowWidth * props.inputWidth,
                },
                Platform.OS === 'android'
                  ? styles.inputBox
                  : [styles.inputBox, {paddingBottom: 0}],
                props.numberOfLines > 1 && {
                  textAlignVertical: 'top',
                },
                props.inputHeight && {
                  height: windowHeight * props.inputHeight,
                },
                props.disable && {
                  color: Color.veryLightGray,
                },
                props.multiline && {
                  paddingTop: moderateScale(10, 0.5),
                  textAlignVertical: 'top',
                  marginLeft: moderateScale(15, 0.3),
                },
                props.color && {
                  color: Color.black,
                },
                props.inputColor && {
                  color: props.inputColor,
                },
              ]}
              onChangeText={text => props.setText(text)}
              value={props.value}
              placeholder={`${props.placeholder}`}
              placeholderTextColor={
                props.placeholderColor ? props.placeholderColor : Color.white
              }
              keyboardType={props.keyboardType}
              multiline={props.multiline || false}
              numberOfLines={props.numberOfLines || 1}
              editable={props.disable ? false : true}
              autoCapitalize="none"
              // onPressIn={()=>{console.log('fdadsas');}}
              // textAlignVertical={props.textAlignVertical}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};
const styles = ScaledSheet.create({
  fieldSet: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.06,
    backgroundColor: Color.white,
    borderRadius: 8,
    alignItems: 'center',
    // justifyContent: 'center',
    borderColor: Color.lightGrey,
    flexDirection: 'row',
    placeholderTextColor: Color.white,
    // textTransform: 'capitalize',
  },
  inputBox: {
    paddingLeft: moderateScale(20, 0.6),
    borderRadius: 8,
    // fontSize: moderateScale(25, 0.3),
    // textTransform: 'capitalize',

    // fontFamily: 'PlusJakartaDisplay-Regular',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    color: Color.themeLightGray,
  },
});
export default TextInputWithTitle;

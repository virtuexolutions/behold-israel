import React, {useState, useEffect} from 'react';
import {Dimensions, View} from 'react-native';
import {scale, moderateScale, ScaledSheet} from 'react-native-size-matters';
import SelectDropdown from 'react-native-select-dropdown';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Color from '../Assets/Utilities/Color';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {windowWidth} from '../Utillity/utils';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DropDownSingleSelect = ({
  array,
  item,
  setItem,
  placeholder,
  buttonTextAfterSelection,
  rowTextForSelection,
  disabled,
  backgroundColor,
  width,
  iconName,
  iconType,
  extreme,
  inRow,
  myJobs,
  Colors,
  elevation,
  dropdownStyle,
  borderColor
}) => {
  const [data , setData] = useState([])

  useEffect(() => {
    setData([])
    array?.map((x , index)=>{
      return(
        typeof(array[0]) == 'object' ? setData((prev)=>[...prev , x?.name]) :setData(prev=>[...prev , x])
      )
    })
    
  }, [])
  

  return (
    <View
      style={[
        styles.main,
        !iconName && {
          paddingLeft: 0,
          marginBottom: 10,
        },
        myJobs && {
          backgroundColor: Color.themeInputText,
          width: width * 0.5,
          marginTop: 0,
          alignItems: 'center',
          borderRadius: 10,
          
          borderWidth: 1,
        },
        elevation && {
          shadowColor: Color.themeColor,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 9,
          
        },
      

        extreme && {
          width: width * 1.13,
        },
        inRow && {
          width: windowWidth * 0.35,
          marginTop: 0,
          // borderWidth: 0,
        },
        dropdownStyle,
      ]}>
      {iconName && (
        <Icon
          name={iconName}
          as={iconType}
          size={moderateScale(22, 0.3)}
          color={Color.veryLightGray}
          style={[
            styles.icon2,
            backgroundColor && {color: Color.themeGray},
            myJobs && {color: '#ffffff00'},
          ]}
        />
      )}
      <SelectDropdown
        data={data}
        defaultValue={item}
        buttonStyle={{
          ...styles.dropDownBtn,
          width: width * 0.89,

          ...(disabled && {backgroundColor: `${Color.veryLightGray}90`}),
          ...(myJobs && {
            backgroundColor: `${Color.themeInputText}`,
            width: windowWidth * 0.35,
            borderRadius: 40,
          }),
          ...(borderColor && {borderColor:borderColor, borderWidth:1, borderRadius:moderateScale(10,.6)}),
          ...(backgroundColor && {
            backgroundColor: backgroundColor,
          }),
          
          ...(!iconName && {
            width: width,
          }),
        }}
        buttonTextStyle={{
          ...styles.dropDownBtnText,
          ...(item !== '' && {color: Colors ? Colors : Color.themeBlack}),
          ...(backgroundColor && {
            color: `${Color.white}`,
            fontSize: moderateScale(18, 0.3),
          }),
        }}
        dropdownStyle={{
          // backgroundColor :'red',
          height :height*0.19,
          width: width,
          borderRadius: moderateScale(10, 0.3),
          marginTop: -height * 0.06,

          ...(iconName && {
            position: 'absolute',
            left: moderateScale(40, 0.6),
          }),
         
        }}
        rowStyle={{...styles.dropDownRow}}
        rowTextStyle={{
          ...styles.dropDownRowText,
        }}
        selectedRowStyle={{
          backgroundColor: Color.splashBGMiddle,
        }}
        defaultButtonText={placeholder}
        renderDropdownIcon={() => {
          return (
            <>
              <Icon
                name="chevron-small-down"
                as={Entypo}
                size={moderateScale(27, 0.3)}
                style={[
                  styles.icon,
                  extreme && {
                    position: 'absolute',
                    left: -8,
                  },
                  backgroundColor && {color: Color.themeGray},
                ]}
              />
            </>
          );
        }}
        onSelect={(selectedItem, index) => {
          setItem(selectedItem);
        }}
        buttonTextAfterSelection={buttonTextAfterSelection}
        rowTextForSelection={rowTextForSelection}
        disabled={disabled}
        backgroundColor={backgroundColor}
      />
    </View>
  );
};
const styles = ScaledSheet.create({
  dropDownBtn: {
    backgroundColor: Color.white,
    height: height * 0.07,
    borderRadius: moderateScale(25, 0.3),
  },
  main: {
    position: 'relative',
    backgroundColor: Color.themeInputText,
    height: height * 0.06,
    borderBottomWidth: moderateScale(1, 0.3),
    borderColor: Color.lightGrey,
    // borderWidth:1,
    marginTop: moderateScale(15, 0.3),
    // borderRadius: moderateScale(20, 0.3),
    paddingLeft: moderateScale(32, 0.3),
    width: width * 0.81,
  },
  dropDownBtnText: {
    //////
    // backgroundColor: "red",
    width: width * 0.75,
    // marginLeft: 38,
    fontSize: moderateScale(15, 0.3),
    color: Color.themeLightGray,
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  dropDownRow: {
    backgroundColor: Color.white,
  },
  dropDownRowText: {
    width: width * 0.75,
    fontSize: moderateScale(16, 0.3),
    color: 'black',
    textAlign: 'left',
    textTransform: 'capitalize',
    marginLeft: moderateScale(15, 0.3),
  },
  icon: {
    marginTop: 3,
    color: Color.themeBlack,
  },
  icon2: {
    color: Color.themeColor,
    position: 'absolute',
    left: moderateScale(10, 0.3),
    top: moderateScale(12, 0.3),
  },
});

export default DropDownSingleSelect;

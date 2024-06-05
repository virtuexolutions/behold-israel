import { FlatList, ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { windowHeight, windowWidth } from '../Utillity/utils'
import OldTestment from '../Components/OldTestment'
import CustomText from '../Components/CustomText'
import { Icon } from 'native-base'
import Feather from "react-native-vector-icons/Feather";
import Ionicons from 'react-native-vector-icons/Ionicons'
// import CardContainer from '../Components/CardContainer'

const TestmentsScreeen = ({route, navigation}) => {
const fromTabs = route?.params?.fromTab;
    console.log("🚀 ~ TestmentsScreeen ~ fromTabs:", fromTabs)
    const OldTestmentBooksName = [


        'Genesis',
        'Exodus',
        'Leviticus',
        'Numbers',
        'Deuteronomy',
        'Joshua',
        'Judges',
        'Ruth',
        '1Samuel',
        '2Samuel',
        '1Kings',
        '2Kings',
        ' 1Chronicles',
        '2Chronicles',
        'Ezra',
        ' Nehemiah',
        'Esther',
        'Job',
        'Psalms',
        'Proverbs',
        'Ecclesiastes',
        'SongofSolomon',
        'Isaiah',
        'Jeremiah',
        'Lamentations',
        'Ezekiel',
    ]
    // const newTestmentBooksName = [

    //     'Matthew',
    //     'Mark',
    //     'Luke',
    //     'John',
    //     'Acts',
    //     'Romans',
    //     '1Corinthians',
    //     '2Corinthians',
    //     'Galatians',
    //     'Ephesians',
    //     'Philippians',
    //     'Colossians',
    //     '1Thessalonians',
    //     '2Thessalonians',
    //     '1Timothy',
    //     '2Timothy',
    //     'Titus',
    //     'Philemon',
    //     'Hebrews',
    //     'James',
    //     '1Peter',
    //     '2Peter',
    //     '1John',
    //     '2John',
    //     '3John',
    //     'Jude',
    //     'Revelation'

    // ]

    return (
        <ImageBackground
            style={{
                width: windowWidth,
                height: fromTabs ? windowHeight * 0.94 : windowHeight,
                paddingBottom: moderateScale(40, 0.6),
                alignItems: 'center',
            }}
            resizeMode="cover"
            source={require('../Assets/Images/recorded.png')}>
                           <View
        style={{
          height: moderateScale(30, 0.3),
          width: moderateScale(30, 0.3),
          borderRadius: moderateScale(5, 0.3),
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex:1,
          top: 35,
          left:20,
        }}>
           <Icon
          style={{
            textAlign:'center',
            height :windowHeight*0.05,
            width:windowHeight*0.05,
            borderRadius :windowHeight*0.05 /2,
            backgroundColor : fromTabs ? Color.white :'transparent',
            paddingTop: moderateScale(6.6),

            // marginTop :moderateScale
          }}
            name={fromTabs ? 'menu': 'arrow-back'}
            as={fromTabs ? Feather : Ionicons}
            size={moderateScale(25, 0.3)}
            color={fromTabs ? Color.black : Color.white}
            onPress={() => {
                if(fromTabs){
              navigation.toggleDrawer();
            }
            else{
                navigation.goBack();
            }
              // navigationN.dispatch(DrawerActions.toggleDrawer())
              
            }}
          />
        </View>
            <CustomText
                numberOfLines={1}
                isBold
                style={styles.heading}>
                Old Testment
            </CustomText>
            <FlatList
                showsVerticalScrollIndicator={true}
                nestedScrollEnabled={true}
                scrollEnabled={true}
                contentContainerStyle={{
                    borderRadius: moderateScale(10, .6),
                    borderColor: Color.white,
                    width: windowWidth * 0.85,
                    // height: windowHeight,
                    alignItems: 'center',
                    borderWidth: moderateScale(1, .6),
                    padding: moderateScale(20, .6),
                    paddingBottom: moderateScale(20, .6)
                }}
                data={OldTestmentBooksName}
                renderItem={({ item, index }) => {
                    return (
                        // <CardContainer item={item}/>
                        <OldTestment item={item} />
                    );
                }}
            />
        </ImageBackground>

    )
}

export default TestmentsScreeen

const styles = StyleSheet.create({
    heading:{
        fontSize: moderateScale(20, 0.6),
        color: Color.white,
        paddingVertical: moderateScale(5, .6),
        width: windowWidth * 0.6,
        textAlign: 'center',
        paddingVertical: moderateScale(30, .6)
    },
})
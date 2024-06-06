import { StyleSheet, FlatList, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import { moderateScale } from 'react-native-size-matters'
import CustomText from '../Components/CustomText'
import CustomImage from '../Components/CustomImage'
import { Icon } from 'native-base'
import AntDesgin from 'react-native-vector-icons/AntDesign'
import Color from '../Assets/Utilities/Color'
import CustomButton from '../Components/CustomButton'
import LectureCards from '../Components/LectureCards'

const RecordedLecture = () => {
    const dummyArray =[
    {
        image :require('../Assets/Images/lecture2.png'),
        title:'Lorem Ipsum Dolor Sit',
        descriptoin:'Lorem Ipsum Dolor Sit',
        views: '43K views 10 days ago'
    },
    {
        image :require('../Assets/Images/lecture5.png'),
        title:'Lorem Ipsum Dolor Sit',
        descriptoin:'Lorem Ipsum Dolor Sit',
        views: '43K views 10 days ago'
    },
    {
        image :require('../Assets/Images/lecture3.png'),
        title:'Lorem Ipsum Dolor Sit',
        descriptoin:'Lorem Ipsum Dolor Sit',
        views: '43K views 10 days ago'
    },
    {
        image :require('../Assets/Images/lecture6.png'),
        title:'Lorem Ipsum Dolor Sit',
        descriptoin:'Lorem Ipsum Dolor Sit',
        views: '43K views 10 days ago'
    },
  
    ]
    return (
        <>
            <View style={{
                height: windowHeight * 0.3,
                width: windowWidth,
            }}>
                <CustomImage style={{
                    height: '100%',
                    width: '100%',
                }} source={require('../Assets/Images/church.png')} />

            </View>
            <ImageBackground
                style={{
                    width: windowWidth,
                    minHeight: windowHeight,
                    paddingBottom: moderateScale(40, 0.6),
                    // justifyContent: 'center',
                    // alignItems: 'center',
                }}
                source={require('../Assets/Images/recorded.png')}>


                <View style={styles.rowView}>
                    <CustomText
                        numberOfLines={1}
                        isBold
                        style={styles.heading}>
                        Recorded Lecture
                    </CustomText>
                    <View style={styles.rowView2}>
                        <CustomText
                            style={styles.text}>
                            14
                        </CustomText>
                        <Icon name='like1' as={AntDesgin} size={22} color={Color.white} />
                        <CustomText
                            numberOfLines={1}
                            isBold
                            style={[styles.text ,
                            {
                                fontSize:moderateScale(30,.6)
                            }]}>
                            |
                        </CustomText>
                        <CustomText
                            numberOfLines={1}
                            isBold
                            style={styles.text}>
                            0
                        </CustomText>
                        <Icon style={styles.icon} name='dislike1' as={AntDesgin} size={22} color={Color.white} />
                    </View>
                </View>
                <CustomText
                    numberOfLines={2}
                    isBold
                    style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna dolor, efficitur pulvinar placerat sed, auctor vestibulum elit.
                </CustomText>
                <CustomText
                    
                    style={styles.text2}>
                        43K views 10 days ago
                </CustomText>
                <FlatList
                showsVerticalScrollIndicator={true}
                nestedScrollEnabled={true}
                scrollEnabled={true}
                contentContainerStyle={{
                    marginHorizontal:moderateScale(10,.3),
                    marginVertical:moderateScale(10,.3),
                        padding: moderateScale(10, .6),
                    paddingBottom: moderateScale(350, .6)
                }}
                data={dummyArray}
                renderItem={({ item, index }) => {
                    return (
                 <LectureCards item={item}/>
                    );
                }}
            />
            </ImageBackground>
        </>

    )
}

export default RecordedLecture

const styles = StyleSheet.create({
    rowView:{
        flexDirection: 'row',  
        width: windowWidth * 0.5,
    },
   rowView2: {
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth * 0.3
    },
    heading:{
        fontSize: moderateScale(20, 0.6),
        color: Color.white,
        paddingVertical: moderateScale(10, .6),
        width: windowWidth * 0.67,
        paddingHorizontal: moderateScale(10, .6)
    },
    text:{
        fontSize: moderateScale(14, 0.6),
        color: Color.white,
        textAlign: 'center',
        paddingHorizontal: moderateScale(5, .6)
    },
    icon:{

        width: windowWidth * 0.2,
        height: windowHeight * 0.04,
        paddingTop: moderateScale(10, .6)
    },
    description:{
        fontSize: moderateScale(12, 0.6),
        color: Color.white,
        // paddingVertical: moderateScale(10, .6),
        width: windowWidth * 0.8,
        textAlign: 'left',
        paddingHorizontal: moderateScale(10, .6)
    },
    text2:{
        fontSize: moderateScale(12, 0.6),
        color: Color.white,
        paddingVertical: moderateScale(10, .6),
        width: windowWidth*0.95,
        textAlign: 'left',
        // backgroundColor:'red',
        marginHorizontal: moderateScale(10, .6),
        borderBottomWidth:moderateScale(1,.6),
        borderColor:Color.white
    },

})
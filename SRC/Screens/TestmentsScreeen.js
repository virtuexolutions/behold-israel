import { FlatList, ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'
import { windowHeight, windowWidth } from '../Utillity/utils'
import OldTestment from '../Components/OldTestment'
import CustomText from '../Components/CustomText'
// import CardContainer from '../Components/CardContainer'

const TestmentsScreeen = () => {

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
                minHeight: windowHeight,
                paddingBottom: moderateScale(40, 0.6),
                alignItems: 'center',
            }}
            resizeMode="cover"
            source={require('../Assets/Images/recorded.png')}>
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
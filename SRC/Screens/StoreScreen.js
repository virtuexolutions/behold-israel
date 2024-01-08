import { ImageBackground, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import { moderateScale } from 'react-native-size-matters'
import CustomText from '../Components/CustomText'
import SearchbarComponent from '../Components/SearchbarComponent'
import CustomButton from '../Components/CustomButton'
import CustomImage from '../Components/CustomImage'
import Color from '../Assets/Utilities/Color'
import KidsCards from '../Components/KidsCards'

const StoreScreen = () => {

    const cardsArray = [
        {
            image: require('../Assets/Images/cardpic1.png'),
            title: 'Lorem ipsum dolor',
            price: '$74.00'
        },
        {
            image: require('../Assets/Images/cardpic2.png'),
            title: 'Lorem ipsum dolor',
            price: '$74.00'
        },
        {
            image: require('../Assets/Images/cardpic6.png'),
            title: 'Lorem ipsum dolor',
            price: '$74.00'
        },
        {
            image: require('../Assets/Images/cardpic4.png'),
            title: 'Lorem ipsum dolor',
            price: '$74.00'
        },
        {
            image: require('../Assets/Images/cardpic5.png'),
            title: 'Lorem ipsum dolor',
            price: '$74.00'
        },
        {
            image: require('../Assets/Images/cardpic3.png'),
            title: 'Lorem ipsum dolor',
            price: '$74.00'
        },
    ]

    return (
        <ImageBackground
            style={{
                width: windowWidth,
                minHeight: windowHeight,
                paddingBottom: moderateScale(40, 0.6),
            }}
            source={require('../Assets/Images/recorded.png')}>
            <CustomText
                numberOfLines={1}
                isBold
                style={styles.Heading}>
                store
            </CustomText>
            <View style={styles.rowContainner}>
                <SearchbarComponent
                    placeHolderColor={Color.veryLightGray}
                    placeholderName={'What do you need?'}
                    SearchStyle={{
                        width: windowWidth * 0.75,
                        backgroundColor: Color.white,
                    }} />
                <CustomButton
                    bgColor={Color.theme2}
                    textColor={Color.white}
                    width={windowHeight * 0.06}
                    height={windowHeight * 0.06}
                    text={'all'}
                    fontSize={moderateScale(14, 0.3)}
                    borderRadius={windowHeight * 0.06 / 2}
                />
            </View>
            <View style={[styles.rowContainner, {
                paddingTop: moderateScale(15, .3)
            }]}>

                <CustomText
                    numberOfLines={1}
                    isBold
                    style={styles.heading2}>
                    New arrivals
                </CustomText>
                <CustomButton
                    text={'See All Collection'}
                    textColor={Color.veryLightGray}
                    fontSize={moderateScale(13, .6)}
                />
            </View>

            <FlatList
                showsVerticalScrollIndicator={true}
                nestedScrollEnabled={true}
                scrollEnabled={true}
                numColumns={2}
                contentContainerStyle={{
                    marginHorizontal: moderateScale(10, .3),
                    marginVertical: moderateScale(10, .3),
                    padding: moderateScale(10, .6),
                    paddingBottom: moderateScale(350, .6)
                }}
                data={cardsArray}
                renderItem={({ item, index }) => {
                    return (
                        <KidsCards item={item} />
                    );
                }}
            />

        </ImageBackground>
    )
}

export default StoreScreen

const styles = StyleSheet.create({
    Heading: {
        fontSize: moderateScale(23, 0.6),
        color: Color.white,
        paddingVertical: moderateScale(10, .6),
        width: windowWidth * 0.67,
        paddingHorizontal: moderateScale(10, .6),
        paddingTop: moderateScale(25, .6)
    },
    rowContainner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(10, .3),
        paddingHorizontal: moderateScale(5, .6)
    },
    heading2: {
        fontSize: moderateScale(16, 0.6),
        color: Color.white,
        paddingVertical: moderateScale(10, .6),
        paddingHorizontal: moderateScale(10, .6)
    },
})
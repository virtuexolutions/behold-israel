import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../Components/CustomText';
import { windowHeight, windowWidth } from '../Utillity/utils';
import { moderateScale } from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import BookDescription from '../Components/BookDescription';
import { Icon } from 'native-base';
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

const BookDescriprtionScreen = (props) => {
    const navigation = useNavigation();
    const data = props?.route?.params?.item
    console.log("🚀 ~ file: BookDescriptionScreen.js:11 ~ BookDescriprtionScreen ~ data:", data)
    const description =[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet imperdiet mauris, eget interdum leo. In venenatis suscipit arcu, ut scelerisque nunc ornare eu. Praesent diam enim, maximus vitae nunc vitae, sollicitudin finibus dui. Suspendisse potenti. Vivamus bibendum ipsum eu varius iaculis. Etiam efficitur ipsum eleifend tortor euismod, ut molestie magna dignissim. Nam lacinia nulla tempor, aliquet urna ut, porttitor nisl. Fusce vulputate pellentesque vestibulum. Proin nec orci eu quam dignissim volutpat. Maecenas sit amet dictum elit. Pellentesque bibendum mollis dictum. Phasellus efficitur, dolor in tincidunt euismod, diam dolor viverra nibh, a convallis ex lacus a lorem. Quisque sit amet sapien ac felis blandit auctor. Etiam bibendum tellus vel molestie varius. Aenean eu fringilla leo. Donec pharetra gravida massa sed ornare. Maecenas mi nunc, consequat vitae nunc sed, interdum bibendum tellus. Nulla tristique nisi ac sem posuere varius. Aliquam cursus urna lacus, at sodales velit pretium nec. Vivamus in elementum purus. Sed commodo tellus sagittis suscipit vulputate. Pellentesque sollicitudin neque et lacus condimentum, eu blandit lacus molestie. Donec mi risus, lacinia eget ullamcorper ut, rutrum sed velit. Ut in quam et libero cursus pulvinar ac non metus. Quisque risus felis, bibendum at arcu a, dapibus imperdiet lectus. Vestibulum a consequat enim. Cras condimentum tempus lectus id ullamcorper. Proin nec iaculis lectus. Mauris imperdiet odio elit, nec sodales quam condimentum et. Aliquam rutrum quam vitae tortor lobortis malesuada. Nullam mattis ornare ultrices. Vivamus euismod condimentum elit. Vivamus euismod dolor vitae enim suscipit laoreet. Pellentesque metus elit, venenatis nec ante et, tempor egestas magna. Vivamus dolor turpis, fermentum id magna eget, ultricies hendrerit arcu. Ut sagittis lectus id est ultrices, sit amet tempus lacus dictum. Nulla blandit efficitur purus dictum efficitur. Nam id sem lorem. Pellentesque dapibus nisl in porta volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in dictum quam. Nulla finibus sit amet nisi sed mollis.'
    ]
    return (
        <ImageBackground
            style={{
                width: windowWidth,
                minHeight: windowHeight,
                paddingBottom: moderateScale(40, 0.6),
                // justifyContent: 'center',
                alignItems: 'center',
            }}

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
            backgroundColor :Color.white,
            paddingTop: moderateScale(6.6),

            // marginTop :moderateScale
          }}
            name={'arrow-left'}
            as={Feather}
            size={moderateScale(25, 0.3)}
            color={Color.black}
            onPress={() => {
            //   navigation.toggleDrawer();
            navigation.goBack();
              // navigationN.dispatch(DrawerActions.toggleDrawer())
              
            }}
          />
        </View>
            <CustomText
                numberOfLines={1}
                isBold
                style={styles.heading}>
                {data}
            </CustomText>
            <FlatList
                showsVerticalScrollIndicator={true}
                nestedScrollEnabled={true}
                scrollEnabled={true}
                contentContainerStyle={{
                    borderRadius: moderateScale(10, .6),
                    borderColor: Color.white,
                    width: windowWidth * 0.9,
                    alignItems: 'center',
                    borderWidth: moderateScale(1, .6),
                    padding: moderateScale(15, .6),
                    paddingBottom: moderateScale(50, .6)
                }}
                data={description}
                renderItem={({ item, index }) => {
                    return (
                      <BookDescription item={item}/>

                    );
                }}
            />
        </ImageBackground>
    )
}

export default BookDescriprtionScreen

const styles = StyleSheet.create({
    heading:{ 
        fontSize: moderateScale(20, 0.6),
        color: Color.white,
        paddingVertical: moderateScale(5, .6),
        width: windowWidth * 0.43,
        textAlign: 'center',
        marginVertical: moderateScale(30, .6,),
        borderBottomWidth:moderateScale(1,.6),
        borderColor:Color.white,  

    }
})
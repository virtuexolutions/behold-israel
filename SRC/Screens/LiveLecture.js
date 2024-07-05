// import { StyleSheet, FlatList, Text, View, ImageBackground } from 'react-native'
// import React from 'react'
// import { windowHeight, windowWidth } from '../Utillity/utils'
// import { moderateScale } from 'react-native-size-matters'
// import CustomText from '../Components/CustomText'
// import CustomImage from '../Components/CustomImage'
// import { Icon } from 'native-base'
// import AntDesgin from 'react-native-vector-icons/AntDesign'
// import Color from '../Assets/Utilities/Color'
// import LectureCards from '../Components/LectureCards'

// const LiveLecture = () => {
//     const dummyArray =[
//     {
//         image :require('../Assets/Images/livelec1.png'),
//         title:'Lorem Ipsum Dolor Sit',
//         descriptoin:'Lorem Ipsum Dolor Sit',
//         views: '43K views 10 days ago'
//     },
//     {
//         image :require('../Assets/Images/livelec2.png'),
//         title:'Lorem Ipsum Dolor Sit',
//         descriptoin:'Lorem Ipsum Dolor Sit',
//         views: '43K views 10 days ago'
//     },
//     {
//         image :require('../Assets/Images/livelec3.png'),
//         title:'Lorem Ipsum Dolor Sit',
//         descriptoin:'Lorem Ipsum Dolor Sit',
//         views: '43K views 10 days ago'
//     },
//     {
//         image :require('../Assets/Images/livelec4.png'),
//         title:'Lorem Ipsum Dolor Sit',
//         descriptoin:'Lorem Ipsum Dolor Sit',
//         views: '43K views 10 days ago'
//     },
  
//     ]
//     return (
//         <>
//             <View style={{
//                 height: windowHeight * 0.3,
//                 width: windowWidth,
//                 // marginTop:moderateScale(10,.6),
//             }}>
//                 <CustomImage style={{
//                     height: '100%',
//                     width: '100%',
//                 }} source={require('../Assets/Images/livelec2.png')} />

//             </View>
//             <ImageBackground
//                 style={{
//                     width: windowWidth,
//                     minHeight: windowHeight,
//                     paddingBottom: moderateScale(40, 0.6),
//                     // justifyContent: 'center',
//                     // alignItems: 'center',
//                 }}
//                 source={require('../Assets/Images/recorded.png')}>


//                 <View style={styles.rowView}>
//                     <CustomText
//                         numberOfLines={1}
//                         isBold
//                         style={styles.heading}>
//                      kids 
//                     </CustomText>
//                     <View style={styles.rowView2}>
//                         <CustomText
//                             style={styles.text}>
//                             14
//                         </CustomText>
//                         <Icon name='like1' as={AntDesgin} size={22} color={Color.white} />
//                         <CustomText
//                             numberOfLines={1}
//                             isBold
//                             style={[styles.text ,
//                             {
//                                 fontSize:moderateScale(30,.6)
//                             }]}>
//                             |
//                         </CustomText>
//                         <CustomText
//                             numberOfLines={1}
//                             isBold
//                             style={styles.text}>
//                             0
//                         </CustomText>
//                         <Icon style={styles.icon} name='dislike1' as={AntDesgin} size={22} color={Color.white} />
//                     </View>
//                 </View>
//                 <CustomText
//                     numberOfLines={2}
//                     isBold
//                     style={styles.description}>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna dolor, efficitur pulvinar placerat sed, auctor vestibulum elit.
//                 </CustomText>
//                 <CustomText
                    
//                     style={styles.text2}>
//                         43K views 10 days ago
//                 </CustomText>
//                 <FlatList
//                 showsVerticalScrollIndicator={true}
//                 nestedScrollEnabled={true}
//                 scrollEnabled={true}
//                 contentContainerStyle={{
//                     marginHorizontal:moderateScale(10,.3),
//                     marginVertical:moderateScale(10,.3),
//                         padding: moderateScale(10, .6),
//                     paddingBottom: moderateScale(350, .6)
//                 }}
//                 data={dummyArray}
//                 renderItem={({ item, index }) => {
//                     return (
//                  <LectureCards item={item}/>
//                     );
//                 }}
//             />
//             </ImageBackground>
//         </>

//     )
// }

// export default LiveLecture

// const styles = StyleSheet.create({
//     rowView:{
//         flexDirection: 'row',  
//         width: windowWidth * 0.5,
//     },
//    rowView2: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         width: windowWidth * 0.3
//     },
//     heading:{
//         fontSize: moderateScale(20, 0.6),
//         color: Color.white,
//         paddingVertical: moderateScale(10, .6),
//         width: windowWidth * 0.67,
//         paddingHorizontal: moderateScale(10, .6)
//     },
//     text:{
//         fontSize: moderateScale(14, 0.6),
//         color: Color.white,
//         textAlign: 'center',
//         paddingHorizontal: moderateScale(5, .6)
//     },
//     icon:{

//         width: windowWidth * 0.2,
//         height: windowHeight * 0.04,
//         paddingTop: moderateScale(10, .6)
//     },
//     description:{
//         fontSize: moderateScale(12, 0.6),
//         color: Color.white,
//         // paddingVertical: moderateScale(10, .6),
//         width: windowWidth * 0.8,
//         textAlign: 'left',
//         paddingHorizontal: moderateScale(10, .6)
//     },
//     text2:{
//         fontSize: moderateScale(12, 0.6),
//         color: Color.white,
//         paddingVertical: moderateScale(10, .6),
//         width: windowWidth*0.95,
//         textAlign: 'left',
//         // backgroundColor:'red',
//         marginHorizontal: moderateScale(10, .6),
//         borderBottomWidth:moderateScale(1,.6),
//         borderColor:Color.white
//     },

// })
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import Header from '../Components/Header'
import YoutubePlayer from 'react-native-youtube-iframe';
import WebView from 'react-native-webview';
import { moderateScale } from 'react-native-size-matters';
const CHANNEL_ID = "UCm9_lz6YfYDUEGiNvbY_ANA";
const LiveLecture = () => {
  return (
    <View style={{
        width : windowWidth ,
        height : windowHeight,
      overflow:'hidden',
        // alignItems : 'center',
        // justifyContent : 'center',
        backgroundColor:"#221c30"
    }}>
      <Header 
      showBack={true} title='Live Streaming'
      />
      {/* <YoutubePlayer
        height={300}
        play={true}
        videoId={"u91HNUsuujg"}
        // playList={"PL55RiY5tL51rudermnWTq1LlGC1BL1g3l"}
        // playList={["hNKHa7r2iOs", "O7cF8-bz2jE"]}
        
        /> */}
        <View style={{width:windowWidth, height: windowHeight * 0.9, overflow:'hidden'}}>

        <WebView
                source={{ uri:"https://www.youtube.com/@holyghostfraternity/streams" }}
                style={styles.webview}
                // scrollEnabled
                scalesPageToFit={true}
                    injectedJavaScript={`
                    const style = document.createElement('style');
                    style.type = 'text/css';
                    style.innerHTML = '.style-scope.ytd-app, ytm-pivot-bar-renderer, ytm-mobile-topbar-renderer { display: none !important; }';
                    document.head.appendChild(style);
                  `}
                />
        </View>
        {/* <YoutubePlayer
        height={300}
        play={true}
        videoId={"tc4apQ8fjVs"}
        playList={"PL55RiY5tL51rudermnWTq1LlGC1BL1g3l"}
        // playList={["hNKHa7r2iOs", "O7cF8-bz2jE"]}
        
        /> */}
    </View>
  )
}

export default LiveLecture

const styles = StyleSheet.create({
  webview:{
    width:windowWidth,
    height: "95%",
    position:'absolute',
    // zIndex:1,
    bottom:moderateScale(30,0.2),
  }
})
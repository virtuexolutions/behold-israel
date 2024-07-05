import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import Header from '../Components/Header'
import YoutubePlayer from 'react-native-youtube-iframe';
import WebView from 'react-native-webview';
import { moderateScale } from 'react-native-size-matters';
const CHANNEL_ID = "UCm9_lz6YfYDUEGiNvbY_ANA";
const CartoonsScreen = () => {
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
      showBack={false} title='Cartoons'
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
                source={{ uri:"https://www.youtube.com/@Cartons-qp8kg" }}
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

export default CartoonsScreen;

const styles = StyleSheet.create({
  webview:{
    width:windowWidth,
    height: "95%",
    position:'absolute',
    // zIndex:1,
    bottom:moderateScale(30,0.2),
  }
})
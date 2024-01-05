import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'

const OldTestamentCategories = () => {
  return (
    <ImageBackground 
    resizeMode='cover'
    source={require('../Assets/Images/Home_Bg_image.png')}
    style={{width: "100%", height: windowHeight}}
    >

      <Text>oldTestamentCategories</Text>
    </ImageBackground>
  )
}

export default OldTestamentCategories;
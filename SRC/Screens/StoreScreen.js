import {ImageBackground, StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';
import React, { useEffect, useState } from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import CustomText from '../Components/CustomText';
import SearchbarComponent from '../Components/SearchbarComponent';
import CustomButton from '../Components/CustomButton';
import CustomImage from '../Components/CustomImage';
import Color from '../Assets/Utilities/Color';
import KidsCards from '../Components/KidsCards';
import {Icon} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../Components/Header';
import Feather from 'react-native-vector-icons/Feather'
import { Get } from '../Axios/AxiosInterceptorFunction';

const StoreScreen = ({route}) => {
  const navigation = useNavigation();
  const token = useSelector(state => state.authReducer.token);
  const fromHomeScreen = route?.params?.fromHomeScreen;
  const cartData = useSelector(state => state.commonReducer.cart);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () =>{
    const url = "auth/product";
    setIsLoading(true);
    const response = await Get(url, token);
    setIsLoading(false);
    if(response !== undefined){
      setProducts(response?.data?.product_list)
      console.log("🚀 ~ getProducts ~ response:", response?.data?.product_list);
    }
  }
  useEffect(() =>{
    getProducts();
  },[])
  
  return (
    <ImageBackground
      style={{
        width: windowWidth,
        minHeight: windowHeight,
        paddingBottom: moderateScale(40, 0.6),
      }}
      source={require('../Assets/Images/recorded.png')}>
      <Header showBack={fromHomeScreen} title={'store'} cart={true} 
      onPress={() =>{
        navigation.toggleDrawer();
      }}
      
      />
      <View style={styles.rowContainner}>
        <SearchbarComponent
          placeHolderColor={Color.veryLightGray}
          placeholderName={'What do you need?'}
          SearchStyle={{
            width: windowWidth * 0.75,
            backgroundColor: Color.white,
          }}
          arrayItem={'Product'}
          array={products}
          setNewData={() =>{}}
          search={''}
          setSearch={() =>{}}
        />
        <CustomButton
          bgColor={Color.theme2}
          textColor={Color.white}
          width={windowHeight * 0.06}
          height={windowHeight * 0.06}
          text={'all'}
          fontSize={moderateScale(13, 0.3)}
          borderRadius={(windowHeight * 0.06) / 2}
        />
      </View>
      <View
        style={[
          styles.rowContainner,
          {
            paddingTop: moderateScale(15, 0.3),
          },
        ]}>
        <CustomText numberOfLines={1} isBold style={styles.heading2}>
          New arrivals
        </CustomText>
        {/* <CustomButton
          text={'See All Collection'}
          textColor={Color.veryLightGray}
          fontSize={moderateScale(13, 0.6)}
        /> */}
      </View>

    {isLoading ? <ActivityIndicator size={moderateScale(24,0.2)} color={'white'}/>  : <FlatList
        showsVerticalScrollIndicator={true}
        nestedScrollEnabled={true}
        scrollEnabled={true}
        numColumns={2}
        contentContainerStyle={{
          marginHorizontal: moderateScale(10, 0.3),
          marginVertical: moderateScale(10, 0.3),
          padding: moderateScale(10, 0.6),
          paddingBottom: moderateScale(350, 0.6),
        }}
        data={products}
        renderItem={({item, index}) => {
          return <KidsCards item={item} />;
        }}
        ListEmptyComponent={() =>{
          return (
            <View>

            </View>
          );
        }}
      />}
    </ImageBackground>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  Heading: {
    fontSize: moderateScale(23, 0.6),
    color: Color.white,
    width: windowWidth * 0.67,
  },
  rowContainner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(10, 0.3),
    paddingHorizontal: moderateScale(5, 0.6),
  },
  heading2: {
    fontSize: moderateScale(16, 0.6),
    color: Color.white,
    paddingVertical: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
  },
});

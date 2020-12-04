import React, { useState } from 'react'
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Image} from 'react-native'
import {getCountryDetails,getweatherDetails} from '../redux/action/action'
import {useDispatch,useSelector} from 'react-redux';
 export const Country=({navigation}:any)=>{
     const [countryName,inputValue]=useState("")
     const dispatch =useDispatch();
     const countrydetails=useSelector((state:any)=> state.app.country)
     console.log(countrydetails);
     const onSubmit=()=>{
       const capital=countrydetails.capital;
       dispatch(getweatherDetails(capital,navigation)) 
     }
  return(
      <View style={styles.container}>
          <Text>{countrydetails.capital}</Text>
          <Text>{countrydetails.population}</Text>
          <Text>{countrydetails.latlng}</Text>
          <Text>{countrydetails.latlng}</Text>
          <Image source={{uri:countrydetails.flag}} style={{width:30,height:30}}/>
          <TouchableOpacity style={styles.button} onPress={()=>onSubmit()}>
            <Text>Capital Weather</Text>
          </TouchableOpacity>
      </View>
  )  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
      width:'60%',
      height:30,
      borderColor:'grey',
      borderWidth:2,
      margin:5
      
  },
  button:{
      width:'30%',
      height:30,
      backgroundColor:'blue',
      alignItems:'center',
      
  }
});

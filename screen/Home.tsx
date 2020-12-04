import React, { useState } from 'react'
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'
import {getCountryDetails} from '../redux/action/action'
import {useDispatch} from 'react-redux';
 export const Home=({navigation}:any)=>{
     const [countryName,inputValue]=useState("")
     const dispatch =useDispatch();
     const onSubmit=()=>{
       dispatch(getCountryDetails(countryName,navigation)) 
     }
  return(
      <View style={styles.container}>
          <TextInput  style={styles.input} placeholder="Enter Country" onChangeText={(value)=>inputValue(value)}/>
          <TouchableOpacity style={styles.button} onPress={()=>onSubmit()}>
            <Text>Submit</Text>
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

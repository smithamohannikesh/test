import http from '../../http/http'
import CONSTS from '../../constants/constants'
export const getCountryDetails=(countryName:any,navigation:any)=>{
    return async(dispatch:any)=>{
        const result=await  http.get(`name/${countryName}`);
        if(result){
            console.log(result.data)
            const prevalue=result.data[0];
            dispatch({type:CONSTS.GET_COUNTRY,action:prevalue})
            navigation.navigate("Country")
        }
    }

}
export const getweatherDetails=(capital:any,navigation:any)=>{
    return async(dispatch:any)=>{
        const result=await  http.get(`http://api.weatherstack.com/current?access_key=b7d7f802a2ec37d37936b1eace8a0fe3&query=${capital}`);
        if(result){
            console.log(result.data)
            const prevalue=result.data[0];
            dispatch({type:CONSTS.GET_COUNTRY,action:prevalue})
            navigation.navigate("Country")
        }
    }

}

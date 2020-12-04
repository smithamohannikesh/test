import CONSTS from '../../constants/constants'
const initialState={
    country:[],
    weather:[]
}
interface InitialState{
    country:any,
    weather:any
}
export const appReducer=(state:InitialState=initialState,action:any)=>{
    switch(action.type){
        case(CONSTS.GET_COUNTRY):
        return{...state,country:action.action}
        case(CONSTS.GET_WEATHER):
        return {...state,weather:action.action}
        default: return state
    }

}
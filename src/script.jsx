import { Actions } from "./App"

export default function PrintButtons({dispatch, digit, className}){

    function Dispatcher(){
        return dispatch({type: Actions.Add_Digits, payload:{digit}})
    }

    return (<button className={className} onClick={Dispatcher}>{digit}</button>)
}
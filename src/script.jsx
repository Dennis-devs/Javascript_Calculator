import { Actions } from "./App"

export default function PrintButtons({dispatch, digit, className, id}){

    function Dispatcher(){
        return dispatch({type: Actions.Add_Digits, payload:{digit}})
    }

    return (<button id={id} className={className} onClick={Dispatcher}>{digit}</button>)
}
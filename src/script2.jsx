import { Actions } from "./App"

export default function SquareRoot({dispatch, root}){

    function Dispatcher(){
        return dispatch({type: Actions.Square_Root, payload:{root}})
    }

    return <button onClick={Dispatcher}>{root}</button>
}
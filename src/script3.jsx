import { Actions } from "./App"
import { Form, Col, Button } from 'react-bootstrap';

export default function OperationButtons({dispatch, ops, className}){

    function Dispatcher(){
        return dispatch({type: Actions.Add_Operation, payload:{ops}})
    }

    return <button className={className} onClick={Dispatcher}>{ops}</button>
}
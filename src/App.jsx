import { useReducer } from 'react'
import './App.css'
import PrintButtons from './script.jsx';
import OperationButtons from './script3.jsx';
import SquareRoot from './script2.jsx';


export const Actions = {
  Add_Digits: "nums", 
  Add_Operation: "signs",
  Clear_Screen: "clear",
  Delete_Input: "Delete",
  Square_Root: "root",
  Square: "square",
  Pi: "pi",
  Evaluate:"Equals",
}

function reducer(state, {type, payload}){
  
  switch (type) {          
          case Actions.Add_Digits:
            if(state.overwrite){
              return{
                ...state,
                currentOps: payload.digit,
                //previousOps: state.currentOps,
                //ops: payload.ops, 
                overwrite: false, 
              }
            }
            if(payload.digit==='.' && state.currentOps.includes('.')){
              return state
            }
            return {
              ...state, 
              currentOps: `${state.currentOps || ""}${payload.digit}`
            }
            
          case Actions.Add_Operation:
            if(state.currentOps == null && state.previousOps == null){
            return state
            }
            if(state.previousOps!=0 && state.currentOps!=0){
              return{
                ...state,
              previousOps: state.currentOps,
              ops: payload.ops,
              currentOps: null,
              }
            }
            if(state.currentOps==0){
              return {
                ...state,              
                ops: payload.ops, 
              }
            }
            if(state.previousOps==null){ 
              return {
                ...state, 
                previousOps: state.currentOps, 
                ops: payload.ops, 
                currentOps: 0,   
              }
            }           
            return{
              ...state,
              previousOps: evaluate(state), 
              ops: payload.ops, 
              currentOps: 0, 
            }
          case Actions.Evaluate:
            if(
              state.currentOps == null 
              //state. previousOps == null
              //state.ops == null
              ){
                return state
            }
            
            return {
              ...state, 
              overwrite: true, 
              previousOps: evaluate(state),
              ops: null, 
              currentOps: 0, 
              
            }
          case Actions.Delete_Input:
            if(state.currentOps == 0){return state}
            if(state.currentOps != null || state.currentOps != 0){
            return{
              ...state, 
              currentOps: state.currentOps.slice(0, -1), 
            }
          }   
          break
          case Actions.Square_Root:
            if(state.currentOps == null){
              return{ 
              ...state, 
              root: payload.root,
            }}
          if(state.currentOps != null){
            return{
               ...state, 
               currentOps: payload.digit,
               previousOps: Math.sqrt(state.currentOps)
            }
            }
          break
          case Actions.Square:
            if(state.currentOps == null && state.previousOps == null){return state}
            return{
              ...state, 
              previousOps: Math.pow(state.currentOps, 2)
            }
          case Actions.Pi:
            return {
                ...state,
                currentOps: 3.14, 
              }  
          
          case Actions.Clear_Screen:
            return {}; 
  }
}
function evaluate({currentOps, previousOps, ops}){
  const prev = parseFloat(previousOps);
  const curr = parseFloat(currentOps)
  if (isNaN(prev) || isNaN(curr)) return ""
  let result = ""
  switch(ops){
    case '+':
      result = prev + curr
    break
    case '-':
      result =  prev - curr
    break
    case 'x':
      result = prev * curr
    break
    case '÷':
      result = prev / curr
    break
    case '√':
      result = Math.sqrt(curr)
      console.log(typeof(result))
    
  }
  return result.toString();
}

function App() {
        let initialState = {};
        const [{currentOps, previousOps, ops, root}, dispatch] = useReducer(reducer, initialState);
        
  return (
      <div className='calcbody container'>
        <div id="display" className='border'>
        <div className="screen">{root}{currentOps}</div>
          <div className="screenB border">{previousOps}{ops}</div>
        </div> 
  
        <div className="buttons">
          <div className="buttonsA">
            <button id="clear" className='btn btn-danger rub' onClick={()=>dispatch({type: Actions.Clear_Screen})}>CLEAR</button>
            <button className="del btn btn-dark rub" onClick={()=>dispatch({type: Actions.Delete_Input})}>DEL</button>
            <SquareRoot className="Root spans btn btn-light btn-sm" root='&#8730;' dispatch={dispatch}/>
            <button className="square spans btn btn-light" onClick={()=>dispatch({type: Actions.Square})}>x&#178;</button>
            <button className = "pi spans btn btn-light" value="3.14" onClick={()=>dispatch({type: Actions.Pi})}>&#960;</button>
          </div>     
          <div className="buttonsB">
            <PrintButtons id='seven' digit='7' className="btn btn-secondary" dispatch={dispatch} />
            <PrintButtons id='eight' digit='8' className="btn btn-secondary" dispatch={dispatch} />
            <PrintButtons id='nine'digit='9' className="btn btn-secondary" dispatch={dispatch} />
            <OperationButtons id='add' className="btn btn-outline-primary" ops='+' dispatch={dispatch} />
            <PrintButtons id='four' digit='4' className="btn btn-secondary" dispatch={dispatch} />
            <PrintButtons id='five' digit='5' className="btn btn-secondary" dispatch={dispatch} />
            <PrintButtons id='six' digit='6' className="btn btn-secondary" dispatch={dispatch} />
            <OperationButtons id='subtract' className="btn btn-outline-info" ops='-' dispatch={dispatch} />
            <PrintButtons id='one' digit='1' className="btn btn-secondary" dispatch={dispatch} />
            <PrintButtons id='two' digit='2' className="btn btn-secondary" dispatch={dispatch} />
            <PrintButtons id='three' digit='3' className="btn btn-secondary" dispatch={dispatch} />
            <OperationButtons id='multiply' className="btn btn-outline-secondary" ops='x' dispatch={dispatch} />           
            <PrintButtons id='zero' digit='0' className="btn btn-secondary" dispatch={dispatch} />
            <PrintButtons id='decimal' className="btn btn-dark" digit='.' dispatch={dispatch} />
            <button id="equals" className='btn btn-outline-success' onClick={()=>dispatch({type: Actions.Evaluate})}>=</button>
            <OperationButtons id='divide' className='btn btn-outline-warning' ops='&#247;' dispatch={dispatch} />
          </div>
        </div>
      </div>      
      
  )
    
}

export default App

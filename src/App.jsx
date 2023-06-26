import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='calcbody border container'>
        <div id="display" className='border'>
          <div className="screen border">254</div>
          <div className="screenB border">5454</div>
        </div>
  
        <div className="buttons border">
          <div className="buttonsA">
            <button id="clear" className='btn btn-danger rub'>CLEAR</button>
            <button className="del btn btn-dark rub">DEL</button>
            <button className="Root spans btn btn-light btn-sm">&#8730;</button>
            <button className="square spans btn btn-light">x&#178;</button>
            <button className = "pi spans btn btn-light" value="3.14">&#960;</button>
          </div>     
          <div className="buttonsB">
            <button id='seven' className="print num">7</button>
            <button id='eight' className="print num">8</button>
            <button id='nine' className="print num">9</button>
            <button id='add' className="print operator btn btn-outline-primary">+</button>
            <button id='four' className="print num">4</button>
            <button id='five' className="print num">5</button>
            <button id='six' className="print num">6</button>
            <button id='subtract' className="minus print operator btn btn-outline-info">-</button>
            <button id='one' className="print num">1</button>
            <button id='two' className="print num">2</button>
            <button id='three' className="print num">3</button>
            <button id='multiply' className="print operator btn btn-outline-secondary">x</button>
            <button id='zero' className="print num">0</button>
            <button className="print btn btn-dark" id='decimal'>.</button>
            <button id="equals" className='btn btn-outline-success'>=</button>
            <button id='divide' className="print operator btn btn-outline-warning">&#247;</button>
          </div>
        </div>
      </div>      
      
    </>
  )
}

export default App

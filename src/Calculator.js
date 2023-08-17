import React, { useState } from 'react'
import './Calculator.css'
function Calculator() {
    const [result,SetResult] = useState('')
   
    const handleclick = (value, action) => {
        if (action === 'AC') {
            SetResult('');
        } else if (action === 'DEL') {
            SetResult(result.slice(0, -1));
        } else {
            SetResult(result + value);
        }
    }
    
    
    const calculation  = () =>{
        try{
            const calc = eval(result)
            SetResult (calc);
        }catch(error){
            SetResult('invalid error')
        }
    }
    const clear =() =>{
        SetResult('')
    }


  return (
    <div className='container'>
        <div className="calculator">
           
            <input type="text" value={result}/>
           
            <div className='col'>
                <button className='operator' onClick={() => handleclick('', 'AC')}>AC</button>
                <button className='operator' onClick={() => handleclick('', 'DEL')}>DEL</button>
                <button className='operator' onClick={() => handleclick('%')}>%</button>
                <button className='operator' onClick={() => handleclick('/')}>/</button>
            </div>
            <div className='col'>
                <button onClick={() => handleclick('7')}>7</button>
                <button onClick={() => handleclick('8')}>8</button>
                <button onClick={() => handleclick('9')}>9</button>
                <button className='operator' onClick={() => handleclick('*')}>x</button>
            </div>
            <div className='col'>
                <button onClick={()=>handleclick('4')}>4</button>
                <button onClick={()=>handleclick('5')}>5</button>
                <button onClick={()=>handleclick('6')}>6</button>
                <button className='operator'onClick={()=>handleclick('-')}>-</button>
            </div>
            <div className='col'>
                <button onClick={()=>handleclick('1')}>1</button>
                <button onClick={()=>handleclick('2')}>2</button>
                <button onClick={()=>handleclick('3')}>3</button>
                <button className='operator'onClick={()=>handleclick('+')}>+</button>
            </div>
            <div className='col'>
                <button onClick={clear} >CLR</button>
                <button onClick={() => handleclick('0')}>0</button>
                <button onClick={() => handleclick('.')}>.</button>
                <button className='operator'onClick={ calculation} >=</button>
            </div>
        </div>
      
    </div>
  )
}

export default Calculator

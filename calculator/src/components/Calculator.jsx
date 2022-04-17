/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import './Calculator.css'

export default props => {
  const initialState = {
    initialvalue: 0
  }

  const [num, setNum] = useState(0)
  const [oldNum, setOldNum] = useState(0)
  const [operator, setOperator] = useState(0)

  function addDigit(value) {
    if (num === 0) {
      setNum(value.target.value)
    } else {
      setNum(num + value.target.value)
    }

    if (num === ',' && setNum.includes(',')) {
      return
    }

    if (num > 0) {
      clearMemory()
      // setNum(num)
    }
  }

  function clearMemory() {
    setNum(initialState.initialvalue)
  }

  function percentage() {
    setNum((num / 100).toString().replace('.', ','))
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num)
    } else {
      setNum(Math.abs(num))
    }
  }

  function operatorHandler(e) {
    let operatorValue = e.target.value
    setOperator(operatorValue)
    setOldNum(num)
    setNum(0)
  }

  function showResult() {
    if (operator === '+') {
      setNum(parseFloat(oldNum) + parseFloat(num))
    } else if (operator === '-') {
      setNum(parseFloat(oldNum) - parseFloat(num))
    } else if (operator === 'x') {
      setNum(parseFloat(oldNum) * parseFloat(num))
    } else if (operator === '/') {
      setNum(
        (parseFloat(oldNum) / parseFloat(num)).toString().replace('.', ',')
      )
    }
  }

  return (
    <div className="calculator">
      <h1 className="result">{num}</h1>
      <div className="commands">
        <button onClick={clearMemory}>AC</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={percentage}>%</button>
        <button className="operators" onClick={operatorHandler} value={'/'}>
          /
        </button>
        <button className="gray" value={7} onClick={addDigit}>
          7
        </button>
        <button className="gray" value={8} onClick={addDigit}>
          8
        </button>
        <button className="gray" value={9} onClick={addDigit}>
          9
        </button>
        <button className="operators" onClick={operatorHandler} value={'X'}>
          x
        </button>
        <button className="gray" value={4} onClick={addDigit}>
          4
        </button>
        <button className="gray" value={5} onClick={addDigit}>
          5
        </button>
        <button className="gray" value={6} onClick={addDigit}>
          6
        </button>
        <button className="operators" onClick={operatorHandler} value={'-'}>
          -
        </button>
        <button className="gray" value={1} onClick={addDigit}>
          1
        </button>
        <button className="gray" value={2} onClick={addDigit}>
          2
        </button>
        <button className="gray" value={3} onClick={addDigit}>
          3
        </button>
        <button className="operators" onClick={operatorHandler} value={'+'}>
          +
        </button>
        <button className="gray double" value={0} onClick={addDigit}>
          0
        </button>
        <button className="gray" value={','} onClick={addDigit}>
          ,
        </button>
        <button className="operators" onClick={showResult}>
          =
        </button>
      </div>
    </div>
  )
}

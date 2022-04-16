import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0)
  const [condition, setCondition] = useState(1)
  const [result, setResult] = useState(false)



  useEffect(() => {
    checkCondition(parseInt(number), condition)
  }, [number, condition])



  const realNumberToCheckWithCondition = (number) => {
    if (number < 0) {
      setNumber(1)
      return 1
    } else {
      setNumber(Math.round(number))
      return Math.round(number)
    }
  }


  const checkCondition = (number, condition) => {
    let temp_result
    number = realNumberToCheckWithCondition(number)

    if (!isNaN(number)) {
      if (condition === 1) {
        temp_result = isPrime(number)
        setResult(temp_result)
      } else {
        temp_result = isFibonacci(number)
        setResult(temp_result)
      }
    }
  }

  const isPerfectSquare = (x) => {
    let s = parseInt(Math.sqrt(x));
    return (s * s === x);
  }

  const isFibonacci = (number) => {
    return isPerfectSquare(5 * number * number + 4) ||
      isPerfectSquare(5 * number * number - 4);
  }

  const isPrime = (number) => {
    for (let i = 2, s = Math.sqrt(number); i <= s; i++)
      if (number % i === 0) return false;
    return number > 1;
  }


  return (
    <div >
      <div style={{ display: 'flex' }}>
        <div className='column' style={{ width: 200 }}>
          <input value={number} onChange={(e) => setNumber(e.target.value)} type='number' />
        </div>
        <div className='column' style={{ flexGrow: 1 }}>
          <select name="condition" id="condition" value={condition} onChange={(e) => setCondition(e.target.value)}>
            <option value={1}>
              isPrime
            </option>
            <option value={2}>
              IsFibanacci
            </option>
          </select>
        </div>
        <div className='column' style={{ width: 300 }}>
          {`${result}`}
        </div>
      </div>
    </div>
  );
}

export default App;

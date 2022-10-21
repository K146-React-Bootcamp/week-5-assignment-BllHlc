
import { useState, useMemo, useCallback } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [number, setNumber] = useState(0);

  // useMemo
  const data = useMemo(() => calculateObject(number), [number]);

  //useCallback

  const increment = useCallback(() => {
    setNumber(prev => prev + 1);
  }, []);

  return (
    <div className="App">
      <Header increment={increment} />
      <h1 className='me-1'>{number}</h1>
      <div>
        <span className='me-3'>Use Memo - {data.name} - {data.number}</span>
      </div>
    </div>
  );
}

function calculateObject(number) {
  return { name: "Bilal", number };
}

export default App;

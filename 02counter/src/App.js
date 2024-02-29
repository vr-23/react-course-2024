import {useState} from 'react';

function App() {
  // let counter = 15;

  const [counter, setCounter] = useState(15)

  const addValue = () => {
    // setCounter(counter+1)
    setCounter((prevState) => prevState+1)
  }

  const reduceValue = () => {
    setCounter(counter-1)
  }
  return (
    <>
    <h1> React carsh course</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>Add Button</button>
    <button onClick={reduceValue}>Remove Button</button>
    <p>footer: {counter}</p>
    </>
  );
}

export default App;

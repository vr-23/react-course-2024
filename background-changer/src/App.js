import {useState} from 'react';

function App() {
  const [color, setColor] = useState('olive')

  const changeColor = (newColor) =>{
    setColor(newColor)
  }

  return (
    <div className='w-full h-screen duration-200' style = {{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className='outline-none text-black shadow-lg rounded-full px-4 py-1'onClick={()=>{changeColor('red')}}>Red</button>
          <button className='outline-none text-black shadow-lg rounded-full px-4 py-1'onClick={()=>{changeColor('blue')}}>Blue</button>
          <button className='outline-none text-black shadow-lg rounded-full px-4 py-1'onClick={()=>{changeColor('green')}}>Green</button>
        </div>
      </div>
    </div>
  );
}

export default App;

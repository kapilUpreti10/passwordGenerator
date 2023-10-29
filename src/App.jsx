import { useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [allowNbr, setAllowNbr] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [displayPass, setDisplayPass] = useState('');

  function generatePassword() {
    let pass = '';
    let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (allowChar) {
      charSet += '!@#$%^&*()_+';
    }
    if (allowNbr) {
      charSet += '0123456789';
    }
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * charSet.length);
      pass += charSet.charAt(index);
    }
    setDisplayPass(pass);
  }
  function resetValue() {
    setDisplayPass("");
  }
  return (
    <>
      <div className='flex items-center flex-col text-white'>
        <h1 className='text-4xl mt-5 mb-4'>Password Generator</h1>
        <div className='flex flex-row mt-8'>
          <input
            type="text"
            value={displayPass}
            placeholder='Password will be generated here..'
            className='text-black w-[350px] h-[35px] px-2 rounded-md'
            readOnly
          />
          <button
            className='h-[35px] rounded-lg bg-green-700 text-black text-[1.2rem] mx-3 px-1'
            onClick={generatePassword}
          >
            Generate
          </button>
          <button className='h-[35px] rounded-lg bg-red-700 text-black text-[1.2rem] mx-2 px-1' onClick={resetValue}>Reset</button>
        </div>
        <input
          type="range"
          min="0"
          max="20"
          value={length}
          className='mt-5 float-left'
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <label htmlFor="Slider" className='mt-4 text-[1.6rem]'>
          Length: {length}
        </label>
        <div className="flex flex-row text-[1.6rem]">
          <label htmlFor="Nbr">Allow Number</label>
          <input
            type="checkbox"
            className='mx-5 w-5'
            checked={allowNbr}
            onChange={() => setAllowNbr(!allowNbr)}
          />
        </div>
        <div className="flex flex-row text-[1.6rem]">
          <label htmlFor="char">Allow Special Char</label>
          <input
            type="checkbox"
            className='mx-5 w-5'
            checked={allowChar}
            onChange={() => setAllowChar(!allowChar)}
          />
        </div>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Free Board</h1>
      <div className='board-list'>
        <h2>Title</h2>
        <div>
          Contents
        </div>
      </div>
      <div className='form-wrapper'>
        <input className='title-input' type='text' placeholder='Title' />
        <textarea className='text-area' placeholder='text' />
      </div>
      <button className='submit-button'>Submit</button>
    </div>
  );
}

export default App;

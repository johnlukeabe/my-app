import React from 'react';
import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
        <input className="title-input" type='text' placeholder='제목' />
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className='submit-button'>Submit</button>
    </div>
  );
}

export default App;

import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import Axios from 'axios';

function App() {
  const [post, setPost] = useState({
    title: '',
    content: ''
  })

  const [viewList, setViewList] = useState([]);

  const getValue = e => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value
    })
    console.log(post);
  }

  useEffect(() => {
    updateList({});
  }, [])

  const submitPost = ()=>{
    Axios.post('http://localhost:8000/api/insert', {
      title: post.title,
      content: post.content 
    }).then(()=>{
      alert('Submit completed');
      updateList();
    })
  };

  const updateList = () => {
    Axios.get('http://localhost:8000/api/get').then((response) => {
      setViewList(response.data);
      console.log('UpdateList');
    })
  }

  return (
    <div className="App">
      <h1>Free Board</h1>
      <div className='board-list'>
        {viewList.map((element) => 
          <div style={{ border: '1px solid #333' }} key={element.id}>
            <h2>{element.title}</h2>
            <div>{ReactHtmlParser(element.content)}</div>
          </div>
        )}
      </div>
      <div className='form-wrapper'>
        <input className="title-input" type='text' placeholder='Title'
                onChange={getValue}
                name='title'
        />
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
            setPost({
              ...post,
              content: data
            })
            console.log(post);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className='submit-button'
        onClick={submitPost}
        >Submit
      </button>
    </div>
  );
}

export default App;

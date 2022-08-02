import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import App from './components/App.js'
import store from './store';

const render=()=>{ReactDOM.render(<App />, document.getElementById('root'));}
store.subscribe(render);
render();

import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App/App';
import './style/App.css'


const el = document.querySelector('#root');
const root = ReactDOM.createRoot(el);
root.render(<App/>)


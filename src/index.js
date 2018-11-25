import '@babel/runtime/regenerator';
// import './assets/fonts/fonts.css';
import './styles/styles.css';

import { initModel } from "./app/Model";
import update from './app/Update';
import view from './app/View';
import app from './app/app';

const node = document.getElementById('app');

app(initModel, update, view, node); 




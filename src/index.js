import '@babel/runtime/regenerator';
// import './assets/fonts/fonts.css';
import './styles/styles.css';

import initModel from "./app/Model";
import update from './app/Update';
import view from './app/View';
import runtime from './app/Runtime';

const node = document.getElementById('app');

runtime(initModel, update, view, node);




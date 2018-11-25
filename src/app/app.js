import { diff, patch } from 'virtual-dom';
import createElement from 'virtual-dom/create-element';

function app(initModel, update, view, node) {
  
  // INITIALIZATION 
  let model = initModel; 
  let currentView = view(dispatch, model); 
  let rootNode = createElement(currentView);
  node.appendChild(rootNode);
  
  function dispatch(msg){
    // console.clear();
    // console.warn(`dispatch(${JSON.stringify(msg)})`);
    model = update(msg, model); 
    const updatedView = view(dispatch, model);
    const patches = diff(currentView, updatedView);
    rootNode = patch(rootNode, patches);
    currentView = updatedView;
  }
}

export default app;


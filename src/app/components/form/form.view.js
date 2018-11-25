// import { map, partial, pipe, sum } from 'ramda';

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
const { div, section, fieldset, form, input, label, legend, button } = hh(h);

import { showFormMsg,  inputTextMsg, inputNumberMsg, saveTextMsg } from '../../actions';



 function fldSet(labelText, inputValue, oninput) {
  return div({ className: 'mt3'}, [
    label({ className: 'f5 fw3 db lh-copy ' }, labelText ),
    input({ 
      className: 'f5  pa2 mt2 input-reset ba bg-transparent w-100 b--', 
      type: 'text',
      value: inputValue,
      oninput 
    })
  ]);
}

function buttonSet(dispatch) {
  return div({ className: 'mt3'}, [
    button(
      {
        // className: 'f3 pv2 ph3 bg-blue white bn mr2 dim',
        // className: 'f4 mt3 ph3 pv2 input-reset ba b--dark-green bg-dark-green green grow pointer f6 dib',
        className: 'f6  bg-transparent ba bw1 b-- mt3 ph3 pv2 input-reset grow pointer dib',
        type: 'submit'
      }, 
      'Save'
    ), 
    button(
      {
        // className: 'f3 pv2 ph3 bn bg-light-gray dim',
        className: 'f6  bg-transparent ba bw1 b-- mt3 ml3 ph3 pv2 input-reset grow pointer dib',
        type: 'button',
        onclick: () => dispatch(showFormMsg(false))
      },
      'Cancel'
    )
  ]);
}

 function view(dispatch, model) {

  const { number, text, showForm  } = model.form; 



  if (showForm) {
    return section({ className: 'bg-transparent mw7 center pa4 br2-ns ba b--dashed b--'}, [
      form({ className: 'measure center', onsubmit: e => { e.preventDefault(); dispatch(saveTextMsg); }},
        [
          fieldset({ className: 'ba b--transparent ph0 mh0 '}, [
            legend({ className: 'f3-ns  pa0 mb2 '}, 'Legend'),
            fldSet('Text', text, e => dispatch(inputTextMsg(e.target.value))),
            fldSet('Number', number || '', e => dispatch(inputNumberMsg(e.target.value))),
            buttonSet(dispatch)
 
          ])
        ]
  
      ) // END FORM
    ]); // END SECTION


  }
  return button(
    { 
      className: 'f3 pv2 ph3 bg-blue white bn',
      onclick: () => dispatch(showFormMsg(true))
    }, 
    'Add Record'
  );  
}

export { view as formComponent };

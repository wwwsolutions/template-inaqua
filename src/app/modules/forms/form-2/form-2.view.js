// import { map, partial, pipe, sum } from 'ramda';

import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
const { div, section, fieldset, form, input, label, legend, button } = hh(h);

import { showFormForm2Msg, inputTextForm2Msg, inputNumberForm2Msg, saveTextForm2Msg } from './form-2.actions';


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
        className: 'f6  bg-transparent ba bw1 b-- mt3 ph3 pv2 input-reset grow pointer dib',
        type: 'submit'
      },
      'Save'
    ),
    button(
      {
        className: 'f6  bg-transparent ba bw1 b-- mt3 ml3 ph3 pv2 input-reset grow pointer dib',
        type: 'button',
        onclick: () => dispatch(showFormForm2Msg(false))
      },
      'Cancel'
    )
  ]);
}

 function view(dispatch, model) {
  const { number, text, showForm  } = model.form2;
  if (showForm) {
    return section({ className: 'bg-transparent mw7 center pa4 br2-ns ba b--dashed b--'}, [
      form({
        className: 'measure center',
        onsubmit: e => {
          e.preventDefault();
          dispatch(saveTextForm2Msg);
        }
      },
        [
          fieldset({ className: 'ba b--transparent ph0 mh0 '}, [
            legend({ className: 'f3-ns  pa0 mb2 '}, 'Legend'),
            fldSet('Text', text, e => dispatch(inputTextForm2Msg(e.target.value))),
            fldSet('Number', number || '', e => dispatch(inputNumberForm2Msg(e.target.value))),
            buttonSet(dispatch)
          ])
        ]

      ) // END FORM
    ]); // END SECTION
  }

  return button(
    {
      className: 'f3 pv2 ph3 bg-green white bn',
      onclick: () => dispatch(showFormForm2Msg(true))
    },
    'Add Record to Form2'
  );
}

export { view as form2View };

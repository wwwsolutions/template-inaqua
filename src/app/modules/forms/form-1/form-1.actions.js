import MSGS from './form-1.messages.model';

// FORM 1
export const saveTextForm1Msg = { type: MSGS.SAVE_FORM1 };

export function editTextForm1Msg(editId) {
  return {
    type: MSGS.EDIT_FORM1,
    editId
  }
}

export function deleteTextForm1Msg(id) {
 return {
   type: MSGS.DELETE_FORM1,
   id
 }
}

export function showFormForm1Msg(showForm) {
  return {
    type: MSGS.SHOW_FORM1,
    showForm
  }
}

export function inputTextForm1Msg(text) {
  return {
    type: MSGS.INPUT_TEXT_FORM1,
    text
  }
}

export function inputNumberForm1Msg(number) {
  return {
    type: MSGS.INPUT_NUMBER_FORM1,
    number
  }
}

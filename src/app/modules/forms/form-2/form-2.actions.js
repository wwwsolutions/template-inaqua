import MSGS from './form-2.messages.model';

// FORM 2
export const saveTextForm2Msg = { type: MSGS.SAVE_FORM2 };

export function editTextForm2Msg(editId) {
  return {
    type: MSGS.EDIT_FORM2,
    editId
  }
}

export function deleteTextForm2Msg(id) {
 return {
   type: MSGS.DELETE_FORM2,
   id
 }
}

export function showFormForm2Msg(showForm) {
  return {
    type: MSGS.SHOW_FORM2,
    showForm
  }
}

export function inputTextForm2Msg(text) {
  return {
    type: MSGS.INPUT_TEXT_FORM2,
    text
  }
}

export function inputNumberForm2Msg(number) {
  return {
    type: MSGS.INPUT_NUMBER_FORM2,
    number
  }
}

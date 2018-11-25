import MSGS from '../../messages';
MSGS

export const saveTextMsg = { type: MSGS.SAVE_TEXT };

export function editTextMsg(editId) {
  return {
    type: MSGS.EDIT_TEXT,
    editId
  }
} 

export function deleteTextMsg(id) {
 return {
   type: MSGS.DELETE_TEXT,
   id
 }
}

export function showFormMsg(showForm) {
  return {
    type: MSGS.SHOW_FORM,
    showForm
  }
}

export function inputTextMsg(text) {
  return {
    type: MSGS.INPUT_TEXT,
    text
  }
}

export function inputNumberMsg(number) {
  return {
    type: MSGS.INPUT_NUMBER,
    number
  }
}

import { map } from 'ramda';

// FORM1 HELPER FUNCTIONS
export function addForm1(msg, model) {
  const { nextId, text, number } = model.form1;
  const record = { id: nextId, text, number };
  const records = [...model.form1.records, record];
  return {
    ...model,
    form1: {
      ...model.form1,
      records,
      nextId: nextId + 1,
      text: '',
      number: 0,
      showForm: false
    }
  };
}

export function editForm1(msg, model) {
  const { text, number, editId } = model.form1;
  const records = map( record => {
    if (record.id === editId) {
      return { ...record, text, number }
    }
    return record;
  }, model.form1.records );
  return {
    ...model,
    form1: {
      ...model.form1,
      records,
      text: '',
      number: 0,
      showForm: false,
      editId: null
    }
  };
}

// FORM2 HELPER FUNCTIONS
export function addForm2(msg, model) {
  const { nextId, text, number } = model.form2;
  const record = { id: nextId, text, number };
  const records = [...model.form2.records, record];
  return {
    ...model,
    form2: {
      ...model.form2,
      records,
      nextId: nextId + 1,
      text: '',
      number: 0,
      showForm: false
    }
  };
}

export function editForm2(msg, model) {
  const { text, number, editId } = model.form2;
  const records = map( record => {
    if (record.id === editId) {
      return { ...record, text, number }
    }
    return record;
  }, model.form2.records );
  return {
    ...model,
    form2: {
      ...model.form2,
      records,
      text: '',
      number: 0,
      showForm: false,
      editId: null
    }
  };
}

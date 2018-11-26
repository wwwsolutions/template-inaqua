import { pipe, defaultTo, filter, find } from 'ramda';

import { addForm1, editForm1, addForm2, editForm2 } from './Update.helper.functions.js';

import FORM1 from './modules/forms/form-1/form-1.messages.model';
import FORM2 from './modules/forms/form-2/form-2.messages.model';

// AGGREGATE MESSAGES
const MSGS = {
  ...FORM1,
  ...FORM2,

};

function update(msg, model) {

  // LOG
  console.log(msg);

  // FORM1 LOGIC
  switch (msg.type) {

    case MSGS.SHOW_FORM1: {
      const { showForm } = msg;
      return {
        ...model,
        form1: {
          ...model.form1,
          showForm,
          text: '',
          number: 0
        }
      };
    }

    case MSGS.INPUT_TEXT_FORM1: {
      const { text } = msg;
      return {
        ...model,
        form1: {
          ...model.form1,
          text
        }
      };
    }

    case MSGS.INPUT_NUMBER_FORM1: {
      const number = pipe(
        parseInt,
        defaultTo(0)
      )(msg.number);
      return {
        ...model,
        form1: {
          ...model.form1,
          number
        }
      };
    }

    case MSGS.SAVE_FORM1: {
      const { editId } = model.form1;
      const updatedModel = editId !== null ? editForm1(msg, model) : addForm1(msg, model);
      return updatedModel;
    }

    case MSGS.DELETE_FORM1: {
      const { id } = msg;
      const records = filter( record => record.id !== id, model.form1.records );
      return {
        ...model,
        form1: {
          ...model.form1,
          records
        }
      };
    }

    case MSGS.EDIT_FORM1: {
      const { editId } = msg;
      const record = find(
        record => record.id ===  editId,
        model.form1.records
      );
      const { text, number } = record;
      return {
        ...model,
        form1: {
          ...model.form1,
          editId,
          text,
          number,
          showForm: true
        }
      };
    }
  }

  // FORM2 LOGIC
  switch (msg.type) {

    case MSGS.SHOW_FORM2: {
      const { showForm } = msg;
      return {
        ...model,
        form2: {
          ...model.form2,
          showForm,
          text: '',
          number: 0
        }
      };
    }

    case MSGS.INPUT_TEXT_FORM2: {
      const { text } = msg;
      return {
        ...model,
        form2: {
          ...model.form2,
          text
        }
      };
    }

    case MSGS.INPUT_NUMBER_FORM2: {
      const number = pipe(
        parseInt,
        defaultTo(0)
      )(msg.number);
      return {
        ...model,
        form2: {
          ...model.form2,
          number
        }
      };
    }

    case MSGS.SAVE_FORM2: {
      const { editId } = model.form2;
      const updatedModel = editId !== null ? editForm2(msg, model) : addForm2(msg, model);
      return updatedModel;
    }

    case MSGS.DELETE_FORM2: {
      const { id } = msg;
      const records = filter( record => record.id !== id, model.form2.records );
      return {
        ...model,
        form2: {
          ...model.form2,
          records
        }
      };
    }

    case MSGS.EDIT_FORM2: {
      const { editId } = msg;
      const record = find(
        record => record.id ===  editId,
        model.form2.records
      );
      const { text, number } = record;
      return {
        ...model,
        form2: {
          ...model.form2,
          editId,
          text,
          number,
          showForm: true
        }
      };
    }
  }

  return model;

}


export default update;

import { map, pipe, defaultTo, filter, find } from 'ramda';
import MSGS  from './messages';


/**
 *   Handles interaction and transforms the model.
 *   
 *   The update function is the only place your model gets transformed. ​ 
 *   It receives a message as well as the model, then updates the model according 
 *   to the message and returns it.
 *   
 *   As the update function is the only place where your model gets transformed, this 
 *   structure makes it very easy to reason about state changes and where they are coming from. 
 *   This concept seems very simple and natural, yet it emerged and gained popularity through 
 *   The Elm Architecture.
 *   
 *   Contrast this to applications that manage all of their possible states implicitly 
 *   and being changed from several places. It’s no surprise that this simple, yet 
 *   powerful way of state management became very popular and influenced other 
 *   frameworks like Redux.
 */ 

function update(msg, model) {

  switch (msg.type) {

    case MSGS.SHOW_FORM: {
      const { showForm } = msg;
      console.log(msg);
      
      // RETURN NESTED OBJECT
      return {  
        ...model,
        form: {
          ...model.form, 
          showForm: showForm,
          text: '',
          number: 0
        }
      };
      // return {  
      //   ...model, 
      //   showForm: showForm,
      //   text: '',
      //   number: 0
      // };
    }
    
    case MSGS.INPUT_TEXT: {
      const { text } = msg;
      // RETURN NESTED OBJECT
      return {  
        ...model,
        form: {
          ...model.form, 
          text
        }
      };
      // return { ...model, text };
    }
      
    case MSGS.INPUT_NUMBER: {
      // CONVERT STR->INT
      const number = pipe(
        parseInt,
        defaultTo(0)
      )(msg.number);
            // RETURN NESTED OBJECT
            return {  
              ...model,
              form: {
                ...model.form, 
                number
              }
            };
      // return { ...model, number };
    }

    case MSGS.SAVE_TEXT: {
      const { editId } = model.form;
      const updatedModel = editId !== null ? edit(msg, model) : add(msg, model);
      return updatedModel;
    }

    case MSGS.DELETE_TEXT: {
      const { id } = msg;
      const records = filter( record => record.id !== id, model.form.records );
      // RETURN NESTED OBJECT
      return {  
        ...model,
        form: {
          ...model.form, 
          records
        }
      };
      
      // return {
      //   ...model,
      //   records
      // }  
    }

    case MSGS.EDIT_TEXT: {
      const { editId } = msg;
      const record = find(
        record => record.id ===  editId,
        model.form.records
      );
      const { text, number } = record;
      // RETURN NESTED OBJECT
      return {  
        ...model,
        form: {
          ...model.form, 
          editId,
          text,
          number,
          showForm: true        
        }
      };

      // return {
      //   ...model,
      //   editId,
      //   text,
      //   number,
      //   showForm: true
      // }
    }

  }
  return model;
}

function add(msg, model) {
  const { nextId, text, number } = model.form;
  const record = { id: nextId, text, number };
  const records = [...model.form.records, record];

      // RETURN NESTED OBJECT
      return {  
        ...model,
        form: {
          ...model.form, 
          records,
          nextId: nextId + 1,
          text: '',
          number: 0,
          showForm: false
        }
      };

  // return {
  //   ...model,
  //   records,
  //   nextId: nextId + 1,
  //   text: '',
  //   number: 0,
  //   showForm: false
  // }
}

function edit(msg, model) {
  const { text, number, editId } = model.form; 
  const records = map( record => {
      if (record.id === editId) {
        return { ...record, text, number }
      }
      return record;
    }, model.records );

      // RETURN NESTED OBJECT
      return {  
        ...model,
        form: {
          ...model.form, 
          records,
          text: '',
          number: 0,
          showForm: false,
          editId: null
        }
      };
    
    // return {
    //   ...model, 
    //   records,
    //   text: '',
    //   number: 0,
    //   showForm: false,
    //   editId: null
    // }
}


export default update;
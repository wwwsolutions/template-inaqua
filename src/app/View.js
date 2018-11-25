import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
const { div, pre } = hh(h);

import { formComponent } from './components/form/form.view';
import { tableView } from './components/table/table.view';
import { largeHeroComponent } from './components/large-hero/large-hero.view';
import { quotesComponent } from './components/quotes/quotes.view';




 
// PUBLIC
 function view(dispatch, model) {
  
  return div({ className: 'bn'}, [
    
    div({ className: 'flex flex-column bn'}, [

      div({ className: 'center'}, [
      
        largeHeroComponent(dispatch, model),
        
        quotesComponent(dispatch, model),
      
        formComponent(dispatch, model), 

      // div({ className: 'w-100 pa3 '}, [
      //   pre({ className: 'f5'}, JSON.stringify(model, null, 2))
      // ]),

      ]), // div
    ]) // div

      // MODEL
      // section({ className: 'w-100 pa3 '}, [
      //   code(['MODEL SECTION']),
      //   pre({ className: 'f5'}, JSON.stringify(model, null, 2))
      // ]),
      
      // // CODE
      // section({ className: 'outline w-100 pa3 mt3'}, [
      //   code(['CODE SECTION']),
      //   pre({ className: 'f5'}, JSON.stringify(model, null, 2))
      // ])


    // h1({ className: 'f2'}, 'Title'),
    
    // formView(dispatch, model),
    
    // tableView(dispatch, model.records),

    // div({ className: 'hero center ba'}, [
    //   h3({ className: 'f3 pv2 bb'}, 'Hero'),
    //   pre({ className: 'f5'}, JSON.stringify(model, null, 2))
    // ]),

    // div({ className: 'model center mw6 ba'}, [
    //   h3({ className: 'f3 pv2 bb'}, 'Model'),
    //   pre({ className: 'f5'}, JSON.stringify(model, null, 2))
    // ]),
    
    // div({ className: 'code center mw6 ba'}, [
    //   h3({ className: 'f3 pv2 bb'}, 'Code'),
    //   pre({ className: 'f5'}, JSON.stringify(model, null, 2))
    // ])
    

  ]);
}

export default view;
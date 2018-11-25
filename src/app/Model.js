import { largeHeroModel } from './components/large-hero/large-hero.model'
import { quotesModel } from './components/quotes/quotes.model';
import { formModel } from './components/form/form.model';

// MERGE MODELS
const Model = {
  ...formModel,  
  ...largeHeroModel,
  ...quotesModel,
    
    // ...Model

};

console.log(Model);
// EXPORT INIT MODEL
export { Model as initModel };

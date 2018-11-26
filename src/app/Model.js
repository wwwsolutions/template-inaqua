// import { aggregatedModels as initModel } from './aggregated.models'

// IMPORT MODELS
// HEROES
import { largeHero1Model } from './modules/banners/large-hero-1/large-hero-1.model'
import { largeHero2Model } from './modules/banners/large-hero-2/large-hero-2.model'
// QUOTES
import { quote1Model } from './modules/quotes/quote-1/quote-1.model';
import { quote2Model } from './modules/quotes/quote-2/quote-2.model';
// FORMS
import { form1Model } from './modules/forms/form-1/form-1.model';
import { form2Model } from './modules/forms/form-2/form-2.model';

// AGGREGATE MODELS
export const initModel = {

  // BANNERS
  ...largeHero1Model,
  ...largeHero2Model,

  // QUOTES
  ...quote1Model,
  ...quote2Model,

  // FORMS
  ...form1Model,
  ...form2Model,

  // ...

};

export default initModel;

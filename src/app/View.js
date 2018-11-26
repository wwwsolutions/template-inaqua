import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
const { div, pre, h3 } = hh(h);

// IMPORT VIEWS
// FORMS
import { form1View } from './modules/forms/form-1/form-1.view';
import { form2View } from './modules/forms/form-2/form-2.view';
// TABLES
import { table1View } from './modules/tables/table-1/table-1.view';
import { table2View } from './modules/tables/table-2/table-2.view';
// HEROES
import { largeHero1View } from './modules/banners/large-hero-1/large-hero-1.view';
import { largeHero2View } from './modules/banners/large-hero-2/large-hero-2.view';
// QUOTAS
import { quote1View } from './modules/quotes/quote-1/quote-1.view';
import { quote2View } from './modules/quotes/quote-2/quote-2.view';


// PUBLIC
function view(dispatch, model) {
  return div({ className: 'flex flex-column bn'}, [

    largeHero1View(dispatch, model),

    quote1View(dispatch, model),

    form1View(dispatch, model),
    table1View(dispatch, model.form1.records),
    pre({ className: 'f5'}, JSON.stringify(model.form1, null, 2)),

    quote2View(dispatch, model),

    form2View(dispatch, model),
    table2View(dispatch, model.form2.records),
    pre({ className: 'f5'}, JSON.stringify(model.form2, null, 2)),

    largeHero2View(dispatch, model),

  ]);
}

export default view;

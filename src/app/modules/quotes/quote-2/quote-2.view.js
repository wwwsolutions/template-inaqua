import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { section, blockquote, cite, div, p } = hh(h);


// PUBLIC VIEW
function view(dispatch, model) {
  const { author, content } = model.quote2;

  author //?
  return section({ className: 'quotes'}, [
    div({ className: 'pa4 ' }, [
      blockquote({ className: 'athelas ml0 mt0 pl4 black-90 bl bw2 b--blue' }, [
        p({ className: 'f4 lh-copy measure mt0' }, [`${content}`]),
        cite({ className: 'f6 ttu tracked fs-normal' }, [`${author}`])
      ]) // blockquote
    ])// div
  ]); // quotes

} // view


export { view as quote2View };

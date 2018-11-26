import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
import { map, partial, pipe, sum } from 'ramda';

import { deleteTextForm2Msg, editTextForm2Msg } from '../../forms/form-2/form-2.actions';

const { div, i, table, thead, tbody, tr, th, td } = hh(h);


const tableHeader = thead([
  tr([
    tableCell(th, 'pa2 tl', 'Description'),
    tableCell(th, 'pa2 tr', 'Number'),
    tableCell(th, '', '')
  ])
]);

function tableCell(tag, className, value) {
  return tag({ className }, value );
}

function tableRow(dispatch, className, record) {
  return tr({ className}, [
    tableCell(td, 'pa2', record.text),
    tableCell(td, 'pa2 tr', record.number),
    tableCell(td, 'pa2 tr', [
      i({
        className: 'ph1 pointer',
        onclick: () => dispatch(deleteTextForm2Msg(record.id))
      }, 'DEL'),
      i({
        className: 'ph1 pointer',
        onclick: () => dispatch(editTextForm2Msg(record.id))
      }, 'EDIT')

    ])
  ]);
}

function tableRowTotals(records) {
  const total = pipe(
    map( record => record.number ),
    sum
  )(records);
  return tr({ className: 'bt b' }, [
    tableCell(td, 'pa2 tr', 'Total:'),
    tableCell(td, 'pa2 tr', total),
    tableCell(td, '', '')
  ]);
}

function tableBody(dispatch, className, records) {
  const rows = map(
    partial(tableRow, [dispatch, ' stripe-dark']),
    records
  );
  const rowsWithTotal = [ ...rows, tableRowTotals(records)];
  return tbody({ className }, rowsWithTotal);
}

function view(dispatch, records) {
  if (records.length === 0) {
    return div({ className: 'mv2 i black-50'}, 'No records to display...');
  }
  return table({ className: 'mv2 w-100 collapse' }, [
    tableHeader,
    tableBody(dispatch, '', records)
  ]);
}


export { view as table2View };

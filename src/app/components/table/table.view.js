import { map, partial, pipe, sum } from 'ramda';
import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';
const { div, i, table, thead, tbody, tr, th, td } = hh(h);
import { deleteTextMsg, editTextMsg } from '../../actions';


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
        className: 'ph1 fa fa-trash-o pointer',
        onclick: () => dispatch(deleteTextMsg(record.id))
      }),
      i({
        className: 'ph1 fa fa-pencil-square-o pointer',
        onclick: () => dispatch(editTextMsg(record.id))
      })

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


export { view as tableView };

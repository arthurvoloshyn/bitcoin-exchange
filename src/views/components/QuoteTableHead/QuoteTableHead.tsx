import React from 'react';
import QUOTE_TABLE_FIELDS from '../../../constants/tableFields';
import { ISortParams } from '../../../types/features';
import { AppDispatch } from '../../../state/store';
import tickersSlice from '../../../state/ducks/quoteTable/tickersSlice';
import styles from '../../../styles/styles.module.scss';

interface IQuoteTableHeadProps {
  dispatch: AppDispatch;
  sortParams: ISortParams;
}

const QuoteTableHead: React.FC<IQuoteTableHeadProps> = ({ dispatch, sortParams }) => {
  return (
    <thead>
      <tr>
        {QUOTE_TABLE_FIELDS.map(tableField => {
          let sortClass = '';

          if (tableField.field === sortParams.field) {
            sortClass = sortParams.type === 'up' ? styles.thSortUp : styles.thSortDown;
          }

          return (
            <th
              key={tableField.field}
              className={sortClass}
              onClick={() => {
                dispatch(
                  tickersSlice.actions.setSortType({
                    type:
                      sortParams.field === tableField.field && sortParams.type === 'down'
                        ? 'up'
                        : 'down',
                    field: tableField.field,
                  }),
                );
              }}
            >
              {tableField.title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default QuoteTableHead;

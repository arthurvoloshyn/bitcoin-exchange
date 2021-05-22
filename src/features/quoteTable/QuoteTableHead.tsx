import React from 'react';
import quoteTableFields from './tableFields';
import { SortParams } from './interfaces';
import { AppDispatch } from '../../app/store';
import tickersSlice from './store/tickersSlice';
import styles from './styles.module.scss';

interface QuoteTableHeadProps {
  dispatch: AppDispatch;
  sortParams: SortParams;
}

export default function QuoteTableHead({
  dispatch,
  sortParams,
}: QuoteTableHeadProps) {
  return (
    <thead>
      <tr>
        {quoteTableFields.map(tableField => {
          let sortClass = '';

          if (tableField.field === sortParams.field) {
            sortClass =
              sortParams.type === 'up' ? styles.thSortUp : styles.thSortDown;
          }

          return (
            <th
              key={tableField.field}
              className={sortClass}
              onClick={() => {
                dispatch(
                  tickersSlice.actions.setSortType({
                    type:
                      sortParams.field === tableField.field &&
                      sortParams.type === 'down'
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
}

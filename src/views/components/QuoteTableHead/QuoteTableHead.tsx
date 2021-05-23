import React from 'react';

import QUOTE_TABLE_FIELDS from '../../../constants/tableFields';
import tickersSlice from '../../../state/ducks/quoteTable/tickersSlice';

import { ITableField } from '../../../types/constants';
import { IQuoteTableHeadProps } from './types';

import styles from '../../../styles/styles.module.scss';

const QuoteTableHead: React.FC<IQuoteTableHeadProps> = ({ dispatch, sortParams }) => (
  <thead>
    <tr>
      {QUOTE_TABLE_FIELDS.map((tableField: ITableField) => {
        let sortClasses = '';

        if (tableField.field === sortParams.field) {
          sortClasses = sortParams.type === 'up' ? styles.thSortUp : styles.thSortDown;
        }

        const { setSortType } = tickersSlice.actions;

        const handleClick = (): void => {
          dispatch(
            setSortType({
              type:
                sortParams.field === tableField.field && sortParams.type === 'down' ? 'up' : 'down',
              field: tableField.field,
            }),
          );
        };

        return (
          <th key={tableField.field} className={sortClasses} onClick={handleClick}>
            {tableField.title}
          </th>
        );
      })}
    </tr>
  </thead>
);

export default QuoteTableHead;

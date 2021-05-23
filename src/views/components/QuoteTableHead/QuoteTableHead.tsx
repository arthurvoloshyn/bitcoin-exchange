import React from 'react';
import classNames from 'classNames'; // eslint-disable-line import/no-unresolved

import QUOTE_TABLE_FIELDS from '../../../constants/tableFields';
import tickersSlice from '../../../state/ducks/quoteTable/tickersSlice';

import { ITableField } from '../../../types/constants';
import { IQuoteTableHeadProps } from './types';

import styles from '../../../styles/styles.module.scss';

const QuoteTableHead: React.FC<IQuoteTableHeadProps> = ({ dispatch, sortParams }) => (
  <thead>
    <tr>
      {QUOTE_TABLE_FIELDS.map((tableField: ITableField) => {
        const isEqualFields: boolean = tableField.field === sortParams.field;
        const sortClasses = classNames('', {
          [styles.thSortUp]: isEqualFields && sortParams.type === 'up',
          [styles.thSortDown]: isEqualFields && sortParams.type !== 'up',
        });

        const handleClick = (): void => {
          dispatch(
            tickersSlice.actions.setSortType({
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

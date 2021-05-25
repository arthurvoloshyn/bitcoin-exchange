import React from 'react';

import QUOTE_TABLE_FIELDS from '../../../constants/tableFields';
import SORT_DIRECTIONS from '../../../constants/sortDirections';
import getSortClasses from '../../../utils/getSortClasses';
import { quoteTableActions } from '../../../state/ducks/quoteTable';

import { ISortParams } from '../../../types/features';
import { ITableField } from '../../../types/constants';
import { IQuoteTableHeadProps } from './types';

const QuoteTableHead: React.FC<IQuoteTableHeadProps> = ({ dispatch, sortParams }) => (
  <thead>
    <tr>
      {QUOTE_TABLE_FIELDS.map((tableField: ITableField) => {
        const sortClasses = getSortClasses(tableField, sortParams);

        const handleClick = (): void => {
          const isEqualFields: boolean = sortParams.field === tableField.field;

          const payload: ISortParams = {
            type:
              isEqualFields && sortParams.type === SORT_DIRECTIONS.DOWN
                ? SORT_DIRECTIONS.UP
                : SORT_DIRECTIONS.DOWN,
            field: tableField.field,
          };

          dispatch(quoteTableActions.setSortType(payload));
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

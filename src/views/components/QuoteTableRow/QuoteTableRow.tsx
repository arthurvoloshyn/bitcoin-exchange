import React, { memo } from 'react';

import QUOTE_TABLE_FIELDS from '../../../constants/tableFields';
import getExtClasses from '../../../utils/getExtClasses';

import { ITableField } from '../../../types/constants';
import { ExtClasses } from '../../../types/utils';
import { IQuoteTableRowProps } from './types';

import styles from '../../../styles/styles.module.scss';

const QuoteTableRow: React.FC<IQuoteTableRowProps> = ({ ticker, previousTicker, symbol }) => (
  <tr key={ticker.symbol}>
    {QUOTE_TABLE_FIELDS.map((tableField: ITableField) => {
      const { extClasses, value }: ExtClasses = getExtClasses(
        ticker,
        symbol,
        previousTicker,
        tableField,
      );

      return (
        <td key={tableField.field} className={`${extClasses} ${styles.th}`}>
          {value}
        </td>
      );
    })}
  </tr>
);

export default memo(QuoteTableRow);

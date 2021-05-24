import { ITableField } from '../types/constants';
import { ISortParams } from '../types/features';

import styles from '../styles/styles.module.scss';

const getSortClasses = (tableField: ITableField, sortParams: ISortParams): string => {
  let sortClasses = '';

  if (tableField.field === sortParams.field) {
    sortClasses = sortParams.type === 'up' ? styles.thSortUp : styles.thSortDown;
  }

  return sortClasses;
};

export default getSortClasses;

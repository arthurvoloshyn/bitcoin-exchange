import React from 'react';

import { IErrorIndicatorProps } from './types';

import styles from '../../../styles/styles.module.scss';

const ErrorIndicator: React.FC<IErrorIndicatorProps> = ({ children, message }) => (
  <div className={styles.error}>
    <p className={styles.errorTitle}>Something went wrong!</p>
    {message && <p className={styles.errorMessage}>{message}</p>}
    {children}
  </div>
);

export default ErrorIndicator;

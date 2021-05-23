import React from 'react';

import styles from '../../../styles/styles.module.scss';

const ErrorIndicator: React.FC = ({ children }) => (
  <div className={styles.error}>
    <p className={styles.errorText}>Something went wrong!</p>
    {children}
  </div>
);

export default ErrorIndicator;

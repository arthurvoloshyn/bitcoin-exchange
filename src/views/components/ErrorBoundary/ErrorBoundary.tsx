import React, { Component } from 'react';

import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

import { IErrorBoundaryProps, IErrorBoundaryState, GetDerivedStateFromError } from './types';

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  readonly state = {
    hasError: false,
  };

  static getDerivedStateFromError(): GetDerivedStateFromError {
    return { hasError: true };
  }

  render(): React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorIndicator /> : children;
  }
}

export default ErrorBoundary;

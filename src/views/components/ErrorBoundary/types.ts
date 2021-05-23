import React from 'react';

export type ErrorBoundaryProps = {
  children: React.ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};

export type GetDerivedStateFromError = Partial<ErrorBoundaryState> | null;

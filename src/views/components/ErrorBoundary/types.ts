import React from 'react';

export interface IErrorBoundaryProps {
  children: React.ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}

export type GetDerivedStateFromError = Partial<IErrorBoundaryState> | null;

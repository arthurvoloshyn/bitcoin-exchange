import React from 'react';
import { render } from '@testing-library/react';
import { byRole } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';
import { getMockStoreTestProvider, spyStore } from '../../../../utils/getTestProvider';
import QuoteTickersControls from '../QuoteTickersControls';
import tickersSlice from '../../store/tickersSlice';

describe('Test Controls', () => {
  it('Test Default use', () => {
    const { store, TestProvider } = getMockStoreTestProvider();

    render(
      <TestProvider>
        <QuoteTickersControls />
      </TestProvider>,
    );

    const controls = byRole('button').getAll();

    controls.forEach(control => userEvent.click(control));

    const actions = store.getActions();

    expect(actions).toContainEqual(tickersSlice.actions.toggleDarkTheme());
    expect(actions).toContainEqual(tickersSlice.actions.toggleLimit());
  });
});

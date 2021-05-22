import React from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { render } from '@testing-library/react';
import { byText, byRole } from 'testing-library-selector';
import userEvent from '@testing-library/user-event';
import {
  getMockStoreTestProvider,
  spyStore,
  getTestProvider,
} from '../getTestProvider';

describe('Test stores test utils', () => {
  it('Test getTestProvider', () => {
    const initialState = 'init';
    const testValue = 'test Value';
    const { actions, reducer } = createSlice({
      name: 'test',
      initialState,
      reducers: {
        update(state, action: PayloadAction<string>) {
          return action.payload;
        },
      },
    });

    const { TestProvider, store } = getTestProvider({ test: reducer });
    type RootTestState = ReturnType<typeof store.getState>;

    const TestComponent = (): React.ReactNode => {
      const value = useSelector((state: RootTestState) => state.test);
      const dispatch = useDispatch();

      return (
        <>
          <span>{value}</span>
          <button
            onClick={() => {
              dispatch(actions.update(testValue));
            }}
          />
        </>
      );
    };

    render(
      <TestProvider>
        <TestComponent />
      </TestProvider>,
    );

    const testComponent = byText(initialState).get();
    expect(testComponent).toHaveTextContent(initialState);

    userEvent.click(byRole('button').get());

    expect(testComponent).toHaveTextContent(testValue);
  });

  it('Test getMockStoreTestProvider', () => {
    const initState = { test: '123' };
    const { store } = getMockStoreTestProvider(initState);
    const { dispatch } = spyStore(store);
    const testAction = { type: 'testAction', payload: 0 };

    store.dispatch(testAction);

    expect(dispatch).toHaveBeenCalledWith(testAction);

    const actions = store.getActions();

    expect(actions[0]).toEqual(testAction);
    expect(store.getState()).toEqual(initState);
  });
});

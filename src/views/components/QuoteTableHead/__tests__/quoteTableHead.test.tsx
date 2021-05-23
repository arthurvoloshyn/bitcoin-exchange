import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { byText } from 'testing-library-selector';
import QuoteTableHead from '../QuoteTableHead';
import quoteTableFields from '../../../../features/quoteTable/tableFields';
import tickersSlice from '../../../../state/ducks/quoteTable/tickersSlice';
import styles from '../styles.module.scss';

describe('Test QuoteTableHead', () => {
  it('Default use', () => {
    const testField = quoteTableFields[3];
    const dispatch = jest.fn();

    render(
      <table>
        <QuoteTableHead dispatch={dispatch} sortParams={{ type: 'up', field: testField.field }} />
      </table>,
    );

    const testFieldEl = byText(testField.title).get();

    expect(testFieldEl).toHaveClass(styles.thSortUp);

    userEvent.click(testFieldEl);

    expect(dispatch).toHaveBeenCalledWith(
      tickersSlice.actions.setSortType({
        type: 'down',
        field: testField.field,
      }),
    );
  });
});

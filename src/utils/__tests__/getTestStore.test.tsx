import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import getTestStore from '../getTestStore';

const testActionOne = createAction<string>('actionOne');
const testActionTwo = createAction<string>('actionTwo');
const payloadOne = 'payloadOne';
const payloadTwo = 'payloadTwo';
const responseValue = 'testResponseValue';
const api = jest.fn().mockResolvedValue(responseValue);
const testThunk = createAsyncThunk<string, string>(
  'testPrefix',
  async (payload, thunkApi) => {
    const data = await api(payload);

    thunkApi.dispatch(testActionTwo(responseValue));

    return responseValue;
  },
);

describe('Test getTestStore', () => {
  const { dispatch, getActions, clearActions } = getTestStore({});

  beforeEach(() => {
    clearActions();
  });

  it('default sync use', () => {
    dispatch(testActionOne(payloadOne));
    dispatch(testActionTwo(payloadTwo));

    expect(getActions()).toEqual([
      testActionOne(payloadOne),
      testActionTwo(payloadTwo),
    ]);
  });

  it('default use async action', async () => {
    await dispatch(testThunk(payloadOne));

    const actions = getActions();

    expect(api).toHaveBeenCalledWith(payloadOne);
    expect(actions[0]).toHaveProperty('type', testThunk.pending.type);
    expect(actions[1]).toEqual(testActionTwo(responseValue));
    expect(actions[2]).toEqual(
      expect.objectContaining({
        type: testThunk.fulfilled.type,
        payload: responseValue,
      }),
    );
  });
});

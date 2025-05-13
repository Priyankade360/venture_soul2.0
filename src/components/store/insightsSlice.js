import { createSlice } from '@reduxjs/toolkit'
import { service } from '../shared/_services/api_service'
import { setLoading } from './loader';
import { errorHandler, successHandler } from '../shared/_helper/responseHelper';

const STATUS = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading'
});

const initialState = {
  loadingStatus: STATUS.IDLE,
  insightsData: [],
  insightsCount: 0,
}

export const insightsSlice = createSlice({
  name: "insights",
  initialState,
  reducers: {
    setinsightsData(state, { payload }) {
      state.insightsData = payload.result
      state.insightsCount = payload.count
    },

  }
})

export const { setinsightsData, } = insightsSlice.actions;

export default insightsSlice.reducer;

export function getinsights(limit, offset) {
  return async function getinsightsThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.fetchinsights(limit, offset).then(
        (response) => {
          dispatch(setLoading(false))
          dispatch(setinsightsData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}


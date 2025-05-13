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
  newsData: [],
  newsCount: 0,
}

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setnewsData(state, { payload }) {
      state.newsData = payload.result
      state.newsCount = payload.count
    },

  }
})

export const { setnewsData, } = newsSlice.actions;

export default newsSlice.reducer;

export function getnews(limit, offset) {
  return async function getnewsThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.fetchnews(limit, offset).then(
        (response) => {
          dispatch(setLoading(false))
          dispatch(setnewsData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}


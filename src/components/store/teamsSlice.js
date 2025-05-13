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
  teamData: [],
  leadershipData: [],
}

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setteamData(state, { payload }) {
      state.teamData = payload.result
    },
    setLedershipData(state, { payload }) {     
      state.leadershipData = payload.result
    },

  }
})

export const { setteamData,setLedershipData } = teamSlice.actions;

export default teamSlice.reducer;

export function getTeam() {
  return async function getteamThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.fetchTeam().then(
        (response) => {
          console.log(response);
          
          dispatch(setLoading(false))
          dispatch(setteamData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}
export function getLeadership() {
  return async function getLeadershipThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.fetchLeadership().then(
        (response) => {
          console.log(response);
          
          dispatch(setLoading(false))
          dispatch(setLedershipData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}


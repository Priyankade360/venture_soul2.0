import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './loader';
import newsReducer from './newsSlice';
import insightsReducer from './insightsSlice';
import teamReducer from './teamsSlice';


export const store = configureStore({
  reducer: {
    loader: loadingReducer,
    news: newsReducer,
    insights: insightsReducer,
    team: teamReducer,
    

  },
})

export default store;
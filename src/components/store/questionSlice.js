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
  questionData: [],
  isOpenModal: false,
}

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setquestionData(state, { payload }) {
      state.questionData = payload.result
    },
    sliceQuestionsData(state, { payload }) {
      const objIndex = state.questionData.findIndex((obj) => obj._id === payload);
      if (objIndex >= 0) {
        state.questionData.splice(objIndex, 1)
      }
    },
    pushQuestionData(state, { payload }) {
      state.questionData.push(payload)
    },
    isOpenModal(state, { payload }) {
      state.isOpenModal = payload
    },
    ModalToggle(state, { payload }) {
      state.isOpenModal = !state.isOpenModal
    },
  }
})

export const { setquestionData, pushQuestionData, isOpenModal, ModalToggle, sliceQuestionsData} = questionSlice.actions;

export default questionSlice.reducer;

export function getquestion(examId) {
  return async function getquestionThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.fetchQuestions(examId).then(
        (response) => {
          
          dispatch(setLoading(false))
          dispatch(setquestionData(response.data))
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}
export function addquestionData(payload) {
  return async function addquestionThunk(dispatch) {
    dispatch(setLoading(true))
    try {
      await service.addquestion(payload).then(
        (response) => {
          dispatch(setLoading(false))
          dispatch(ModalToggle())
          dispatch(pushQuestionData(response.data))
          successHandler('Added Successfully')
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}


export function deleteQuestionData(id, status) {
  return async function statusDeletequestionsThunk(dispatch) {
    try {
      dispatch(setLoading(true))
      await service.deleteQuestion(id, status).then(
        (response) => {
          dispatch(sliceQuestionsData(id))
          dispatch(setLoading(false))
          successHandler('Deleted Successfully')
        }, (error) => {
          dispatch(setLoading(false))
          errorHandler(error.response)
        }
      );
    } catch (err) {

    }
  }
}

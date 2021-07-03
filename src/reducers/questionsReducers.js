import {
    USERS_QUESTIONS,
    SHOW_QUESTION,
    ADD_QUESTION,
    ANSWER_QUESTION,
  } from "../actions/actionTypes";
  
  export const usersQuestionsReducer = (state = {}, action) => {
    switch (action.type) {
      case USERS_QUESTIONS:
        return { ...action.questions };
      default:
        return state;
    }
  };
  export const questionDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case SHOW_QUESTION:
        return { ...action.id };
      default:
        return state;
    }
  };
  
  export const addNewQuestionReducer = (state = {}, action) => {
    switch (action.type) {
      case ADD_QUESTION:
        console.log(action, state);
        return {
          ...state,
          [action.questioninfo.id]: action.questioninfo,
        };
      default:
        return state;
    }
  };
  
  export const answerQuestion = (state = {}, action) => {
    switch (action.type) {
      case ANSWER_QUESTION:
        return {
          ...state,
          [action.answerinfo.qid]: {
            [action.answerinfo.answer]: {
              ...state[action.answerinfo.answer],
              votes: [action.answerinfo.authUser],
            },
          },
        };
      default:
        return state;
    }
  };
  
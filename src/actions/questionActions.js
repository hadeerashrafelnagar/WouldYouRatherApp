import {
    ADD_QUESTION,
    ANSWER_QUESTION,
    USERS_QUESTIONS,
    SHOW_QUESTION,
  } from "./actionTypes";
  
  export const addQuestionAction = (questioninfo) => ({
    type: ADD_QUESTION,
    questioninfo,
  });
  
  export const answerQuestionAction = (answerinfo) => ({
    type: ANSWER_QUESTION,
    answerinfo,
  });
  
  export const usersQuestionsAction = (questions) => ({
    type: USERS_QUESTIONS,
    questions,
  });
  
  export const showQuestionDetails = (id) => ({
    type: SHOW_QUESTION,
    id,
  });
  
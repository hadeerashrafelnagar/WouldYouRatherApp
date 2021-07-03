import { usersReducer, authUserReducer } from "../reducers/usersReducer";
import {
  usersQuestionsReducer,
  questionDetailsReducer,
  addNewQuestionReducer,
  answerQuestion,
} from "../reducers/questionsReducer";
import { combineReducers, createStore } from "redux";

const allReducers = combineReducers({
  users: usersReducer,
  authUser: authUserReducer,
  questions: usersQuestionsReducer,
  questionDetails: questionDetailsReducer,
  newQuestion: addNewQuestionReducer,
  questionanswer: answerQuestion,
});
export const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

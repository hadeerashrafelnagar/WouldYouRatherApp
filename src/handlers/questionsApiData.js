import {
    usersQuestionsAction,
    showQuestionDetails,
    addQuestionAction,
    answerQuestionAction,
  } from "../actions/questionActions";
  import {
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
  } from "../data/_DATA";
  import { store } from "../store/index";
  
  export function usersQuestions() {
    _getQuestions()
      .then((res) => res)
      .then((questions) => {
        store.dispatch(usersQuestionsAction(questions));
      });
  }
  
  export function showingQueDetails(questions, id) {
    store.dispatch(showQuestionDetails(questions[id]));
  }
  
  export function answerQuestion(authUser, qid, answer) {
    _saveQuestionAnswer({ authedUser: authUser, qid, answer }).then(() => {
      store.dispatch(answerQuestionAction({ authUser, qid, answer }));
    });
  }
  
  export function addNewQuestion(optionOneText, optionTwoText, authedUser) {
    _saveQuestion({ optionOneText, optionTwoText, author: authedUser }).then(
      (questioninfo) => {
        store.dispatch(addQuestionAction(questioninfo));
      }
    );
  }
  
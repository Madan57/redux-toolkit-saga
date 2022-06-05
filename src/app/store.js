import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import catsReducer from "../catState";
import catSaga from "../catSaga";
import createSagaMiddleware from "redux-saga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cats: catsReducer,
  },
  middleware: [saga],
});
saga.run(catSaga);
export { store };

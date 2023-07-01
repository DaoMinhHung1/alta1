import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import thunk, { ThunkDispatch } from "redux-thunk";
import rootReducer, { RootState } from "./redux/rootReducer";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});

export default store;

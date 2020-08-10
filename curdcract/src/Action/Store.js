import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducers";

export const Store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk)
    //  window._REDUX_DEVTOOLS_EXTENSION_ && Window._REDUX_DEVTOOLS_EXTENSION_()
  )
);
//export default Store;

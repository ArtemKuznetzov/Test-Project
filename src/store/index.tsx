import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/authReducer";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "./store";

// export const rootReducer = combineReducers({
//   auth: authReducer,
// });

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export type RootState = ReturnType<typeof rootReducer>;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

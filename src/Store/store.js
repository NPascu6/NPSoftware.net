import rootReducer from "../Reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { rootSaga } from "../Sagas/rootSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

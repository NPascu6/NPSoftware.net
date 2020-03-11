import rootReducer from "../Reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { rootSaga } from "../Sagas/rootSaga";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default store;

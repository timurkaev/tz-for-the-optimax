import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, compose, createStore} from 'redux';
import {rootReducer} from './reducers/rootReducer';
import rootSaga from './sagas';
import {createLogger} from 'redux-logger';

const logger = createLogger({
  diff: true,
  collapsed: true
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__?: typeof compose
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

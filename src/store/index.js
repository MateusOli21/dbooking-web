import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import createStore from "./createStore";
import persistReducer from "./persistReducer";
import rootReducer from "./modules/rootReducer";
import rootSagas from "./modules/rootSagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(persistReducer(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export { store, persistor };

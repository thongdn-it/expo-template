import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import reducers from '../reducers'
import epics from '../epics'

const epicMiddleware = createEpicMiddleware()
const store = createStore(reducers, {}, applyMiddleware(epicMiddleware))
epicMiddleware.run(epics)

export default store

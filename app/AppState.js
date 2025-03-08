import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  identity = null

  todos = []

  activeImage = null

  temp = null

}

export const AppState = createObservableProxy(new ObservableAppState())
import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import reducers from './reducers'
import Counter from './components/Counter'

let store = createStore(reducers)
let root = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncClick={() => { store.dispatch({ type: 'INC' }) } }
      onDecClick={() => { store.dispatch({ type: 'DEC' }) } }
      onIncOnOddClick={() => { store.dispatch({ type: 'INC_ON_ODD' }) } }
      onAsyncInc={() => { store.dispatch({ type: 'ASYNC_INC' }) } }
      />,
    root);
}

render()
store.subscribe(render)

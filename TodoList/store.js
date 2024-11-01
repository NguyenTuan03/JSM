// store.js
import { reducer } from './reducer.js';

let state = reducer(undefined, {});
const listeners = [];

export function getState() {
  return state;
}

export function dispatch(action) {
  state = reducer(state, action);
  listeners.forEach(listener => listener());
}

export function subscribe(listener) {
  listeners.push(listener);
}

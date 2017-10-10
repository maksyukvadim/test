import { createActions, handleActions, combineActions } from 'redux-actions'

export const increment = createActions({"INCREMENT": (val) => val});
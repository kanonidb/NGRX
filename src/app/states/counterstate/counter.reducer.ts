import {createReducer, on} from '@ngrx/store';
import { decrement, increment, reset} from './counter.actions';

export interface CounterState {
  count: number;
}

export const initialCounterState: CounterState = {
  count: 100,
};

export const counterReducer = createReducer(
  initialCounterState,
  on(increment, (state: {count: number}) => ({...state, count: state.count + 1})),
  on(decrement, (state: {count: number}) => ({...state, count: state.count - 1})),
  on(reset, (state: {count: number}) => ({...state, count: 0}))
);

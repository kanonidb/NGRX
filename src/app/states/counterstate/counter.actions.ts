import { createAction, props } from '@ngrx/store';
import { CounterctionType } from './counter.actionType';

export const increment = createAction(CounterctionType.INCREASE);
export const decrement = createAction(CounterctionType.DECREASE);
export const reset = createAction(CounterctionType.RESET);
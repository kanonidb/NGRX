import { createAction, props } from '@ngrx/store';
import { ActionType } from './actionType';

export const registerAction = createAction(
  ActionType.REGISTER,
  props<{ username: string; password: string; email: string }>()
);
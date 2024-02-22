import { createAction, props } from '@ngrx/store';
import { CardType } from './card.actionType';
import { IProduct } from '../../core-components/product/product';

export const addToCard = createAction(CardType.ADDTOCARD, props<{product: IProduct}>());
export const removeToCard = createAction(CardType.REMOVRTOCARD, props<{productId: number}>());
export const incrementProduct = createAction(CardType.INCREMENTPRODUCT, props<{productId: number}>());
export const decrementProduct = createAction(CardType.DECREMENTPRODUCT, props<{productId: number}>());

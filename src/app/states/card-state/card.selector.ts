import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CardState } from "./card.reducer";

export const selectCardState = (state : AppState) => state.card;
export const selectCardProducts = createSelector(
    selectCardState,
    (state : CardState)=>state.products
);

export const selectTotal = createSelector(
    selectCardState,
    (state : CardState)=>state.totalPrice
);
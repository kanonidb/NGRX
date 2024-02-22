import { CardState } from "./card-state/card.reducer";
import { CounterState } from "./counterstate/counter.reducer";

export interface AppState{
    counter: CounterState,
    card: CardState
}
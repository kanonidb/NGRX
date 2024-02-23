import {createReducer, on} from '@ngrx/store';
import { IProduct } from '../../core-components/product/product';
import { addToCard, decrementProduct, incrementProduct, removeToCard } from './card.action';

export interface CardState {
  products : IProduct[];
  totalPrice: number;

}

export const initialCardState: CardState = {
    products: [],
    totalPrice: 0
};

export function getTotalPrice(products : IProduct[]) {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0)
  }
export const cardReducer = createReducer(
    initialCardState,
    on(addToCard, (state, {product}) =>{
        const updatedProduct = [...state.products, product]
        return {...state, products: updatedProduct, 
        totalPrice: getTotalPrice(updatedProduct)
        }
    }),
    on(removeToCard, (state, {productId}) =>{
        const updatedProduct = state.products.filter((product)=> product.id !== productId)
        return {
            ...state, products :updatedProduct,
            totalPrice: getTotalPrice(updatedProduct)
        }
    }),
    on(incrementProduct, (state, {productId}) =>{
        const updatedProduct = state.products.map((product)=> product.id === productId ? {...product, quantity: product.quantity + 1} : product)
        return {
            ...state, products :updatedProduct,
            totalPrice: getTotalPrice(updatedProduct)
        }
    }),
    on(decrementProduct, (state, {productId}) =>{
        const updatedProduct = state.products.map((product)=> product.id === productId ? {...product, quantity: product.quantity- 1} : product)
        return {
            ...state, products :updatedProduct,
            totalPrice: getTotalPrice(updatedProduct)
        }
    })
);

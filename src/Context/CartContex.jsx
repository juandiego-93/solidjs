import { createStore } from 'solid-js/store'
import { createContext, useContext } from "solid-js";

export const CartContext = createContext()

export function CartContextProvider(props) {
    const[items, setItems] = createStore([
        {title: 'test product', quantity: 2, id: 100, price: 15},
        {title: 'test product2', quantity: 22, id: 1020, price: 125},
    ])

    return(
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    return useContext(CartContext)
}


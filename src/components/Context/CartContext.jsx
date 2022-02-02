import { useState, createContext } from "react"

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const CartItemsQnt = () => {
        return cartItems.length
    }

    const AddItem = (product, qty) => {
        console.log("Cantidad ingresada " + qty)
        product.qty = qty
        var isAlreadyIn = false;

        for (let i = 0; i < cartItems.length; i++) {
            if (qty > 0 && qty!==null) {
                if (cartItems[i].id === product.id) {
                    isAlreadyIn = true;
                    break;
                }
            }
        }

        isAlreadyIn ? console.log("El articulo ya esta en el carrito") : setCartItems([...cartItems, product])
        console.log("Items en el carrito",cartItems)
    }

    const RemoveItem = (product) => {
        setCartItems(cartItems.filter(item => item.id !== product.id))
    }

    const clear = () => {
        setCartItems([]);
    }

    const isInCart = (product) => {
        let isAlreadyIn = false;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === product.id) {
                isAlreadyIn = true;
                break;
            }
        }

        return isAlreadyIn
    }


    return (
        <CartContext.Provider value={{ cartItems, CartItemsQnt, AddItem, RemoveItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}

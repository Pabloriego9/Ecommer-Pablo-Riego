import React from 'react'

export const  ThemeContext = React.createContext();

export function CartContext({children}) {

 function AgregarCarrito() {
     
 }
    return (
        <CartContext.Provider value= {{}}>
            {children}
        </CartContext.Provider>
    )
}

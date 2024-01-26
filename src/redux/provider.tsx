"use client";

import { Provider } from "react-redux";
import {store} from "./store"

interface Prop {children : React.ReactNode}

export function Providers({children} : Prop){
    return <Provider store = {store}>
        {children}  
    </Provider>
}

//children en la linea 8 es el children que esta dentro del html, osea que engloba todo, entonces provider, engloba toda la app
// provider, necesita un valor de donde va a venir la info, en este caso es store line 7
// line7 tenemos el contenedor provider, que comparte a children (osea toda la pagina porque esta en html y le comparte el store, que fue importado.)
//exporto provaider y lo importo en layout asi me lo toma toda la app

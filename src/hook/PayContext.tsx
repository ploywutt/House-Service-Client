import React from "react";
import { useState } from "react";


export interface PayContextType {
    submit:boolean
    setSubmit: (value:boolean) => void
}

const PayContext = React.createContext<PayContextType | undefined>(undefined)
function PayProvider ({children}:any) {
const [submit,setSubmit] = useState <boolean>(false)

return (
    <PayContext.Provider value={{
        submit,setSubmit
    }}>
        {children}
    </PayContext.Provider>
)
}
const usePayment = () => React.useContext(PayContext)

export {PayProvider, usePayment }

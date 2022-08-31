import { createContext, useState, useHistory, useContext} from "react";

export const AccountContext = createContext();

export default AccountContext

export const AuthProvider = ({children}) => {

    return(
        <AccountContext.Provider >
            {children}
        </AccountContext.Provider>
    )
}

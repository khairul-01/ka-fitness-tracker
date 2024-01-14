import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const name = 'hello'
    const authValue = {
        name,
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
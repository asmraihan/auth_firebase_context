import React, { createContext } from 'react';

export const AuthContext = createContext(null) /* some names UserContext */

const AuthProviders = ({ children }) => {

    const user = { displayName: 'Sagor nodi' }
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
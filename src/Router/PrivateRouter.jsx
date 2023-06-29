import AuthContext from '@/contexts/AuthContext';
import React, { useContext } from 'react';

const PrivateRouter = ({children}) => {
    const { user,loading} = useContext(AuthContext);
    if(user)
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRouter;
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const { user } = useContext(AuthContext) /* export kore AuthContext ana lagbe */
    console.log('here', user)
    return (
        <div className='text-center flex flex-col justify-center items-center gap-4 mt-5 text-3xl'>
            <h2>This home {user && <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;
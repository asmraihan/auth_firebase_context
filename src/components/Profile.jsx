import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Profile = () => {
    const { user } = useContext(AuthContext) 
    return (
        <div className='text-center flex flex-col justify-center items-center gap-4 mt-5 text-2xl' >
            <h3>Your User Profile</h3>
            {
                user && <>
                    <h3>User name : {user.displayName}</h3>
                    <h3>User email : {user.email}</h3>
                    <img className='w-1/6' src={user.photoURL} alt="" />
                </>
            }
        </div>
    );
};

export default Profile;
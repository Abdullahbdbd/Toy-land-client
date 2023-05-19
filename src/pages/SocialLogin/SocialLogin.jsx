import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const SocialLogin = () => {
const {googleSignIn} = useContext(AuthContext);
const handleGoogleSignIn =()=>{
    googleSignIn()
    .then(result =>{
        console.log(result.user)
    })
    .catch(error => console.log(error))
}

    return (
        <div>
            <div className='divider'>OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn}>
                   <img className='h-14' src="https://img.freepik.com/free-icon/search_318-265146.jpg" alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
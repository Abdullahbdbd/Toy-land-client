import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
// import Swal from 'sweetalert2'

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
     if(loading){
        return <progress className="progress w-56"></progress>
     }
    //  Swal.fire({
    //     title: 'Success',
    //     text: 'Add A Toy Successfully',
    //     icon: 'success',
    //     confirmButtonText: 'Done'
    // })

    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>
     

 
    
};

export default PrivateRoute;
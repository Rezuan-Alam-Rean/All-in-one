import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';



const PrivateRoute = ({ children }) => {
    const {loader,user} =useContext(AuthContext)

  if (loader) {
    return <div className="loading loading-spinner loading-xs"></div>;
  }

  if (!loader && !user?.email) {
    return <Navigate to="/login" />;
  }

  return children;
};

// export default PrivateRoute;

export default PrivateRoute;
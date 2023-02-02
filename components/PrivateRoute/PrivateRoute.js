import React, { useContext, useEffect } from 'react';
import Router from 'next/router';
import { AuthContext } from '../../Context/AuthProvider';


const PrivateRoute = (WrappedComponent) => {
  const {user} = useContext(AuthContext)
  const HOC = (props) => {
    useEffect(() => {
      if (!user) {
        Router.push('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default PrivateRoute;

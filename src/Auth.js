import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
export const ROLE = {
    Admin :'Admin',
    User :'User',
  }
const PrivateRoute = ({
  children,
  roles,
}) => {
  let location = useLocation();
  const { isAuthenticated, user, loading } = useSelector(state => state.auth);

  if (loading) {
    return <p className="container">Please wait</p>;
  }

  const userHasRequiredRole = user && roles.includes(user.role) ? true : false;

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (isAuthenticated && !userHasRequiredRole) {
    return <div>Access Denied</div>; // build your won access denied page (sth like 404)
  }

  return children;
};

export default PrivateRoute;
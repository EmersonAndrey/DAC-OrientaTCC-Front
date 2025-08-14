import { Navigate, Outlet } from 'react-router-dom';
import { getUserRoles} from '../util/GetUserRoles';
import { useAppContext } from '../context/AppContext';

const PrivateRoute = ({ permissao }) => {

    const { setUser, setToken } = useAppContext();

    const role = getUserRoles();
    console.log(role)
    console.log(permissao)

    if (!role) return <Navigate to="/login" replace />;

    const rolePermitida = Array.isArray(permissao) ? permissao : [permissao]

    if (!rolePermitida.includes(role)) {
        setUser(null);
        setToken(null);
        return <Navigate to="/login" replace />;
    }

    return (
        <Outlet />
    )
}

export default PrivateRoute;
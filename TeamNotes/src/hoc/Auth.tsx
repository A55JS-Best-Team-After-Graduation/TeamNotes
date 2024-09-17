import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext,AppContextType } from '../context/AppContext';

const Auth = ({ children }: any) => {
const context = useContext(AppContext);
const { userData } = context as AppContextType;
if (!userData) {
    return <Navigate to="/login" />
  }
return(
    <>
        {children}
    </>
)

}
export default Auth;
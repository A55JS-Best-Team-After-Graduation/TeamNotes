import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext,AppContextType } from '../AppContext';

const Auth = ({ children }: any) => {
const context = useContext(AppContext);
const { user } = context as AppContextType;
if (!user) {
    return <Navigate to="/login" />
  }
return(
    <>
        {children}
    </>
)

}
export default Auth;
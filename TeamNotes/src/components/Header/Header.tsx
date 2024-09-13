import { useNavigate } from "react-router-dom";
import firebaseConfig from "../../service/firebase-config";
import { useAppContext } from "../../context/AppContext";

const Header=()=>{
    const navigate = useNavigate();
    const { user, userData, setContext } = useAppContext();

    const logout = async () => {
        await logoutUser();
        setContext({ user: null, userData: null });
        navigate('/login');
      }
      const profile = () => {
        navigate(`/profile/${userData?.username}`);
      };

      return(
            <div>
                <button onClick={logout}>Logout</button>
                <button onClick={profile}>Profile</button>
            </div>
      )
}
export default Header;
import { useNavigate } from "react-router-dom";
// import firebaseConfig from "../../service/firebase-config";
import { useAppContext, defaultUserData } from "../../context/AppContext";
import { logoutUser } from "../../service/service-user";

const Header=()=>{
    const navigate = useNavigate();
    const { userData, setContext } = useAppContext();

    const logout = async () => {
        await logoutUser();
        setContext({ userData: defaultUserData });
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
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';

const Logout = ({setIsRerender}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/login');
    setIsRerender((prevState) => !prevState)
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition duration-200"
    >
      Logout
    </button>
  );
};

export default Logout;

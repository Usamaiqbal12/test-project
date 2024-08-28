import Logout from '../Auth/Logout';

const Header = ({setIsRerender}) => {
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center header-container">
      <h1 className="text-xl md:text-2xl font-bold">My Dashboard</h1>
      <Logout setIsRerender={setIsRerender} />
    </header>
  );
};

export default Header;

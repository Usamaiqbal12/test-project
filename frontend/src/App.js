import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Home from './components/Dashboard/Home';
import Reports from './components/Dashboard/Reports';
import Settings from './components/Dashboard/Settings';
import AuthService from './services/AuthService';
import { useEffect, useState } from 'react';

const App = () => {
  const [isRerender, setIsRerender] = useState(false)
  const PrivateRoute = ({ children }) => {
    return AuthService.isAuthenticated() ? children : <Navigate to="/login" />;
  };

useEffect(() => {
},[isRerender])
  

  return (
    <Router>
      <div className="flex h-screen bg-black">
        {AuthService.isAuthenticated() && <Sidebar />}

        <div className="flex-1 flex flex-col overflow-hidden">
          {AuthService.isAuthenticated() && <Header setIsRerender={setIsRerender} />}

          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/login" element={<Login setIsRerender={setIsRerender} />} />
              <Route path="/dashboard" element={<PrivateRoute><Home /></PrivateRoute>} />
              <Route path="/dashboard/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
              <Route path="/dashboard/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;

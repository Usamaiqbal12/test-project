const AuthService = {
  login: async (username, password) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('accessToken', data.access);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error, "error");
      return false;
    }
  },
  
    logout: () => {
      localStorage.removeItem('accessToken');
    },
  
    isAuthenticated: () => {
      return localStorage.getItem('accessToken') !== null;
    }
  };
  
  export default AuthService;
  
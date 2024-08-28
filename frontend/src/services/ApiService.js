// // src/services/apiService.js
// const url = "http://127.0.0.1:8000/api"
// const ApiService = {
//   getSalesData: async () => {
//     try {
//       const response = await fetch(`${url}/sales-data`);
//       if (!response.ok) {
//         throw new Error("Error");
//       }
//       return await response.json();  
//     } catch (error) {
//       console.error(error, "error");
//       throw error;  
//     }
//   },
  
// };

// export default ApiService;


const url = "http://127.0.0.1:8000/api";

const ApiService = {
  // Function to get access token from wherever you store it
  getAccessToken: () => {
    // For example, if you store it in local storage
    return localStorage.getItem('accessToken'); 
  },

  // Function to get sales data
  getSalesData: async () => {
    try {
      const accessToken = ApiService.getAccessToken();
      
      const response = await fetch(`${url}/sales-data`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`error`);
      }

      return await response.json();
    } catch (error) {
      console.error(error, "error");
      throw error;
    }
  },
};

export default ApiService;

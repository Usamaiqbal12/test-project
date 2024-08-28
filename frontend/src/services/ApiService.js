// src/services/apiService.js
const url = "http://127.0.0.1:8000/api"
const ApiService = {
  getSalesData: async () => {
    try {
      const response = await fetch(`${url}/sales-data`);
      if (!response.ok) {
        throw new Error("Error");
      }
      return await response.json();  
    } catch (error) {
      console.error(error, "error");
      throw error;  
    }
  },
  
};

export default ApiService;

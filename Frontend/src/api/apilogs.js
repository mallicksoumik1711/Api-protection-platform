import axios from 'axios';

const BASE_URL = "http://localhost:3000/logs";

export const getApiLogs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/all-logs`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching API logs:", error);
    throw error;
  }
};
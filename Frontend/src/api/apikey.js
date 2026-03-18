import axios from "axios";

const BASE_URL = "http://localhost:3000/apikeys";

export const getApiKeysDetails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/details`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching API keys details:", error);
    throw error;
  }
};

export const getApiKeys = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/key-status`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching API keys:", error);
    throw error;
  }
};

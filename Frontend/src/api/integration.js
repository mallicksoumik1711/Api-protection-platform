import axios from "axios";

const BASE_URL = "https://bouncer-u9t6.onrender.com";

export const getIntegrationData = async (projectId) => {
  try {
    const response = await axios.get(`${BASE_URL}/integration/${projectId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("An error occurred while fetching integration data.");
  }
};

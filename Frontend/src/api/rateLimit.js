import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const rateLimit = async (rateLimitData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/rate-limit/save`,
      rateLimitData,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("An error occurred while saving rate limit settings.");
  }
};

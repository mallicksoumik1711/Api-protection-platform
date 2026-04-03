import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const createProtectedRoute = async (protectedRouteData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/protection-routes/create`,
      protectedRouteData,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("An error occurred while creating the protected route.");
  }
};

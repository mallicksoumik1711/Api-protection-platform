import axios from "axios";

const BASE_URL = "https://bouncer-u9t6.onrender.com";

export const jwtSettings = async (jwtSettingsdata) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/jwt-settings/save`,
      jwtSettingsdata,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("An error occurred while saving JWT settings.");
  }
};

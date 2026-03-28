import axios from "axios";

export const handleLogin = async (email, password) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/auth/login",
      { email, password },
      { withCredentials: true },
    );

    return res.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Login failed.");
  }
};
 
export const handleSignup = async (name, email, password) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/auth/register",
      {
        name,
        email,
        password,
        confirmPassword: password,
      },
      { withCredentials: true },
    );
    return res.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Signup failed.");
  }
};

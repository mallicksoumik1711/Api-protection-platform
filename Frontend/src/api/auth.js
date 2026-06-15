import axios from "axios";

export const handleLogin = async (email, password) => {
  try {
    const res = await axios.post(
      "https://bouncer-u9t6.onrender.com/auth/login",
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
      "https://bouncer-u9t6.onrender.com/auth/register",
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

export const logoutUser = async () => {
  try {
    const res = await axios.post(
      "https://bouncer-u9t6.onrender.com/auth/logout",
      {},
      {
        withCredentials: true,
      },
    );
    return res.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Logout failed.");
  }
};

export const getUser = async () => {
  try {
    const res = await axios.get("https://bouncer-u9t6.onrender.com/auth/me", {
      withCredentials: true,
    });
    return res.data.user;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Failed to fetch user.");
  }
};

export const updateUser = async (field, value) => {
  try {
    const res = await axios.put(
      "https://bouncer-u9t6.onrender.com/auth/update-me",
      {
        field,
        value,
      },
      {
        withCredentials: true,
      },
    );

    return res.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Failed to update user.");
  }
};

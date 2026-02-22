import axios from "axios";

export const handleLogin = async (email, password) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/auth/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      },
    );
    console.log("Login response:", res.data);
    return res.data;
  } catch (error) {
    console.error("Login error:", error);
    return { message: "Login failed." };
  }
};

export const handleSignup = async (name, email, password) => {
  try {
    const res = await axios.post("http://localhost:3000/auth/register", {
      name,
      email,
      password,
      confirmPassword: password,
    });
    console.log("Signup response:", res.data);
    return res.data;
  } catch (error) {
    console.error("Signup error:", error);
    return { message: "Signup failed." };
  }
};

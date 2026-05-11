import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const createProject = async (projectData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/projects/create-project`,
      projectData,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("An error occurred while creating the project.");
  }
};

export const deleteProject = async (projectId) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/projects/delete-project/${projectId}`,
      {
        withCredentials: true,
      },
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("An error occurred while deleting the project.");
  }
};

export const getProjects = async (params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/projects/get-project`, {
      params,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("An error occurred while fetching the projects.");
  }
};

export const updateProject = async (projectId, field, value) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/projects/update-project/${projectId}`,
      {
        field,
        value,
      },
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error) {
    if (error.response && error.response.data?.message) {
      throw new Error(error.response.data.message);
    }

    throw new Error("An error occurred while updating the project.");
  }
};

export const toggleFavourite = async (projectId) => {
  const res = await axios.put(
    `${BASE_URL}/projects/${projectId}/favourite`,
    {},
    { withCredentials: true },
  );
  return res.data;
};

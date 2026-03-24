const projectModel = require("../models/projects.model");

const createProject = async (req, res) => {
  try {
    const { name, description, baseUrl, framework, environment } = req.body;
    if (!name || !baseUrl || !environment) {
      return res.status(400).send({ message: "Required fields missing." });
    }
    const formattedName = name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");

    const projectId =
      formattedName + "-" + Math.random().toString(36).substring(2, 10);

    const newProject = await projectModel.create({
      name,
      description,
      baseUrl,
      framework,
      environment,
      ownerId: req.user.id,
      projectId,
    });
    res.status(201).send({
      success: true,
      message: "Project created successfully.",
      projectId: newProject.projectId,
      project: newProject,
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Internal server error.", error: err.message });
  }
};

module.exports = {
  createProject,
};

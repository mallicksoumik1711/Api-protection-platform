const projectModel = require("../models/projects.model");

const generateProjectId = async (req, res) => {
  try {
    const { name, description, baseUrl, framework, environment } = req.body;

    if (!name || !environment || !baseUrl) {
      return res.status(400).send({ message: "Required fields missing." });
    }

    const formattedName = name
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-"); 

    const projectId =
      formattedName + "-" + Math.random().toString(36).substring(2, 10);

    const createdProject = await projectModel.create({
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
      projectId: createdProject.projectId,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

module.exports = {
  generateProjectId,
};

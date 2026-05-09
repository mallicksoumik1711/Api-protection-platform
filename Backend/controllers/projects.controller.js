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

const getProjects = async (req, res) => {
  try {
    const filter = {
      ownerId: req.user.id,
    };

    if (req.query.favourite === "true") {
      filter.isFavourite = true;
    }

    const projects = await projectModel.find(filter).sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      count: projects.length,
      projects,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal server error.",
      error: error.message,
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await projectModel.findOneAndDelete({
      projectId: req.params.id,
      ownerId: req.user.id,
    });

    if (!project) {
      return res.status(404).send({
        success: false,
        message: "Project not found.",
      });
    }

    // future:
    // delete api keys
    // delete logs
    // delete analytics
    // delete jwt settings
    // delete rate limits
    // delete integrations
    // etc.

    res.status(200).send({
      success: true,
      message: "Project deleted successfully.",
      deletedProjectId: project.projectId,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

const toggleFavourite = async (req, res) => {
  try {
    const project = await projectModel.findOne({
      projectId: req.params.id,
      ownerId: req.user.id,
    });

    if (!project) {
      return res.status(404).send({ message: "Project not found." });
    }

    project.isFavourite = !project.isFavourite;
    project.updatedAt = new Date();

    await project.save();

    res.status(200).send({
      success: true,
      message: "Favourite status updated.",
      project,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal server error.",
      error: error.message,
    });
  }
};

module.exports = {
  createProject,
  getProjects,
  toggleFavourite,
  deleteProject,
};

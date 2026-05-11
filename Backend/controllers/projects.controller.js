const projectModel = require("../models/projects.model");
const jwtSettingsModel = require("../models/jwtSettings.model");
const rateLimitModel = require("../models/rateLimit.model");
const protectedRouteModel = require("../models/protectedRoute.model");

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

const updateProject = async (req, res) => {
  try {
    const { field, value } = req.body;

    if (!field) {
      return res.status(400).send({
        success: false,
        message: "Field is required.",
      });
    }

    const allowedFields = [
      "name",
      "description",
      "baseUrl",
      "framework",
      "environment",
      "status",
    ];

    if (!allowedFields.includes(field)) {
      return res.status(400).send({
        success: false,
        message: "Invalid field update request.",
      });
    }

    const project = await projectModel.findOne({
      projectId: req.params.id,
      ownerId: req.user.id,
    });

    if (!project) {
      return res.status(404).send({
        success: false,
        message: "Project not found.",
      });
    }

    project[field] = value;
    project.updatedAt = new Date();

    await project.save();

    return res.status(200).send({
      success: true,
      message: `${field} updated successfully.`,
      project,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Internal server error.",
      error: error.message,
    });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await projectModel.findOne({
      projectId: req.params.id,
      ownerId: req.user.id,
    });

    if (!project) {
      return res.status(404).send({
        success: false,
        message: "Project not found.",
      });
    }

    // Delete JWT settings
    await jwtSettingsModel.deleteOne({
      projectId: project.projectId,
    });

    // Delete rate limit settings
    await rateLimitModel.deleteOne({
      projectId: project.projectId,
    });

    // Delete all protected routes
    await protectedRouteModel.deleteMany({
      projectId: project.projectId,
    });

    // Finally delete project
    await project.deleteOne();

    res.status(200).send({
      success: true,
      message: "Project and related configurations deleted successfully.",
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
  updateProject,
  deleteProject,
};

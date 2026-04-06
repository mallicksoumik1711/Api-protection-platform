import { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { setProject } from "../../store/projectSlice";

function ProjectRouteGuard({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { projectId } = useParams();

  useEffect(() => {
    const storedProjectId = localStorage.getItem("projectId");

    if (projectId) {
      dispatch(setProject(projectId));
      localStorage.setItem("projectId", projectId);
      return;
    }

    if (!projectId && storedProjectId) {
      navigate(`/project/${storedProjectId}${location.pathname}`, {
        replace: true,
      });
    }
  }, [projectId, location.pathname]);

  return children;
}

export default ProjectRouteGuard;

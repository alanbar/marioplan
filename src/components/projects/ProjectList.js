import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
    return (
        <div className="project-list section">
            {projects &&
                projects.map(x => {
                    return (
                        <Link to={"/project/" + x.id}>
                            <ProjectSummary project={x} key={x.id} />
                        </Link>
                    );
                })}
        </div>
    );
};

export default ProjectList;

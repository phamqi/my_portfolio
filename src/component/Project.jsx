import React from "react";
import PropTypes from "prop-types";

Project.propTypes = {};

function Project({ dataProject }) {
  return (
    <div className="projects">
      {dataProject.map((item, index) => (
        <div key={index} className={index % 2 ? "project" : "project_reverse"}>
          <div className="project_img">
            <img alt="live_demo" src={item.img}></img>
          </div>
          <div className="project_txt">
            <h3 className="project_name">{item.name}</h3>
            <p className="project_description">{item.description}</p>
            <div className="project_language">
              {item.language.map((language, index) => (
                <img key={index + 99} alt="language" src={language} />
              ))}
            </div>
            <div className="app_redirect">
              <a target="_blank" href={item.sandbox} alt={item.name}>
                <div className="app_live_demo btn_redirect">
                  <img src="codesandbox.png" alt="logo_code-sandbox"></img>
                  Live Demo
                </div>
              </a>
              <a target="_blank" href={item.github} alt={item.name}>
                <div className="btn_redirect app_source">
                  <img src="github.png" alt="logo_github"></img>View Github
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;

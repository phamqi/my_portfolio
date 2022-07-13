import React from "react";
import PropTypes from "prop-types";

Project.propTypes = {
  dataProject: PropTypes.array,
};

function Project({ dataProject }) {
  return (
    <div className="projects">
      {dataProject.map((item, index) => (
        <div key={index} className={index % 2 ? "project" : "project_reverse"}>
          <div className="project_img">
            <img className="observer" alt="live_demo" src={item.img}></img>
          </div>
          <div className="project_txt">
            <h3 className="project_name">{item.name}</h3>
            <p className="project_description">{item.description}</p>
            <div className="project_language">
              {item.language.map((language, index) => (
                <div
                  key={index + 99}
                  style={{
                    width: "1.8rem",
                    height: "1.8rem",
                    padding: "0 0.6rem 0 0",
                    backgroundImage: `url(${language})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                ></div>
              ))}
            </div>
            <div className="app_redirect">
              <a target="_blank" href={item.sandbox} alt={item.name}>
                <div className="app_live_demo btn_redirect">
                  <div
                    style={{
                      width: "25px",
                      height: "25px",
                      backgroundImage: "url(codesandbox.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  ></div>
                  Live Demo
                </div>
              </a>
              <a target="_blank" href={item.github} alt={item.name}>
                <div className="btn_redirect app_source">
                  <div
                    style={{
                      width: "25px",
                      height: "25px",
                      backgroundImage: "url(github.png)",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  ></div>
                  View Github
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

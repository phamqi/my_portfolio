import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { HOST, VIA_PROJECT } from "../contants/data";
import useProjectApi from "../api/useProjectApi";
Project.propTypes = {
  dataProject: PropTypes.array,
};

function Project() {
  const { data, loading } = useProjectApi();
  return (
    <div className="projects">
      {loading ? (
        <div className="skeleton">
          <div className="project reverse">
            <div className="project_img">
              <div className="img_inner"></div>
            </div>
            <div className="project_txt">
              <h3 className="project_name">
                <div className="img_inner"></div>
              </h3>
              <div className="project_p">
                <div className="img_inner"></div>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project_img">
              <div className="img_inner"></div>
            </div>
            <div className="project_txt">
              <h3 className="project_name">
                <div className="name_inner"></div>
              </h3>
              <div className="project_p">
                <div className="p_inner"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        data.map((item, index) => (
          <div
            key={index}
            className={index % 2 ? "project" : "project reverse"}
          >
            <div className="project_img">
              <img
                className="img_lazy"
                alt="live_demo"
                src={VIA_PROJECT}
                lazy-load={HOST + item.img}
              />
            </div>
            <div className="project_txt">
              <h3 className="project_name">{item.name}</h3>
              <p className="project_description">{item.description}</p>
              <div className="project_language">
                {JSON.parse(item.language).map((language, index) => (
                  <div
                    key={index + 99}
                    style={{
                      "--language": `url(${HOST + language})`,
                    }}
                  ></div>
                ))}
              </div>
              <div className="app_redirect">
                <a
                  target="_blank"
                  href={item.codelink}
                  alt={item.name}
                  rel="noopener noreferrer"
                >
                  <div className="app_live_demo btn_redirect">Live Demo</div>
                </a>
                <a
                  target="_blank"
                  href={item.gitlink}
                  alt={item.name}
                  rel="noopener noreferrer"
                >
                  <div className="btn_redirect app_source">View Github</div>
                </a>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Project;

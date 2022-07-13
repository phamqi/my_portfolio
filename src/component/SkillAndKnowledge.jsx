import React from "react";
import PropTypes from "prop-types";

SkillAndKnowledge.propTypes = {
  dataSkill: PropTypes.array,
  dataKnow: PropTypes.array,
};

function SkillAndKnowledge({ dataKnow, dataSkill }) {
  return (
    <div>
      <div className="skills df-r">
        {dataSkill.map((item, index) =>
          item.txt ? (
            <div key={index} className="skill df-c">
              <div
                style={{
                  width: "65px",
                  height: "65px",
                  backgroundImage: `url(${item.img})`,
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <p className="skill_text">{item.txt}</p>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className="knowledge">
        <ul>{dataKnow && dataKnow.map((item) => <li>{item}</li>)}</ul>
      </div>
    </div>
  );
}

export default SkillAndKnowledge;

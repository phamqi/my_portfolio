import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import getApi from "../api/getApi";
import { HOST } from "../contants/data";

SkillAndKnowledge.propTypes = {
  translateKnow: PropTypes.number,
  translateSkill: PropTypes.number,
};

function SkillAndKnowledge({ translateKnow, translateSkill }) {
  const [dataSkill, setDataSkill] = useState([]);
  const [dataKnow, setDataKnow] = useState([]);
  useEffect(() => {
    try {
      (async () => {
        const [{ data }, { dataKnow }] = await Promise.all([
          await getApi.getData(),
          await getApi.getKnowledge(),
        ]);
        setDataSkill(data);
        setDataKnow(dataKnow);
      })();
    } catch (error) {}
  }, []);

  return (
    <div>
      <div className="app_my_skill">
        <h2
          id="h2_skill"
          style={{
            transform: `translateX(${translateSkill}px)`,
          }}
          className="app_my_skill_txt "
        >
          My skills
        </h2>
      </div>
      <div className="skills df-r">
        {dataSkill.map((item, index) =>
          item.txt ? (
            <div key={index} className="skill df-c">
              <div
                style={{
                  backgroundImage: `url(${HOST + item.img})`,
                }}
              ></div>
              <p className="skill_text">{item.txt}</p>
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className="app_my_skill">
        <h2
          style={{ transform: `translateX(${translateKnow}px)` }}
          className="app_my_skill_txt"
        >
          Knowledge
        </h2>
      </div>
      <div className="knowledge df-c">
        <ul>
          {dataKnow.map((item, index) => (
            <li key={index}>{item.txt}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillAndKnowledge;

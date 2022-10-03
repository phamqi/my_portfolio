import { lazy, useEffect, useRef, useState } from "react";
import "./app.css";
import Background from "./component/Background";
import Contact from "./component/Contact";
import MusicNote from "./component/MusicNote.jsx";
import Profiles from "./component/Profiles";
import Project from "./component/Project";
import SkillAndKnowledge from "./component/SkillAndKnowledge";

import "./styles.css";

function App() {
  console.log("app rerender");
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  const [translateSkill, setTranslateSKill] = useState(window.innerHeight / 2);
  const [translateKnow, setTranslateKnow] = useState(window.innerHeight / 2);
  const ref = useRef();

  useEffect(() => {
    let scroll = document.getElementById("app_items");
    let h2_skill = document.querySelector("#h2_skill");
    let locationSkill = h2_skill.getBoundingClientRect().top;
    let skill;
    let know;
    const details = document.getElementById("details");
    scroll.addEventListener("scroll", (event) => {
      details.open = false;
      skill = scroll.scrollTop - locationSkill;
      know = locationSkill - scroll.scrollTop;
      if (skill < 0) {
        setTranslateSKill(skill / 4);
      } else {
        setTranslateSKill(0);
      }
      if (know > 0) {
        setTranslateKnow(know / 4);
      } else {
        setTranslateKnow(0);
      }
      document.querySelectorAll(".img_lazy").forEach((item) => {
        if (item.getBoundingClientRect().top <= 600) {
          item.setAttribute("src", item.getAttribute("lazy-load"));
          item.style.transform = `translateY(${
            (-scroll.scrollTop + item.getBoundingClientRect().top) / 58
          }px)`;
        }
      });
    });
  }, []);

  return (
    <div className="app">
      <MusicNote />
      <details id="details" className="app_list">
        <summary>Menu</summary>
        <ul className="app_list_content">
          <li>
            <a href="#overview">Overview</a>
          </li>
          <li>
            <a href="#h2_skill">Skills & knowledge</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </details>
      <Background />
      <div id="app_items" className="app_items" ref={ref}>
        <div className="app_bg df">
          <div className="app_txt df-c">
            {ready ? (
              <>
                <h1 className="app_text--animation">Hi!</h1>
                <div className="app_bt"></div>
                <div className="df-c-j">
                  <h2 className="app_text--animation">I am Quy</h2>
                  <h2 className="app_text--animation">I'm a developer</h2>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="app_item infor  df-c">
          <h2 id="overview">Overview</h2>
          <Profiles />
        </div>
        <div className="app_item df-c">
          <SkillAndKnowledge
            translateKnow={translateKnow}
            translateSkill={translateSkill}
          />
        </div>
        <div className="app_item df-c">
          <h2 id="project">Project</h2>
          <Project />
        </div>
        <div className="app_item df-c-f">
          <h2 id="contacts">Get in touch</h2>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;

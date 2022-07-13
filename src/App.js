import { useEffect, useRef, useState } from "react";
import "./app.css";
import Background from "./component/Background";
import Project from "./component/Project";
import { dataProject, data } from "./contants/data";
import SkillAndKnowledge from "./component/SkillAndKnowledge";
import "./styles.css";
import Contact from "./component/Contact";
function App() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  const [translateSkill, setTranslateSKill] = useState(window.innerHeight / 3);
  const [translateKnow, setTranslateKnow] = useState(window.innerHeight / 3);
  const ref = useRef();
  useEffect(() => {
    let scrollDemo = document.getElementById("app_items");
    let h2_skill = document.getElementById("h2_skill");
    let locationSkill = h2_skill.getBoundingClientRect().top;
    const abc = document.querySelectorAll("img");
    scrollDemo.addEventListener("scroll", (event) => {
      let skill = scrollDemo.scrollTop - locationSkill;
      let know = locationSkill - scrollDemo.scrollTop;
      if (skill < 0) {
        setTranslateSKill(skill / 3);
      } else {
        setTranslateSKill(0);
      }
      if (know > 0) {
        setTranslateKnow(know / 3);
      } else {
        setTranslateKnow(0);
      }
      abc.forEach((item) => {
        item.style.transform = `translateY(${
          (scrollDemo.scrollTop - item.getBoundingClientRect().top) / 30
        }px)`;
      });
    });
  }, []);

  return (
    <div className="app">
      <Background data={data} />
      <div id="app_items" className="app_items" ref={ref}>
        <div className="app_bg df">
          <div className="app_txt df-c">
            <h1 className={ready && "app_text--animation"}>Hi! </h1>
            <div className={ready && "app_bt"}></div>
            <div className="df-c-j">
              <h2 className={ready && "app_text--animation"}>I am Quy</h2>
              <h2 className={ready && "app_text--animation"}>
                I'm a developer
              </h2>
            </div>
          </div>
        </div>
        <div className="app_item infor df-r-600-c">
          <div className="app_img df">
            <img
              src="https://pbs.twimg.com/profile_images/1479282676985118722/FZI6iXUt_400x400.jpg"
              alt="avatar"
            ></img>
          </div>
          <div className="app_infor">
            <p>
              My name is Pham Xuan Quy, 24 years old. I'm originally from Hai
              Duong but I've lived in HCM city for 20 years now. I graduated
              from the TayDo University. I have made some projects. I hope to be
              a great developer and get my dream job in the future
            </p>
          </div>
        </div>
        <div className="app_item df-c">
          <div className="app_my_skill">
            <h2
              id="h2_skill"
              style={{ transform: `translateX(${translateSkill}px)` }}
              className="app_my_skill_txt "
            >
              My skills
            </h2>
            <h2 className="app_my_skill_txt">&</h2>
            <h2
              style={{ transform: `translateX(${translateKnow}px)` }}
              className="app_my_skill_txt"
            >
              Knowledge
            </h2>
          </div>
          <SkillAndKnowledge dataSkill={data} />
        </div>
        <div className="app_item df-c">
          <h2>Project</h2>
          <Project dataProject={dataProject} />
        </div>
        <div className="app_item df-c">
          <h2>Get in touch</h2>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;

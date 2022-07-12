import "./app.css";
import "./styles.css";
import Background from "./component/Background";
import { useEffect, useRef, useState } from "react";
import { useResize } from "./component/useResize";
import Project from "./component/Project";
import { dataProject } from "./contants/dataProject";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [startCanvas, setStartCanvas] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
    const timer = setInterval(() => {
      setWidth(document.body.clientWidth);
      setHeight(window.innerHeight);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const backgound = setTimeout(() => {
      setStartCanvas(true);
    }, 1000);
    return () => clearTimeout(backgound);
  });
  const data = [
    { img: "css.png", txt: "css" },
    { img: "reactjs.png", txt: "ReactJS" },
    { img: "sass.png", txt: "Scss" },
    { img: "nodejs.png", txt: "NodeJS" },
    { img: "javascript.png", txt: "JavaScript" },
    { img: "html.png", txt: "HTML" },
    { img: "mysql.png", txt: "MySQL" },
    { img: "vsc.png" },
    { img: "sandwich.png" },
    { img: "videogame.png" },
    { img: "burger.png" },
    { img: "css.png" },
    { img: "reactjs.png" },
    { img: "sass.png" },
    { img: "nodejs.png" },
    { img: "javascript.png" },
    { img: "html.png" },
    { img: "mysql.png" },
    { img: "vsc.png" },
    { img: "burger.png" },
  ];
  // { img: "sql.png", txt: "SQL" },
  return (
    <div className="app">
      <Background
        width={width}
        height={height}
        data={data}
        startCanvas={startCanvas}
      />
      <div className="app_items">
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
        <div className="app_item df-r-600-c">
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
          <h2 className="">My skills & Knowledge</h2>
          <div className="skills df-r">
            {data.map((item, index) =>
              item.txt ? (
                <div className="skill df-c" key={index}>
                  <img alt="skill-knowledge" src={item.img} />
                  <p className="skill_text">{item.txt}</p>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
        <div className="app_item df-c">
          <h2>Project</h2>
          <Project dataProject={dataProject} />
        </div>
        <div className="app_item">
          <h2>Get in touch</h2>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./app.css";
import "./styles.css";
import Background from "./component/Background";
import { useEffect, useRef, useState } from "react";
import { useResize } from "./component/useResize";

function App() {
  // const { width, height } = useResize();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const timer = setInterval(() => {
      setWidth(document.body.clientWidth);
      setHeight(window.innerHeight);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
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
  ];
  // { img: "sql.png", txt: "SQL" },
  return (
    <div className="app">
      <div className="app_items">
        <div className="app_bg df">
          <div className="app_txt df-c">
            <h1>Hi! </h1>
            <h2>I am Quy</h2>
            <h2>I'm a developer</h2>
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
          <div className="project df-r">
            <div className="project_txt">
              <h3 className="project_name">ABC</h3>
              <p className="project_description">abc def</p>
              <div className="project_language">
                <img alt="language" src="reactjs.png" />
                <img alt="language" src="javascript.png" />
              </div>
            </div>
            <div className="project_img">
              <img alt="live_demo" src="https://picsum.photos/600/300"></img>
            </div>
          </div>
        </div>
        <div className="app_item">
          <h2>Get in touch</h2>
        </div>
      </div>

      <Background width={width} height={height} data={data} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import getApi from "../api/getApi";
import { HOST } from "../contants/data";

Background.propTypes = {};

function Background() {
  let canvas;
  let ctx;
  let icons = [];
  let iconWidth = 64;
  const [host, setHost] = useState(HOST);
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data, host } = await getApi.getData();
        setData(data);
        setHost(host);
      } catch (error) {}
    })();
  }, []);
  useEffect(() => {
    const dataLength = data.length;
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");
    class ICON {
      constructor(x, y, velx, vely, img) {
        this.x = x;
        this.y = y;
        this.velx = velx;
        this.vely = vely;
        this.img = img;
      }
      drawImage(rot) {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, this.x, this.y);
        ctx.rotate(rot);
        ctx.drawImage(this.img, -20 / 2, -20 / 2);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.restore();
      }
      update() {
        if (
          this.x + iconWidth >= window.innerWidth ||
          this.x - iconWidth <= 0
        ) {
          this.velx = -this.velx;
        }
        if (
          this.y + iconWidth >= window.innerHeight ||
          this.y - iconWidth <= 0
        ) {
          this.vely = -this.vely;
        }
        this.x += this.velx;
        this.y += this.vely;
      }
    }
    function random(min, max) {
      let num = Math.floor(Math.random() * (max - min + 1)) + min;
      if (num === 0) {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
      }
      return num;
    }
    const imgs = data.map((source) => {
      const image = document.createElement("img");
      image.src = `${host + source.img}`;
      return image;
    });
    const setup = () => {
      icons = imgs.map(
        (item) =>
          new ICON(
            random(1, window.innerWidth),
            random(1, window.innerHeight),
            random(-2, 2),
            random(-2, 2),
            item
          )
      );
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const animate = (time) => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < dataLength; i++) {
        icons[i].drawImage(time / 1000);
        icons[i].update();
      }
    };
    setup();
    animate();
    window.addEventListener("resize", setup);
  }, [data]);

  return <canvas id="canvas" className="canvas"></canvas>;
}

export default Background;

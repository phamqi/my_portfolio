import { useEffect, useLayoutEffect, useMemo, useState } from "react";

import { useResize } from "./useResize";
Background.propTypes = {};

function Background({ width, height, data }) {
  let canvas;
  let ctx;
  const balls = [];
  console.log(width, height);
  console.log("rerenfer");

  useEffect(() => {
    const dataLength = data.length;
    canvas = document.querySelector("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    class Ball {
      constructor(x, y, velx, vely, img) {
        this.x = x;
        this.y = y;
        this.velx = velx;
        this.vely = vely;
        this.img = img;
      }
      drawImageRotated(rot) {
        ctx.setTransform(1, 0, 0, 1, this.x, this.y);
        ctx.rotate(rot);
        ctx.drawImage(this.img, -20 / 2, -20 / 2);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      }
      updateBall() {
        if (this.x + 64 >= width || this.x - 64 <= 0) {
          this.velx = -this.velx;
        }
        if (this.y + 64 >= height || this.y - 64 <= 0) {
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

    let h;
    for (h = 0; h < dataLength; h++) {
      let img = new Image();
      img.src = data[h].img;
      const ball = new Ball(
        random(2, width),
        random(2, height),
        random(-1, 1),
        random(-1, 1),
        img
      );
      balls.push(ball);
    }
    function loop(time) {
      for (let i = 0; i < balls.length; i++) {
        balls[i].drawImageRotated(time / 1000);
        balls[i].updateBall();
      }
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, width, height);
      requestAnimationFrame(loop);
    }
    loop();
  }, [width, height, data]);
  useEffect(() => {
    function loop(time) {
      for (let i = 0; i < balls.length; i++) {
        balls[i].drawImageRotated(time / 1000);
        balls[i].updateBall();
      }
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(loop);
    }
    window.addEventListener("load", loop);
  }, [width, height, data]);
  return <canvas id="canvas" className="canvas"></canvas>;
}

export default Background;

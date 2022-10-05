import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";

OnTouch.propTypes = {};

function OnTouch(props) {
  let a;
  let b;
  let d;
  let x;
  let y;
  let string = "";
  const deg = [
    "-90deg",
    "90deg",
    "60deg",
    "-60deg",
    "120deg",
    "-120deg",
    "-150deg",
    "150deg",
    "360deg",
  ];
  const animate = [
    "touch-top",
    "touch-left",
    "touch-right",
    "touch-bottom",
    "touch-top",
    "touch-left",
    "touch-right",
    "touch-bottom",
    "touch-null",
  ];
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const setup = () => {
    string = "";
    console.log("resetup");
    for (let i = 0; i < 4; i++) {
      a = random(0, 8);
      b = random(65, 85);
      d = random(7, 15);
      let c = `<div
          class="on__touch__item" style="--local: ${d}px; --start: ${-(
        d / 5 +
        20
      )}px;--end: ${-b}px;--deg: ${deg[a]};--ani: ${animate[a]};"></div>`;
      string += c;
    }
    return string;
  };
  useEffect(() => {
    window.addEventListener("click", function (e) {
      let items = setup();
      x = e.clientX;
      y = e.clientY;
      console.log(x, y);
      document.querySelector(
        "#touch__wrapper"
      ).innerHTML = `<div  class="touch__wrapper" style="left: ${
        x - 60
      }px; top: ${
        y - 60
      }px;"><div class="on__touch__items"><span class="item__1"></span><span class="item__2"></span><span class="item__3"></span><span class="item__4"></span><span class="item__5"></span>${items}</div></div>`;
    });
  }, []);
  return <div id="touch__wrapper" className="on_touch"></div>;
}

export default OnTouch;

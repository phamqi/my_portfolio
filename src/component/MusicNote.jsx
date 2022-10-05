import React from "react";
import PropTypes from "prop-types";
import { useRef, useState, useEffect, memo } from "react";

function MusicNote(props) {
  const [isShow, setIsShow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef();
  const PlayBgMusic = () => {
    setIsShow(!isShow);
  };
  const playAudio = () => {
    if (!ref.current.paused) {
      ref.current.pause();
      setIsPlaying(false);
    } else {
      ref.current.play();
      setIsPlaying(true);
      setTimeout(() => {
        setIsShow(false);
      }, 300);
    }
  };
  useEffect(() => {
    ref.current.volume = 0.15;
  }, []);
  return (
    <div className="bg__music">
      <div
        className={isShow ? "bg__music__wrapper show" : "bg__music__wrapper "}
      >
        <div
          onClick={PlayBgMusic}
          className={isPlaying ? "bg__music__icon is__play" : "bg__music__icon"}
        >
          <div className="bg__music__icon__after"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
            <path fillRule="evenodd" d="M9 3v10H8V3h1z" />
            <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
          </svg>
        </div>
        <div className="bg__music__audio">
          <div className="bg__music__audio__action" onClick={playAudio}></div>
          <audio controls loop ref={ref}>
            <source
              src="Blade-Soul-Where-the-Wind-Sleeps.ogg"
              type="audio/ogg"
            />
            <source
              src="Blade-Soul-Where-the-Wind-Sleeps.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>
    </div>
  );
}

MusicNote.propTypes = {};

export default memo(MusicNote);

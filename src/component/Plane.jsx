import React from "react";

function Plane(props) {
  return (
    <div className="wrapper">
      <div className="plane__paper">
        <div className="plane__wrapper">
          <div className="plane_transfor"></div>
        </div>
        <div className="plane__wrapper">
          <div className="paperplane">
            <div className="plane">
              <div className="wingRight"></div>
              <div className="wingLeft"></div>
              <div className="bottom"></div>
              <div className="top"></div>
              <div className="middle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Plane;

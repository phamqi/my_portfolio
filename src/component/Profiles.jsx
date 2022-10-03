import axios from "axios";
import React, { useEffect, useState } from "react";
import getApi from "../api/getApi";
import { HOST } from "../contants/data";
import useProfilesApi from "../api/useProfilesApi";

Profiles.propTypes = {};

function Profiles(props) {
  const { data, loading } = useProfilesApi();
  return (
    <>
      {loading ? (
        <div className="skeleton">
          <div className="df-r-600-c">
            <div className="app_img df">
              <div className="img_inner"></div>
            </div>
            <div className="app_infor">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam placeat inventore iusto ipsam porro similique tempore.
                Maiores corrupti in adipisci voluptatem, porro excepturi magnam,
                autem at officia cumque alias rem!
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="df-r-600-c">
          <div className="app_img df">
            <img
              className="img_lazy"
              src="https://via.placeholder.com/300"
              alt="avatar"
              lazy-load={`${HOST + data.avatar}`}
            />
          </div>
          <div className="app_infor">
            <p>{data.infor}</p>
          </div>
        </div>
      )}
    </>
  );
}
export default Profiles;

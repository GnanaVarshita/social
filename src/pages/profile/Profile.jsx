import React from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/posts/3.jpg"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="assets/persons/7.jpg"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Jain</h4>
              <span className="profileInfoDesc">Hello</span>
            </div>
          </div>
          <div className="profileRightBottom"></div>
          <Feed />
          <Rightbar profile />
        </div>
      </div>
    </div>
  );
}

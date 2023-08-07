import React from "react";
import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
export default function Topbar() {
  return (
    <div>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">LamaSocial</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <SearchIcon className="SearchIcon" />
            <input type="text" className="searchInput" placeholder="Search" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <PersonIcon />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <ChatBubbleIcon />
              <span className="topbarIconBadge">4</span>
            </div>

            <div className="topbarIconItem">
              <NotificationsIcon />
              <span className="topbarIconBadge">6</span>
            </div>
          </div>
          <img src="/assets/persons/1.jpg" alt="" className="topbarImg" />
        </div>
      </div>
    </div>
  );
}

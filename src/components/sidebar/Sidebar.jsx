import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  Videocam,
  Group,
  Bookmarks,
  QuestionMark,
  Work,
  Event,
  School,
} from "@mui/icons-material";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>

          <li className="sidebarListItem">
            <Videocam className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>

          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Gropus</span>
          </li>

          <li className="sidebarListItem">
            <Bookmarks className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListItem">
            <QuestionMark className="sidebarIcon" />
            <span className="sidebarListItemText">Questions?</span>
          </li>

          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="assets/persons/2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Jane </span>
          </li>

          <li className="sidebarFriend">
            <img
              src="assets/persons/2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Jane </span>
          </li>

          <li className="sidebarFriend">
            <img
              src="assets/persons/2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Jane </span>
          </li>

          <li className="sidebarFriend">
            <img
              src="assets/persons/2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Jane </span>
          </li>

          <li className="sidebarFriend">
            <img
              src="assets/persons/2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Jane </span>
          </li>

          <li className="sidebarFriend">
            <img
              src="assets/persons/2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Jane </span>
          </li>

          <li className="sidebarFriend">
            <img
              src="assets/persons/2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Jane </span>
          </li>

          <li className="sidebarFriend">
            <img
              src="assets/persons/2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Jane </span>
          </li>

          <li className="sidebarFriend">
            <img
              src="assets/persons/2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Jane </span>
          </li>

          <li className="sidebarFriend">
            <img
              src="assets/persons/2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Jane </span>
          </li>

          <li className="sidebarFriend">
            <img
              src="assets/persons/2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Jane </span>
          </li>

          <li className="sidebarFriend">
            <img
              src="assets/persons/2.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Jane </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import "./post.css";
import { MoreVert, Favorite, ThumbUp } from "@mui/icons-material";
export default function Post() {
  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                src="assets/persons/1.jpg"
                alt=""
                className="postProfileImg"
              />
              <span className="Username">Christian Grey</span>
              <span className="postDate">5 min ago</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">Date with my Girl</span>
            <img src="assets/posts/1.avif" alt="" className="postImg" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <Favorite className="postHearts" />
              <ThumbUp className="postHearts" />
              <span className="postLikeCounter">196 people liked it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">9 Comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

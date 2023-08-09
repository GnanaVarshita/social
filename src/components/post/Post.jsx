import React, { useEffect, useState } from "react";
import "./post.css";
import { MoreVert, Favorite, ThumbUp } from "@mui/icons-material";
import { Users } from "../../dummyData";
export default function Post({ post }) {
  const user = Users.filter((u) => u.id === 1);
  const [like, setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
  };
  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                src={
                  Users.filter((u) => u.id === post?.userId)[0].profilePicture
                }
                alt=""
                className="postProfileImg"
              />
              <span className="Username">
                {Users.filter((u) => u.id === post.userId)[0].username}
              </span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.photo} alt="" className="postImg" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <Favorite className="postHearts" onClick={likeHandler} />
              <ThumbUp className="postHearts" onClick={likeHandler} />
              <span className="postLikeCounter">{like} people liked it</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

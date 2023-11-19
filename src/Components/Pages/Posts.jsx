import React from "react";
import { AiFillLike } from "react-icons/ai";
import { data } from "../../data";
function Posts() {
  const posts = data[0].Posts;
  return (
    <div class="posts">
      {posts.map((post, index) => (
        <div className="post__container" key={index}>
          <div className="post_header">
            <h1>{post.Title}</h1>
            <AiFillLike size="25px" color="#fce323" />
          </div>
          <div className="post_body">{post.Body}</div>
          <div className="post_footer">
            <p>
              <span className="post_type">{post.Type}</span> by {post.PostedBy}
            </p>

            <p className="post_stats">
              {post.TimeStats.Month} {post.TimeStats.Date} <span>.</span>{" "}
              {post.TimeStats.TimeToRead} Read <span>.</span>{" "}
              {post.TimeStats.NumberOfViews}
              Views
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;

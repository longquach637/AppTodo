import React from "react";
import "./Postlist.scss";

function PostList(props) {
  const { posts } = props;
  return (
    <ul className="post-list">
      {posts &&
        posts.length > 0 &&
        posts.map((item, index) => (
          <li key={item.id}>
            {index + 1} - title: {item.title} - author: {item.author}
          </li>
        ))}
    </ul>
  );
}

export default PostList;

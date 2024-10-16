import React from "react";
import p from "./Post.module.css";
const Post = (props) => {
  return (
    <div>
      <div className={p.item}>
        <img
          src="https://www.film.ru/sites/default/files/people/1455861-882462.jpg"
          alt=""
        />
        {props.message}
        <div>
          <button className={p.likeButton}>
            <span>Нравится</span>
          </button>
          <button>
            <span>Удалить</span>
          </button>
          <span>{ props.likes }</span>
        </div>
      </div>
    </div>
  );
};

export default Post;

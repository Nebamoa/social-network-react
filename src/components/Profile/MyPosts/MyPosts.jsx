import React from "react";
import p from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, changeNewPostTextActionCreator } from '../../../redux/profileReducer'


const MyPosts = (props) => {
  let postsElement = props.posts.map( (p) => <Post message={p.post} likes={p.likes} />)
  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost()
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text) 
  }

  return (
    <div className={p.posts}>
      my posts
      <div>
        <textarea className={p.textarea} onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      
      <button onClick={ onAddPost }>Add post</button>

      <div>
        { postsElement }
      </div>
    </div>
  );
};

export default MyPosts;

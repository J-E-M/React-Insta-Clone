import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import './PostStyles.css';

const Post = props => {

  return (

    <div className="post">

      <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl}/>
      <div className="post-img-container">
        <img className="post-img" src={props.post.imageUrl} alt="an img that gets posted"/>
      </div>
      <CommentSection comments={props.post.comments} />

    </div>
  );
};

export default Post;

import React from 'react';
import './PostStyles.css';

const PostHeader = props => {
  return (
    <div className="post-header">

      <div className="post-thumbnail-container">
        <img className="post-thumbnail" src={props.thumbnailUrl} alt="a pic for a thumbnail"/>
      </div>

      <div>{props.username}</div>

    </div>
  );
};

export default PostHeader;

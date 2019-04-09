import React from 'react';
import './CommentStyles.css';
import PropTypes from 'prop-types';

const Comment = (props) => {
  return (

    <div className="comment-stuff">

      <span className="comment">{props.comment.text}</span>{' '}
      <span className="person">-{props.comment.username}</span>

    </div>

  );
};

Comment.propTypes = {

  comment: PropTypes.shape({

    text: PropTypes.string,
    username: PropTypes.string

  })
};

export default Comment;

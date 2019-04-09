import React from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      comments: props.comments

    };
  }
  render() {

    return (
      <div>
        {this.state.comments.map(item => <Comment comment={item} />)}
        <CommentInput />
      </div>
    );
  }
}

  CommentSection.propTypes = {

    comments: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string, username: PropTypes.string }))};

export default CommentSection;

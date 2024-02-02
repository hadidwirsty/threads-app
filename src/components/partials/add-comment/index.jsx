import { useRef } from "react";
import PropTypes from "prop-types";

import Button from "../button/index";
import Input from "../input";

const AddComment = ({ onSubmit }) => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = formRef.current[0];

    onSubmit(comment.value);
    comment.value = "";
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <Input
        title="Add your comment"
        type="textarea"
        id="commentInput"
        placeholder="Your comment here... (max. 400 chars)"
        max={400}
      />

      <br />

      <Button type="submit">Add comment</Button>
    </form>
  );
};

AddComment.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddComment;

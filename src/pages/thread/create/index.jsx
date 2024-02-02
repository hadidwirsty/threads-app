import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { asyncAddThread } from "../../../helpers/threads/action";
import LayoutBase from "../../../components/layouts/base";
import Input from "../../../components/partials/input";
import Button from "../../../components/partials/button";

const CreateThreadPage = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = formRef.current[0].value;
    const category = formRef.current[1].value;
    const body = formRef.current[2].value;

    dispatch(asyncAddThread({ title, body, category }));
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
      navigate("/");
    }, 2000);
  };

  return (
    <LayoutBase>
      <h2>Create a new thread</h2>
      {showSuccessMessage && (
        <div className="success-message">Success added thread!</div>
      )}
      <form
        ref={formRef}
        className="mx-auto mt-8 flex max-w-sm flex-col items-center justify-center gap-y-6"
        onSubmit={handleSubmit}
      >
        <Input
          title="Title"
          type="text"
          placeholder="e.g. Hello world!"
          id="titleInput"
          max={50}
        />
        <Input
          title="Category"
          type="text"
          placeholder="e.g. technology"
          id="categoryInput"
          max={20}
        />
        <Input
          title="Thread content"
          type="textarea"
          placeholder="Your thread content here..."
          id="threadContentInput"
        />
        <Button type="submit">Create thread</Button>
      </form>
    </LayoutBase>
  );
};

export default CreateThreadPage;

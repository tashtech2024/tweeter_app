import { useState, useRef } from "react";
import PropTypes from "prop-types"
import styles from "./CreateTweetForm.module.css";
import {Button, Form} from "react-bootstrap"

function CreateTweetForm({addTweet}) {
const [content, setContent] = useState ("");
const contentinputRef = useRef(null);

const handleSubmit =(e) => {
  e.preventDefault();

 if (contentinputRef.current.value ===''){
  inputRef.current.focus();
  // alert('Please fill this out');
  return; 
 }
  
  addTweet(content);
  setContent("");
};

return (
  <Form onSubmit={handleSubmit} className={styles.container}>
    <Form.Label htmlFor="content">
      <h4>whats in you mind?</h4>
    </Form.Label>

    <Form.Control
      className="mb-4"
      type="text"
      name="content"
      id="content"
      value={content}
      onChange={(e) => setContent(e.target.value)}
      ref={contentinputRef}
    />

    <Button type="submit">Tweet</Button>
  </Form>
);
}

CreateTweetForm.propTypes = {
addTweet: PropTypes.func,
};

export default CreateTweetForm;
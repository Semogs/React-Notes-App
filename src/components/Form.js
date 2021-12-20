import { useState } from "react";
import { nanoid } from "nanoid";

function Form(props) {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: nanoid(),
      title: title,
      text: input,
      date: Date(),
    });
    setInput("");
    setTitle("");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="inputTitle"
          placeholder="Your Title"
          value={title}
          onChange={handleChangeTitle}
        ></input>
        <textarea
          placeholder="Your Note"
          value={input}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;

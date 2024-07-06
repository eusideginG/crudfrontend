"use client";

import { useState } from "react";
import { titleExist } from "../../../services/validation/textInputValidation";

export default function FormCard(props) {
  const [title, setTitle] = useState(props.Form.Title);
  const [description, setDescription] = useState(props.Form.Description);
  const [error, setError] = useState(false);

  const handleOnChangeTitle = (value) => {
    setError(false);
    if (titleExist(props.Data, value, props.Id)) {
      setError(true);
      setTitle(`${value} - ${Date.now()}`);
      return;
    }
    setTitle(value);
  };
  return (
    <div className="flex flex-col items-center w-full *:px-4 *:py-1 *:w-full">
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => handleOnChangeTitle(e.target.value)}
        placeholder="Title"
        className="mb-2 rounded-xl"
      />
      {error && (
        <p className="text-red-500 text-sm">
          Name exist! <span className="text-black"> - </span>
          <span className="text-green-500">New name generated!</span>
        </p>
      )}
      <textarea
        name="description"
        placeholder="Description"
        rows={5}
        cols={20}
        maxLength={200}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className=" rounded-xl"
      />
    </div>
  );
}

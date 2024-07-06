"use client";

import { useState } from "react";
import { nameExist } from "../../../services/validation/textInputValidation";

export default function FormData(props) {
  const [data, setData] = useState(props.Data);
  const [canAdd, setCanAdd] = useState(data.length < 10);
  const [canRemove, setCanRemove] = useState(data.length > 0);
  const [error, setError] = useState(-1);

  const handleAdd = () => {
    if (data.length === 9) {
      setCanAdd(false);
    }
    if (canAdd) {
      setData([...data, { Name: "", Value: 0 }]);
      setCanRemove(true);
    }
  };

  const handleRemove = () => {
    if (data.length === 1) {
      setCanRemove(false);
    }
    if (canRemove) {
      setData(data.slice(0, data.length - 1));
      setCanAdd(true);
    }
  };

  const handleOnNameChange = (value, index) => {
    setError(-1);
    const updated = data.map((d, i) => {
      if (i === index) {
        if (nameExist(data, value)) {
          setError(i);
          return { Name: `${value}-${Date.now()}`, Value: d.Value };
        }
        return { Name: value, Value: d.Value };
      }
      return d;
    });
    setData(updated);
  };

  const handleOnValueChange = (value, index) => {
    const updated = data.map((d, i) => {
      if (i === index) {
        return { Name: d.Name, Value: value };
      }
      return d;
    });
    setData(updated);
  };

  return (
    <div className="flex justify-end items-start gap-4 w-full">
      <div className="flex flex-col justify-center items-end w-[80%]">
        <input type="hidden" name="length" value={data.length} />
        {data.map((d, i) => {
          return (
            <span key={i} className="flex flex-col items-center *:w-full">
              <div className="flex items-center gap-2 mb-2 *:border-b-2 *:rounded-xl *:px-4 *:py-1 *:w-full">
                <input
                  type="text"
                  name={`name-${i}`}
                  placeholder="Name"
                  value={d.Name}
                  onChange={(e) => handleOnNameChange(e.target.value, i)}
                />
                <input
                  type="number"
                  name={`value-${i}`}
                  placeholder="Value"
                  value={d.Value}
                  onChange={(e) => handleOnValueChange(e.target.value, i)}
                />
              </div>
              {error !== -1 && error === i && (
                <p key={i} className="text-red-500 text-sm">
                  Name exist! <span className="text-black"> - </span>
                  <span className="text-green-500">New name generated!</span>
                </p>
              )}
            </span>
          );
        })}
      </div>
      <span className="flex flex-col justify-center items-center *:border-2 *:border-gray-100 *:w-full *:py-1 *:mx-2 *:rounded-full">
        <button
          disabled={!canAdd}
          onClick={() => handleAdd()}
          className="bg-green-500 hover:bg-green-400 active:bg-green-300 disabled:bg-green-100 mb-2"
        >
          Add
        </button>
        <button
          disabled={!canRemove}
          onClick={() => handleRemove()}
          className="bg-red-500 hover:bg-red-400 active:bg-red-300 disabled:bg-red-100"
        >
          Remove
        </button>
      </span>
    </div>
  );
}

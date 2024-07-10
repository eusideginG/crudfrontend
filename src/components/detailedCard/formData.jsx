"use client";

import { useState } from "react";
import { nameExist } from "../../../services/validation/textInputValidation";
import { useDebouncedCallback } from "use-debounce";

export default function FormData(props = {}) {
  const [data, setData] = useState(props.Data ?? []);
  const [canAdd, setCanAdd] = useState(data.length < 10);
  const [canRemove, setCanRemove] = useState(data.length > 0);
  const [error, setError] = useState(-1);
  const [selected, setSelected] = useState(new Array(data.length).fill(false));

  const handleAdd = (e) => {
    e.preventDefault();

    if (data.length === 9) {
      setCanAdd(false);
    }
    if (canAdd) {
      setData([...data, { Name: "", Value: 0 }]);
      setSelected([...selected, false]);
      setCanRemove(true);
    }
  };

  const handleRemove = (e) => {
    e.preventDefault();

    if (data.length === 1) {
      setCanRemove(false);
    }
    if (canRemove) {
      setData(data.slice(0, data.length - 1));
      setSelected(selected.slice(0, -1));
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

  const handleSelected = (e, i) => {
    e.preventDefault();
    setSelected(selected.map((v, index) => (index === i ? !v : v)));
    props.Selected(selected);
  };

  const handleDeleteData = (e) => {
    e.preventDefault();
    const dataIdsToDelete = data.filter((d, i) => selected[i]).map(d => d.Id);

    debounced(dataIdsToDelete);
  }

  const debounced = useDebouncedCallback((value) => {
    props.Selected(value);
  }, 1000);

  return (
    <div className="flex justify-end items-start gap-4 w-full h-full">
      <div className="flex flex-col justify-center items-end w-[80%]">
        <input type="hidden" name="length" value={data.length} />
        {data.map((d, i) => {
          return (
            <span
              key={i}
              className={`flex flex-col justify-center items-center *:w-full ${
                selected[i] && "bg-red-400"
              } rounded-xl mb-2 p-1`}
            >
              <div className="flex items-center gap-2 *:rounded-xl *:py-1">
                <input
                  type="text"
                  name={`name-${i}`}
                  placeholder="Name"
                  value={d.Name}
                  minLength={3}
                  required
                  onChange={(e) => handleOnNameChange(e.target.value, i)}
                  className="px-4 w-full border-b-2"
                />
                <input
                  type="number"
                  name={`value-${i}`}
                  placeholder="Value"
                  value={d.Value}
                  onChange={(e) => handleOnValueChange(e.target.value, i)}
                  className="px-4 w-full border-b-2"
                />
                {props.Type !== "Add" && <button
                  onClick={(e) => handleSelected(e, i)}
                  className=" border-0"
                >
                  {selected[i] === false ? "✔" : "❌"}
                </button>}
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
      <span className="flex flex-col *:border-2 *:border-gray-100 *:w-full *:py-1 *:px-2 *:rounded-full *:mb-1">
        <button
          disabled={!canAdd}
          onClick={(e) => handleAdd(e)}
          className="bg-green-500 hover:bg-green-400 active:bg-green-300 disabled:bg-green-100"
        >
          Add
        </button>
        <button
          disabled={!canRemove}
          onClick={(e) => handleRemove(e)}
          className="bg-red-500 hover:bg-red-400 active:bg-red-300 disabled:bg-red-100"
        >
          Remove
        </button>
        {props.Type !== "Add" && <button
          onClick={(e) => handleDeleteData(e)}
          className="border-2 border-red-100 bg-red-400 hover:bg-red-300 active:bg-red-200 disabled:bg-red-100 rounded-full w-full "
        >
          Delete Data
        </button>}
      </span>
    </div>
  );
}

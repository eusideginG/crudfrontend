"use client";

import { useState } from "react";
import PasswordChecklist from "react-password-checklist";
import { useDebouncedCallback } from "use-debounce";

export default function InputFleds(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [error, setError] = useState(false);

  const debounced = useDebouncedCallback(() => {
    if (
      errorEmail ||
      error ||
      email.length < 6 ||
      password.length < 8 ||
      (props.Register ? confirmPassword.length < 8 : false)
    ) {
      return props.Active(true);
    }
    return props.Active(false);
  }, 10);

  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrorEmail(
            !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
              e.target.value
            )
          );
          debounced();
        }}
        className="hover:border-gray-400 border rounded-full"
      />
      {errorEmail && (
        <p className="text-red-500 text-sm p-0">Wrong email format</p>
      )}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError(true);
        }}
        className="hover:border-gray-400 border rounded-full"
      />
      {props.Register && (
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setError(true);
          }}
          className="hover:border-gray-400 border rounded-full"
        />
      )}
      {error && (
        <PasswordChecklist
          className="flex flex-col border-0 rounded-xl"
          rules={[
            "minLength",
            "specialChar",
            "number",
            "capital",
            `${props.Register && "match"}`,
          ]}
          minLength={8}
          value={password}
          valueAgain={confirmPassword}
          onChange={(e) => {
            setError(!e);
            debounced();
          }}
        />
      )}
    </>
  );
}

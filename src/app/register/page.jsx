"use client"
import { register } from "@/actions/register";
import InputFleds from "@/components/authentication/inputFleds";
import { useState } from "react";

export default function Register() {
  const [disable, setDisable] = useState(true);

  return (
    <div className="flex justify-center items-center">
      <form
        action={register}
        className="flex flex-col items-center justify-between *:mx-4 *:my-2 *:py-2 *:px-4"
      >
        <InputFleds Register={true} Active={(d) => setDisable(d)}/>
        <button
          type="submit"
          disabled={disable}
          className="flex items-center justify-center w-[60%] hover:border-gray-400 active:border-gray-500 disabled:border-0 border rounded-full"
        >
          Register
        </button>
      </form>
    </div>
  );
}

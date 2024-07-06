"use client";
import { useState } from "react";
import { deleteForm } from "@/actions/delete";
import { useRouter } from "next/navigation";
import Image from "next/image";
import up from "@/../public/chevron-up-solid.svg";
import down from "@/../public/chevron-down-solid.svg";

export default function Card(props) {
  const [show, setShow] = useState(false);
  const router = useRouter();

  return (
    <tr className={`*:break-words ${show ? "" : "*:truncate"}`}>
      <td>{props.Form.Title}</td>
      <td>{props.Form.Description}</td>
      <td>{props.Form.CreatedTime}</td>
      <td>{props.Form.UpdatedTime}</td>
      <td className="max-w-[28%]">
        <span className="flex justify-center items-center w-full gap-2 *:w-[30%] *:rounded-full *:py-1 *:px-4">
          <button
            className="flex justify-around items-center bg-gray-500 hover:bg-gray-400 active:bg-gray-300"
            onClick={() => setShow(!show)}
          >
            Show {show ? (
              <Image src={up} alt="up" className="w-5 h-5"/>
            ) : (
              <Image src={down} alt="down" className="w-5 h-5"/>
            )}
          </button>
          <button
            className="bg-green-700 hover:bg-green-600 active:bg-green-500"
            onClick={() => router.push(`details/${props.Form.Id}`)}
          >
            Edit
          </button>
          <form
            action={deleteForm}
            className="bg-red-700 hover:bg-red-600 active:bg-red-500 rounded-full"
          >
            <input type="hidden" name="id" value={props.Form.Id} />
            <button className="">Delete</button>
          </form>
        </span>
      </td>
    </tr>
  );
}

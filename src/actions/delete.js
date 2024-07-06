"use server";
import { redirect } from "next/navigation";

export const deleteForm = async (formData) => {
  try {
    // const response = await fetch("", { header: {}, body: {} });

    // if (!response.ok) {
    //   throw new Error(`Response status: ${response.status}`);
    // }

    // const json = await response.json();
    // console.log(json);
    
    console.log(formData.get("id"));
  } catch (error) {
    console.log(`login error: ${error}`);
  }
  redirect("/");
};

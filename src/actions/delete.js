"use server";

import { redirect } from "next/navigation";
import { urlForm } from "../../services/endpoints";

export const deleteForm = async (formData) => {
  const id = formData.get("id");

  try {
    const response = await fetch(`${urlForm}/${id}`, {
      method: "DELETE",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    console.log("Request status:", response.status);
  } catch (error) {
    console.log(`Delete: ${error}`);
  }
  redirect("/");
};

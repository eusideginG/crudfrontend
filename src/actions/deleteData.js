"use server";

import { redirect } from "next/navigation";
import { urlForm } from "../../services/endpoints";

export const deleteFormData = async (formId = "", dataId = []) => {
  const id = formId;
  const url = `${urlForm}/${id}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([...dataId]),
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

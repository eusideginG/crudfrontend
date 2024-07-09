"use server";
import { redirect } from "next/navigation";
import { urlForm } from "../../services/endpoints";

export const deleteForm = async (formData) => {
  try {
    const response = await fetch(`${urlForm}/${formData.get("id")}`, {
      method: "DELETE",
      header: { id: `${formData.get("id")}` },
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);

    return json;
  } catch (error) {
    console.log(`login error: ${error}`);
  }
  redirect("/");
};

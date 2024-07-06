import { redirect } from "next/navigation";

export const register = async (formData) => {
  "use server";
  try {
    // const response = await fetch("", { header: {}, body: {} });

    // if (!response.ok) {
    //   throw new Error(`Response status: ${response.status}`);
    // }

    // const json = await response.json();
    // console.log(json);

    console.log(
      formData.get("email"),
      formData.get("password"),
      formData.get("confirm-password")
    );
  } catch (error) {
    console.log(`login error: ${error}`);
  }
  redirect("/");
};

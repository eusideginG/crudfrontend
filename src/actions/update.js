import { redirect } from "next/navigation";

export const update = async (formData) => {
  "use server";

  try {
    // const response = await fetch("", { header: {}, body: {} });

    // if (!response.ok) {
    //   throw new Error(`Response status: ${response.status}`);
    // }

    // const json = await response.json();
    // console.log(json);

    for (let i = 0; i < formData.get("length"); i++) {
      console.log(formData.get(`value-${i}`));
    }

    // console.log(formData.get("title"), formData.get("description"), formData.get("name"), formData.get("value"), );
  } catch (error) {
    console.log(`login error: ${error}`);
  }
//   redirect("/");
};

import { redirect } from "next/navigation";
import { urlForm } from "../../services/endpoints";

export const add = async (formData) => {
  "use server";

  try {
    const title = formData.get("title");
    const description = formData.get("description");
    let dataNames = [];
    let dataValues = [];
    let data = [];

    for (let i = 0; i < formData.get("length"); i++) {
      dataNames.push(formData.get(`name-${i}`));
      dataValues.push(formData.get(`value-${i}`));
    }

    dataNames.map((n, i) => (data[n] = dataValues[i]));

    const response = await fetch(urlForm, {
      method: "POST",
      header: {
        "accept": "*/*",
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: {
        title: `${title}`,
        description: `${description}`,
        dataValues: { ...data },
      },
    });
    console.log(await response);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
console.log("works2");
    const body = await response.text();
    console.log(body);

  } catch (error) {
    console.log(`Add: ${error}`);
  }
  redirect("/");
};

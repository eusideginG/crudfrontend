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

    const reqBody = JSON.stringify({
      title: `${title}`,
      description: `${description}`,
      dataValues: { ...data },
    });
    
    const response = await fetch(urlForm, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: reqBody,
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const body = await response.text();
    console.log("body:", body);
    console.log("request:", response);
  } catch (error) {
    console.log(`Add: ${error}`);
  }
  redirect("/");
};

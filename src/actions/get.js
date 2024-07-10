"use server";

import { urlForm } from "../../services/endpoints";

export const get = async () => {
  try {
    const response = await fetch(urlForm, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const body = await response.json();
    return(body);

  } catch (error) {
    console.log(`Login ${error}`);
  }
};

"use server";
import { redirect } from "next/navigation";
import { urlLogin } from "../../services/endpoints";

export const login = async (formData) => {
  try {
    const email = formData.get("email") ?? "";
    const password = formData.get("password") ?? "";

    const response = await fetch(urlLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
        twoFactorCode: "string",
        twoFactorRecoveryCode: "string",
      }),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    // const body = JSON.parse(await response.text());

    // cookies().set({
    //   name: ".AspNetCore.Identity.Application",
    //   value: `${body["accessToken"]}`,
    //   path: "/",
    //   maxAge: 86400,
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "lax",
    // });
    const body = await response;
    console.log(body);

  } catch (error) {
    console.log(`Login ${error}`);
  }
  redirect("/");
};

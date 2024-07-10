// "use server";
// import { redirect } from "next/navigation";
// import { urlRegister } from "../../services/endpoints";

// export const register = async (formData) => {
//   try {
//     const email = formData.get("email") ?? "";
//     const password = formData.get("password") ?? "";

//     const response = await fetch(urlRegister, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: `${email}`,
//         password: `${password}`,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//   } catch (error) {
//     console.log(`Register ${error}`);
//   }
//   redirect("/");
// };

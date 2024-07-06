import { login } from "@/actions/login";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-[30%]">
      <form
        action={login}
        className="flex flex-col items-center justify-between *:mx-4 *:my-2 *:py-2 *:px-4 *:border *:rounded-full"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="hover:border-gray-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="hover:border-gray-400"
        />
        <button
          type="submit"
          className="flex items-center justify-center w-[60%] hover:border-gray-400 active:border-gray-500"
        >
          Login
        </button>
      </form>
    </div>
  );
}

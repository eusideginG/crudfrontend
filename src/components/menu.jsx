import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex justify-between *:m-2">
      <Link
        href={`/`}
        className=" flex justify-center items-center font-bold text-xl px-4"
      >
        CRUD
      </Link>

      {true ? (
        <span className="flex justify-center items-center">
          <Link
            href={`/login`}
            className=" flex justify-center items-center px-4"
          >
            Login
          </Link>
          <Link
            href={`/register`}
            className=" flex justify-center items-center px-4"
          >
            Register
          </Link>
        </span>
      ) : (
        <form action={logout}>
          <button>Logout</button>
        </form>
      )}
    </div>
  );
}

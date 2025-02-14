import Link from "next/link"

export default function Table({children}) {
    return (
      <div className="flex flex-col items-center w-[80%] py-2 px-8">
        <table className="w-full my-8 table-fixed">
          <colgroup>
            <col span={1} className=" w-[18%]" />
            <col span={1} className=" w-[18%]" />
            <col span={1} className=" w-[18%]" />
            <col span={1} className=" w-[18%]" />
            <col span={1} className=" w-[28%]" />
          </colgroup>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Created Time</th>
              <th>Updated Time</th>
              <th className="flex justify-end"><Link href="/add" className="border-2 rounded-full px-4 py-1">Add</Link></th>
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    );
  }
  
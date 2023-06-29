import React from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const DataTable = () => {
  return (
    <div className="bg-white p-8 rounded-xl mt-12">
      <h2 className="font-semibold text-2xl ">Form title</h2>
      <p className="font-light">
        Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue
        enim.
      </p>
      <div className="alert  rounded-lg my-5 border-2 border-red-800 alert-red-400 bg-[#f871714f]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>New software update available.</span>
      </div>

      <div className="overflow-x-auto">
        <table className="table rounded-md">
          {/* head */}
          <thead>
            <tr className="bg-neutral-300">
              <th className="text-lg text-slate-800">Table Title</th>
              <th className="text-lg text-slate-800">Table Title</th>
              <th className="text-lg text-slate-800">Table Title</th>
              <th className="text-lg text-slate-800">Table Title</th>
            </tr>
          </thead>
          <tbody className="border-2">
            {/* row 1 */}
            <tr>
              <td className="border-x-2 ">Etiam purus in</td>
              <td className="border-x-2 ">Curabitur donec duis</td>
              <td className="border-x-2 ">Morbi pharetra, accumsan</td>
              <td className="flex items-center gap-3">
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-blue-700"><FaRegEdit></FaRegEdit> Edit</button>
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-amber-600"><FaTrashAlt></FaTrashAlt> Delete</button>
              </td>
            </tr>
            <tr className="bg-neutral-100">
              <td className="border-x-2 ">Etiam purus in</td>
              <td className="border-x-2 ">Curabitur donec duis</td>
              <td className="border-x-2 ">Morbi pharetra, accumsan</td>
              <td className="flex items-center gap-3">
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-blue-700"><FaRegEdit></FaRegEdit> Edit</button>
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-amber-600"><FaTrashAlt></FaTrashAlt> Delete</button>
              </td>
            </tr>
            <tr>
              <td className="border-x-2 ">Etiam purus in</td>
              <td className="border-x-2 ">Curabitur donec duis</td>
              <td className="border-x-2 ">Morbi pharetra, accumsan</td>
              <td className="flex items-center gap-3">
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-blue-700"><FaRegEdit></FaRegEdit> Edit</button>
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-amber-600"><FaTrashAlt></FaTrashAlt> Delete</button>
              </td>
            </tr>
            <tr className="bg-neutral-100">
              <td className="border-x-2 ">Etiam purus in</td>
              <td className="border-x-2 ">Curabitur donec duis</td>
              <td className="border-x-2 ">Morbi pharetra, accumsan</td>
              <td className="flex items-center gap-3">
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-blue-700"><FaRegEdit></FaRegEdit> Edit</button>
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-amber-600"><FaTrashAlt></FaTrashAlt> Delete</button>
              </td>
            </tr>
            <tr>
              <td className="border-x-2 ">Etiam purus in</td>
              <td className="border-x-2 ">Curabitur donec duis</td>
              <td className="border-x-2 ">Morbi pharetra, accumsan</td>
              <td className="flex items-center gap-3">
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-blue-700"><FaRegEdit></FaRegEdit> Edit</button>
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-amber-600"><FaTrashAlt></FaTrashAlt> Delete</button>
              </td>
            </tr>
            <tr className="bg-neutral-100">
              <td className="border-x-2 ">Etiam purus in</td>
              <td className="border-x-2 ">Curabitur donec duis</td>
              <td className="border-x-2 ">Morbi pharetra, accumsan</td>
              <td className="flex items-center gap-3">
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-blue-700"><FaRegEdit></FaRegEdit> Edit</button>
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-amber-600"><FaTrashAlt></FaTrashAlt> Delete</button>
              </td>
            </tr>
            <tr>
              <td className="border-x-2 ">Etiam purus in</td>
              <td className="border-x-2 ">Curabitur donec duis</td>
              <td className="border-x-2 ">Morbi pharetra, accumsan</td>
              <td className="flex items-center gap-3">
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-blue-700"><FaRegEdit></FaRegEdit> Edit</button>
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-amber-600"><FaTrashAlt></FaTrashAlt> Delete</button>
              </td>
            </tr>
            <tr className="bg-neutral-100">
              <td className="border-x-2 ">Etiam purus in</td>
              <td className="border-x-2 ">Curabitur donec duis</td>
              <td className="border-x-2 ">Morbi pharetra, accumsan</td>
              <td className="flex items-center gap-3">
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-blue-700"><FaRegEdit></FaRegEdit> Edit</button>
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-amber-600"><FaTrashAlt></FaTrashAlt> Delete</button>
              </td>
            </tr>
            <tr>
              <td className="border-x-2 ">Etiam purus in</td>
              <td className="border-x-2 ">Curabitur donec duis</td>
              <td className="border-x-2 ">Morbi pharetra, accumsan</td>
              <td className="flex items-center gap-3">
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-blue-700"><FaRegEdit></FaRegEdit> Edit</button>
                <button className="flex text-white btn btn-md items-center gap-2 rounded-lg bg-amber-600"><FaTrashAlt></FaTrashAlt> Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-5">
          <div className="join w-full justify-center gap-2 items-center">
            <button className="join-item  btn">«</button>
            <button className="join-item rounded-lg border-2 bg-transparent btn">1</button>
            <button className="join-item rounded-lg border-2 bg-transparent bg-blue-600 text-white btn btn-active">2</button>
            <button className="join-item rounded-lg border-2 bg-transparent btn">3</button>
            <button className="join-item rounded-lg border-2 bg-transparent btn">4</button>
            <button className="join-item  btn">»</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;

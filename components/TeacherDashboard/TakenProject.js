import React from 'react'

const TakenProject = () => {
  return (
    <>
      {/*<!-- Component: Simple with footer --> */}
      <div className="w-full card bg-[#3B2F8C] shadow-xl p-12  sm:overflow-x-auto lg:overflow-x-hidden">
        <table
          className="w-full text-left border border-separate rounded border-slate-200"
          cellspacing="0"
        >
        
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                No
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Project Name
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Category
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                student
              </th>
                <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Semester
              </th>
             
            
            </tr>
            <tr className="text-white">
              <th
                scope="row"
                className="h-12 px-6 text-white text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 "
              >
                1
              </th>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  ">
                E-Store
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  ">
                E-Comerce
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  ">
               Sakib 
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  ">
               11th
              </td>
            </tr>
            <tr className="text-white">
              <th
                scope="row"
                className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 "
              >
                2
              </th>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 ">
               Hotel Management
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  ">
               Management
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 ">
                Rakib
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  ">
                11th
              </td>
            </tr>
            <tr className="text-white">
              <th
                scope="row"
                className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  "
              >
                3
              </th>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  ">
                Tech School 
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 ">
               Web App
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  ">
               Arman 
              </td>
              <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 ">
               8th
              </td>
            </tr>
          </tbody>
         
        </table>
      </div>
      {/*<!-- End Simple with footer --> */}
    </>
  );
}

export default TakenProject
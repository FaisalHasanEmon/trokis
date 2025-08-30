import { Eye, Info } from "lucide-react";

const Table = ({ dataOf = "Not Defined", data = [] }) => {
  return (
    <>
      {/* Recent Users Table */}
      <div className=" rounded-xl shadow-sm border overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-900">
            {dataOf}
          </h3>
        </div>

        {/* Desktop/Tablet Table */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-black">
              <tr>
                <th className="px-6 py-4 text-center text-sm font-medium text-white">
                  #SL
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-white">
                  Name
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-white">
                  Email
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-white">
                  Phone Number
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((user, index) => (
                <tr key={user.id} className="hover:bg-gray-50 *:border-b  ">
                  <td className="px-6 py-4 text-center text-sm text-gray-900 ">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500">
                    {user.phone}
                  </td>
                  <td className="px-6 py-4 text-center  ">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden">
          {data.map((user, index) => (
            <div key={user.id} className="p-4 border-b  last:border-b-0">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-900">
                    #{index + 1}
                  </span>
                  <h4 className="font-medium text-gray-900">{user.name}</h4>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Info className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-500">Email: {user.email}</p>
                <p className="text-sm text-gray-500">Phone: {user.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Table;

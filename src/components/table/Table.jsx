import { Eye } from "lucide-react";

const Table = ({ data }) => {
  return (
    <>
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
        <tbody className="divide-y divide-gray-100 overflow-y-scroll">
          {data.map((user, index) => (
            <tr key={user.id} className="hover:bg-gray-50 *:border-b">
              <td className="px-6 py-4 text-center text-sm text-gray-900">
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
              <td className="px-6 py-4 text-center">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Eye className="w-4 h-4 text-gray-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;

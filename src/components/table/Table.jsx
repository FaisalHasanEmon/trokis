import TableActions from "./tableAction/TableActions";

const Table = ({ dataOf = "Not Defined", data = [] }) => {
  return (
    <div className="rounded-xl shadow-sm border overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg md:text-2xl font-semibold text-gray-900">
          {dataOf}
        </h3>
      </div>

      {/* Desktop Table */}
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
              {dataOf.toLowerCase().includes("driver") && (
                <th className="px-6 py-4 text-center text-sm font-medium text-white">
                  Role
                </th>
              )}
              <th className="px-6 py-4 text-center text-sm font-medium text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data?.map((user, index) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 *:border-b *:px-6 *:py-4 *:text-center *:text-sm *:text-[#333333]"
              >
                <td>{index + 1}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.phone}</td>
                {dataOf.toLowerCase().includes("driver") && (
                  <td>{user?.role}</td>
                )}
                <td className="px-6 py-4 text-center">
                  <TableActions user={user} dataOf={dataOf} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden">
        {data.map((user, index) => (
          <div key={user.id} className="p-4 border-b last:border-b-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-900">
                  #{index + 1}
                </span>
                <h4 className="font-medium text-gray-900">{user.name}</h4>
              </div>
              <TableActions user={user} dataOf={dataOf} />
            </div>
            <div className="space-y-1 *:text-sm *:text-gray-500">
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              {dataOf.toLowerCase().includes("driver") && (
                <p>Role: {user?.role}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;

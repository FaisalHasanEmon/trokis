import TableActions from "./tableAction/TableActions";

const Table = ({ dataOf = "Not Defined", data = [] }) => {
  return (
    <div className="rounded-xl   sm:mt-10 lg:mt-0 h-[calc(100vh-150px)] overflow-clip">
      <div className="p-5  border-gray-100   rounded-b-xl sticky ">
        <h3 className="text-lg md:text-2xl font-semibold text-gray-900">
          {dataOf}
        </h3>
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-y-scroll  px-5 h-full">
        <table className="w-full ">
          <thead className="bg-black sticky top-0">
            <tr>
              <th className="px-6 py-4 text-center text-sm font-medium text-white rounded-tl-lg">
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
              <th className="px-6 py-4 text-center text-sm font-medium text-white rounded-tr-lg">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 ">
            {data?.map((user, index) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50  *:px-6 *:py-4 *:text-center *:text-sm *:text-[#333333] "
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
      <div className="sm:hidden h-full overflow-y-scroll  ">
        {data.map((user, index) => (
          <div key={user.id} className="px-2 py-3 shadow-sm mb-1 bg-white">
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

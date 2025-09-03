import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Table from "../../../components/table/Table";

const Dashboard = () => {
  // Key metric cards
  const dashboardData = [
    {
      id: 1,
      dataInfoType: "Total earning",
      dataInfo: 8920,
    },
    {
      id: 2,
      dataInfoType: "TotalUsers",
      dataInfo: 1205,
    },
    {
      id: 3,
      dataInfoType: "Total service Providers",
      dataInfo: 430,
    },
  ];
  // Sample data for the chart
  const chartData = [
    { name: "Jan", value: 2.5 },
    { name: "Feb", value: 1.5 },
    { name: "Mar", value: 4.5 },
    { name: "Apr", value: 4.8 },
    { name: "May", value: 4.6 },
    { name: "Jun", value: 4.7 },
    { name: "Jul", value: 4.8 },
    { name: "Aug", value: 2.5 },
    { name: "Sep", value: 1.8 },
    { name: "Oct", value: 4.2 },
    { name: "Nov", value: 4.5 },
    { name: "Dec", value: 4.4 },
  ];

  // Sample user data
  const recentUsers = [
    {
      id: 1,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
    },
    {
      id: 2,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
    },
    {
      id: 3,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
    },
    {
      id: 4,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
    },
    {
      id: 5,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
    },
    {
      id: 6,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
    },
  ];

  return (
    <div className="py-4 md:py-6  lg:py-8 min-h-screen">
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-8">
        {dashboardData?.map((item) => (
          <div
            key={item?.id}
            className=" rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-sm border flex flex-col justify-center items-center bg-white border-black text-center"
          >
            <h3 className="text-xs sm:text-2xl font-medium text-black mb-1 sm:mb-2 grow-1">
              {item?.dataInfoType}
            </h3>
            <p className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 ">
              {item?.dataInfoType.includes("earn") ? "$" : ""}
              {item?.dataInfo}
            </p>
          </div>
        ))}
      </div>

      {/* Overview Chart */}
      <div className="py-6  mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-0">
            Overview
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm  text-black">2024 May</span>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="h-64 md:h-80 ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={true}
                tickLine={true}
                tick={{ fontSize: 12, fill: "#545454" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6B7280" }}
                tickFormatter={(value) => `${value}k`}
              />
              <Bar
                dataKey="value"
                fill="#000000"
                radius={[2, 2, 0, 0]}
                barSize={32}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Users Table */}
      <Table dataOf="Recent Users" data={recentUsers}></Table>
    </div>
  );
};

export default Dashboard;

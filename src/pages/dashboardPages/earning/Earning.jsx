import Table from "../../../components/table/Table";

const Earning = () => {
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
    {
      id: 7,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
    },
    {
      id: 8,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
    },
    {
      id: 9,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
    },
    {
      id: 10,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
    },
  ];
  return (
    <section className="mt-6 bg-white shadow-sm rounded-[8px] overflow-clip">
      <Table dataOf="Earning" data={recentUsers}></Table>
    </section>
  );
};

export default Earning;

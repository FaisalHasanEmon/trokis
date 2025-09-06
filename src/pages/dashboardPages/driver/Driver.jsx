import Table from "../../../components/table/Table";

const Driver = () => {
  // Sample user data
  const recentUsers = [
    {
      id: 1,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
      role: "Errends",
    },
    {
      id: 2,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
      role: "Errends",
    },
    {
      id: 3,

      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
      role: "Errends",
    },
    {
      id: 4,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
      role: "Errends",
    },
    {
      id: 5,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
      role: "Errends",
    },
    {
      id: 6,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
      role: "Errends",
    },
    {
      id: 7,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
      role: "Errends",
    },
    {
      id: 8,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
      role: "Errends",
    },
    {
      id: 9,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
      role: "Errends",
    },
    {
      id: 10,
      name: "Jane Cooper",
      email: "abc@email.com",
      phone: "+1 2746478994",
      role: "Errends",
    },
  ];
  return (
    <section className="mt-6 bg-white shadow-sm rounded-[8px] overflow-clip">
      <Table dataOf="Driver" data={recentUsers}></Table>
    </section>
  );
};

export default Driver;

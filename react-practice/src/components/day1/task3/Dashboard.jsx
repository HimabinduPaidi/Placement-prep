import { useState } from "react";
import UserCard from "./UserCard";

const Dashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Bindu", role: "Junior" },
    { id: 2, name: "Hima", role: "Junior" },
    { id: 3, name: "Raja", role: "Junior" },
  ]);
  const promote = (id) => {
    console.log("promoted");
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, role: "Senior" } : user,
    );
    setUsers(updatedUsers);
  };
  return (
    <div>
      {users.map((user) => {
        return (
          <UserCard
            key={user.id}
            userid={user.id}
            name={user.name}
            role={user.role}
            promote={promote}
          ></UserCard>
        );
      })}
    </div>
  );
};

export default Dashboard;

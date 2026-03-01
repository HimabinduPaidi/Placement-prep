import React from "react";

const UserCard = ({ userid, name, role, promote }) => {
  return (
    <div>
      <h1>UserName:{name}</h1>
      <h1>UserRole:{role}</h1>
      <button className="bg-blue-300 rounded" onClick={() => promote(userid)}>
        Promote
      </button>
    </div>
  );
};

export default UserCard;

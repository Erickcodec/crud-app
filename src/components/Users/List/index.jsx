import React from "react";
import UserCard from "../Card";
import "./index.css";

export default function UserList({
  values: users = [],
  remove = (user) => {},
  edit = (user) => {},
}) {
  return (
    <div className="list__wrapper">
      {users.map((user) => (
        <UserCard key={user.id} value={user} edit={edit} remove={remove} />
      ))}
    </div>
  );
}

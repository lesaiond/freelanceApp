import React, { useState } from "react";
import { StyledUsersMessage } from "./UsersMessage.style";

type Users = {
  username: string;
  src: string;
  time: string;
};

type UsersMessageProps = {
  users: Users[];
};

const UsersMessage: React.FC<Users> = ({ src, username, time }) => (
  <div className="userItem">
    <img src={`${src}`} alt="" className="circle" />
    <div className="username">{username}</div>
    <div className="center">
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z"
          fill="#FFBD3C"
        />
      </svg>
      <div className="time">{time}</div>
    </div>
  </div>
);

const UserMessageList: React.FC<UsersMessageProps> = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <StyledUsersMessage>
      <div className="searchUser">
        <input
          className=""
          type="text"
          placeholder="Search users"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
      </div>
      {filteredUsers.map((user, index) => (
        <UsersMessage key={index} {...user} />
      ))}
    </StyledUsersMessage>
  );
};

export default UserMessageList;

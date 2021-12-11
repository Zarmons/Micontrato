import React from "react";
import {FaAngleRight, FaAngleLeft} from "react-icons/fa";


export default function Users() {
 
  const [users, setUsers] = React.useState([]);
  const [numPage, setNumPage] = React.useState([]);
  const previous = async () => {
    const resp = await fetch("https://reqres.in/api/users?page=" + 2);
    const json = await resp.json();
    setUsers(json.data);
    setNumPage(json.page);
  };

  const next = async () => {
    const resp = await fetch("https://reqres.in/api/users?page=" + 1);
    const json = await resp.json();
    setUsers(json.data);
    setNumPage(json.page);
  };
  React.useEffect(() => {
    previous();
    next();
  }, []);

  return (
    <div className="App">
      <h1>Lista de usuarios</h1>
      <div className="center">
        <button onClick={next}><FaAngleLeft></FaAngleLeft></button>
        <span>{numPage}</span>
        <button onClick={previous}><FaAngleRight></FaAngleRight></button>
      </div>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id} className="container-users">
                <p>
                  <strong>
                    {user.first_name} {user.last_name}
                  </strong>
                </p>
                <img key={user.avatar} src={user.avatar} />
                <p>{user.email}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

import React from "react";

export default function Users() {
    const [users, setUsers] = React.useState([]);
    const aux = async () => {
      const resp = await fetch("https://reqres.in/api/users?page = 2");
      const json = await resp.json();
      setUsers(json.data);
    };
    React.useEffect(() => {
      aux();
    }, []);
    return (
      <div className="App">
        <h1>Lista de usuarios</h1>
        <div className="flex">
          {users.length &&
            users.map((user) => {
              return (
                <div key={user.id} className="container-users">
                  <p>
                    <strong>{user.first_name} {user.last_name}</strong>
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
  
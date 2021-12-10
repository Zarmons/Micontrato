import React from "react";

export default function Users() {
    const [users, setUsers] = React.useState([]);
    const f = async () => {
      const resp = await fetch("https://reqres.in/api/users/");
      const json = await resp.json();
      setUsers(json.data);
    };
    React.useEffect(() => {
      f();
    }, []);
    return (
      <div className="App">
        <h1 className="center">Lista de usuarios</h1>
        <div className="center">
          {users.length &&
            users.map((user) => {
              return (
                <div key={user.id}>
                  <p>
                    <strong>{user.first_name}</strong>
                  </p>
                  <p>{user.email}</p>
                  <img src={user.avatar} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
  
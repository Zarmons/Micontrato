import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Correo</th>
        <th>Avatar</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  console.log(props);
    return (
      <tr>
        <td>{props.first_name}</td>
        <td>{props.last_name}</td>
        <td>{props.email}</td>
        <td>
          <img src={props.avatar}></img>
        </td>
      </tr>
    )
  return <tbody></tbody>;
};

const Table = (props) => {
  const  characterData  = props;
  console.log(characterData);
  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} />
    </table>
  );
};

export default Table;

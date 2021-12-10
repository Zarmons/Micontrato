import React, { useEffect, useState } from "react";
import Table from "../Table";
import axios from 'axios';

axios.defaults.adapter = require('axios/lib/adapters/http');

const api = axios.create({
  baseURL: 'https://reqres.in/api/users?page=2',
});

const listsUsers=async ()=>{
    const {data}= await api.get('')
    return data
}


async function Users()  {
  const [todos, serTodos] = useState();

  useEffect(()=>{
    serTodos(listsUsers)
  })
  
  
  
  return (
    <div className="container">
      {todos.map((todo, index) => {
        return <Table characterData={todo} />;
      })}
    </div>
  );
}

export default Users;

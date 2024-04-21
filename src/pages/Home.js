import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    loadUsers();
  }, []);

  const loadUsers=async()=>{
    const result = await axios.get("http://localhost:8080/user")
    setUsers(result.data);
  }
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user, index)=>
               <tr>
              <th scope="row" key = {index}>{index+1}</th>
              <td>Hrithika</td>
              <td>Gowlikar</td>
              <td>@hrithika22</td>
            </tr>
            }
            
            <tr>
              <th scope="row">2</th>
              <td>Vaishnavi</td>
              <td>Gowli</td>
              <td>@vaishnavi</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Vignesh</td>
              <td>Gowli</td>
              <td>@vigneshh</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

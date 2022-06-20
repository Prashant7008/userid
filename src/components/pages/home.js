import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setuser] = useState([]);

  useEffect(() => {
    loadusers();
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  const loadusers = async () => {
    try {
      const result = await axios.get("http://localhost:3003/user");
      console.log("result: ", result);
      setuser(result.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home page</h1>
        <table className="table border shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <a class="btn btn-primary m-2" href="#" role="button">
                    View
                  </a>
                  <a class="btn btn-outline-primary m-2" href="#" role="button">
                    Edit
                  </a>
                  <a class="btn btn-danger" href="#" role="button">
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;

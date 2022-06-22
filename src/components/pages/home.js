import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Alert } from "bootstrap";

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
  const deleteUser = async id=>{
    await axios.delete(`http://localhost:3003/user/${id}`);
    loadusers();
      alert('Are You Confirm to delete');
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
                  <Link class="btn btn-primary m-2" to={`users/View/${user.id}`} role="button">
                    View
                  </Link>
                  <Link class="btn btn-outline-primary m-2" to={`users/edit/${user.id}`} role="button">
                    Edit
                  </Link >
                 
                  <a class="btn btn-danger" onClick={()=> deleteUser(user.id)} role="button">
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

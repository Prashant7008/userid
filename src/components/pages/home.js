import React, {useState,useEffect} from "react";
import axios from "axios";


const Home = () =>{

    const [users, setuser]= useState([]);

    useEffect(() => {
        loadusers();
    },[]);
    const loadusers= async () => {
        const result = await axios.get ("http://localhost:3003/user");
        setuser(result.data);
    };
    return(
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
       { users.map((user, index) =>(
       <tr>
        <th scope="row">{index +1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
       </tr>
))
}
  </tbody>
</table>
            </div>

        </div>
    );
};


export default Home;
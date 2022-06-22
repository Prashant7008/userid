import React, { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() =>{
    loadUser();
  },[]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3003/user/${id}`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res) {
        navigate("/");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const loadUser = async () =>{
    const result = await axios.get(`http://localhost:3003/user/${id}`)
   setUser(result.data);


   
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">EditUser</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">UpdateUser</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
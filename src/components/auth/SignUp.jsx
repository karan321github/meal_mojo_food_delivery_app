import React, { useState } from "react";
import Input from "../UI/Input";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  signUpFailure,
  signUpStart,
  signUpSuccess,
} from "../../redux/userSlice";
import Button from "../UI/Button";

const SignUp = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    dispatch(signUpStart());
    try {
      const res = await axios.post("http://localhost:3000/api/user/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        address: formData.address,
      });
      dispatch(signUpSuccess(res.data));
    } catch (error) {
      dispatch(
        signUpFailure(error.response ? error.response.data : "Server error")
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="">
      <form>
        <Input
          label="name"
          id="name"
          placeholder="Username"
          type="text"
          onChange={handleChange}
          value={formData.name}
        />
        <Input
          label="Email"
          id="email"
          placeholder="Email"
          type="text"
          onChange={handleChange}
          value={formData.email}
        />
        <Input
          label="password"
          id="password"
          placeholder="password"
          type="password"
          onChange={handleChange}
          value={formData.password}
        />
        <Input
          label="Address"
          id="address"
          placeholder="Address"
          type="text"
          onChange={handleChange}
          value={formData.address}
        />
        <Button onClick={handleSignUp} disabled={loading}>
          Create Account
        </Button>
        {loading && <p>Loading....</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;

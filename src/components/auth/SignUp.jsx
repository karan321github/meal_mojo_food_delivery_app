import React, { useContext, useState } from "react";
import Input from "../UI/Input";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import sideImg from "../../assets/veggie-burger.jpg";
import {
  signUpFailure,
  signUpStart,
  signUpSuccess,
} from "../../redux/userSlice";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import UserProgressContext from "../../store/UserProgressContext";

const SignUp = () => {
  const userCtx = useContext(UserProgressContext);
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
    <Modal className=" max-w-md" open={userCtx.progress === "signUp"}>
      {/* <div className="hidden m-0 lg:block w-1/2 h-full">
          <img
            src={sideImg}
            alt="Presentation"
            className="w-full h-full object-cover mx-0"
          />
        </div>
        <div className=" h-screen w-0.5  ml-0 bg-slate-200" /> */}

      <form className="space-y-6">
        <Input
          label="Name"
          id="name"
          placeholder="Username"
          type="text"
          onChange={handleChange}
          value={formData.name}
          // className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <Input
          label="Email"
          id="email"
          placeholder="Email"
          type="text"
          onChange={handleChange}
          value={formData.email}
          // className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <Input
          label="Password"
          id="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          value={formData.password}
          // className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <Input
          label="Address"
          id="address"
          placeholder="Address"
          type="text"
          onChange={handleChange}
          value={formData.address}
          // className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <Button
          onClick={handleSignUp}
          disabled={loading}
          className="w-full px-4 py-3 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Create Account
        </Button>
        {loading && <p className="text-center text-blue-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
      </form>
    </Modal>
  );
};

export default SignUp;

import React, { useState } from "react";
import Input from "../UI/Input";

const SignUp = () => {
  const [formData, setFromData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="">
      <form>
        <Input
          label="Username"
          id="username"
          placeholder="Username"
          type="text"
          onChange={handleChange}
          value={formData.username}
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
      </form>
    </div>
  );
};

export default SignUp;

import React, { useContext } from "react";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import UserProgressContext from "../../store/UserProgressContext";
import Button from "../UI/Button";

const LogIn = () => {
  const userCtx = useContext(UserProgressContext);
  return (
    <Modal className=" max-w-md" open={userCtx.progress === "login"}>
    <form className=""action="">
      <Input label="Email" type="email" />
      <Input label="Password" type="password" />
      <Button className=" mt-2">Login</Button>
      {/* <Button className='text-only'>close</Button> */}
    </form>
  </Modal>
  );
};

export default LogIn;

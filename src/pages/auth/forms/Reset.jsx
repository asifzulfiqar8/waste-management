import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
import Button from "../../../components/shared/small/Button";
import Input from "../../../components/shared/small/Input";

const Reset = () => {
  const [seePass, setSeePass] = useState(false);
  const toggleIcon = () => {
    setSeePass(!seePass);
  };
  return (
    <form className="space-y-5">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl">Reset Password</h1>
        <p className="text-sm md:text-base text-[#49475A] ">
          Go to{" "}
          <Link to="/login">
            <span className="text-primary underline font-bold">Login</span>
          </Link>
        </p>
      </div>
      <p className="text-base font-[500]">Enter New Password </p>
      <Input
        placeholder="Password"
        type={seePass ? "text" : "password"}
        icon={
          seePass ? (
            <AiOutlineEye onClick={toggleIcon} />
          ) : (
            <AiOutlineEyeInvisible onClick={toggleIcon} />
          )
        }
        startIcon={<CiLock />}
      />
      <Input
        placeholder="Confirm Password"
        type={seePass ? "text" : "password"}
        icon={
          seePass ? (
            <AiOutlineEye onClick={toggleIcon} />
          ) : (
            <AiOutlineEyeInvisible onClick={toggleIcon} />
          )
        }
        startIcon={<CiLock />}
      />
      <Button text="Reset" width="w-full" />
    </form>
  );
};

export default Reset;

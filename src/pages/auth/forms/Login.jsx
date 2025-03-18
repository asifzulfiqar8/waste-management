import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import Button from "../../../components/shared/small/Button";
import Input from "../../../components/shared/small/Input";


const Login = () => {
    const [seePass, setSeePass] = useState(false);
    const toggleIcon=() =>{
        setSeePass(!seePass);
    }
  return (
    <form className="space-y-5">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl">Login</h1>
        <p className="text-sm md:text-base text-[#49475A] ">
          Don&apos;t have an account?{" "}
          <Link to="/register">
            <span className="text-primary underline font-bold">Sign Up</span>
          </Link>
        </p>
      </div>
      <Input label="Enter Email" placeholder="Enter your email" />
      <Input
        label="Enter Password"
        placeholder="Enter your password"
        type={seePass ? "text" : "password"}
        icon={
          seePass ? (
            <AiOutlineEye onClick={toggleIcon} />
          ) : (
            <AiOutlineEyeInvisible onClick={toggleIcon} />
          )
        }
      />
      <Button text="Login" width="w-full" />
      <Link to="/forget" className="text-gray-500 text-sm text-center block">Forgot Password?</Link>
    </form>
  );
}

export default Login
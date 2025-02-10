
import { Link } from 'react-router-dom';
import Button from '../../../components/shared/small/Button';
import Input from '../../../components/shared/small/Input';

const Forget = () => {
  return (
    <form className="space-y-5">
      <div>
        <h1 className="font-bold text-2xl md:text-3xl">Forget Password   </h1>
        <p className="text-sm md:text-base text-[#49475A] ">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-primary underline font-bold">Login</span>
          </Link>
        </p>
      </div>
      <Input label="Enter Email" placeholder="Enter your email" />
     
      <Button text="Send code" width="w-full" />
    </form>
  );
} 

export default Forget
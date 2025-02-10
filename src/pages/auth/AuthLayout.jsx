/* eslint-disable react/prop-types */
import authLogo from "../../assets/images/auth/logo.png" 

const AuthLayout = ({bgImg , form}) => {
  return (
    <article className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <section className="place-content-center place-items-center">
        <div className="space-y-5 w-full max-w-[528px] px-5">
          <div className="flex gap-2 items-center">
            <img src={authLogo} />
            <h3 className="font-[1000] italic text-xl tracking-[2px]">
              Smart <br /> Waste Management
            </h3>
          </div>
          {form}
        </div>
      </section>
      <section
        className={`hidden lg:block bg-cover bg-no-repeat place-content-end text-center place-items-center ${bgImg} px-5`}
      >
        <div className="flex flex-col justify-between h-[70%] py-9">
          <div className="px-7  py-9 w-fit bg-[#ffffff30] rounded-[10px]">
            <h1 className="font-bold text-white text-4xl md:text-5xl text-left ">
              <span className="text-5xl md:text-[54px]">Welcome</span> <br /> to
              the future of
              <br /> waste management!!{" "}
            </h1>
            <p className="text-left text-base md:text-lg text-white font-montserrat max-w-[473px] mt-[24px]">
              we leverage cutting-edge technology to provide sustainable waste
              management solutions for homes, businesses, and cities.
            </p>
          </div>
          <p className="text-white text-base">
            Upload samples of your work to impress potential clients
          </p>
        </div>
      </section>
    </article>
  );
}

export default AuthLayout
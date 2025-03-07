const Button = ({ className = "", text, bg, height, width, color, ...rest }) => {
  return (
    <button
      className={`${className} grid place-items-center capitalize transition-all duration-300 text-sm md:text-base font-semibold 
        ${color || "text-white"} 
        ${width || "w-full sm:w-auto"} 
        ${bg || "bg-primary hover:bg-transparent hover:text-primary"} 
        ${height || "h-[41px]"} 
        border-2 border-primary rounded-md`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;


export const SmallButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`bg-primary p-2 text-xs px-8 rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
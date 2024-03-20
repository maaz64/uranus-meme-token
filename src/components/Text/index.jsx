import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  lg: "text-xl font-normal",
  s: "text-base font-normal",
  "2xl": "text-[40px] font-normal leading-[60px]",
  xl: "text-2xl font-normal",
  md: "text-lg font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-rubik ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };

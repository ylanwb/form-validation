import * as React from "react";

const GrayArrow = (props) => {
  return (
    <svg
      width={26}
      height={20}
      viewBox="0 0 26 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.681 11.25h18.617l-8.133 6.1c-.65.487-.65 1.287 0 1.775.65.487 1.7.487 2.35 0l10.983-8.238c.65-.487.65-1.275 0-1.762L14.53.875C14.22.64 13.797.509 13.356.509c-.44 0-.863.132-1.175.366-.65.487-.65 1.275 0 1.762l8.117 6.113H1.68C.765 8.75.015 9.312.015 10c0 .687.75 1.25 1.666 1.25z"
      />
    </svg>
  );
};
export default GrayArrow;

import * as React from "react";

const CheckIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 172 172"
    style={{
      fill: "#000",
    }}
    {...props}
  >
    <g
      fill="none"
      strokeMiterlimit={10}
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{
        mixBlendMode: "normal",
      }}
    >
      <path d="M0 172V0h172v172z" />
      <circle
        cx={24}
        cy={24}
        transform="scale(3.58333)"
        r={20}
        fill="#6be3a2"
      />
      <path
        d="M80.625 118.25c-.81 0-1.598-.272-2.24-.785l-26.875-21.5a3.582 3.582 0 1 1 4.48-5.593l23.89 19.113 35.435-50.618a3.585 3.585 0 0 1 5.873 4.11l-37.625 53.75a3.58 3.58 0 0 1-2.426 1.494 4.966 4.966 0 0 1-.512.029z"
        fill="#fff"
      />
    </g>
  </svg>
);

export default CheckIcon;

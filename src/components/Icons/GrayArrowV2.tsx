import * as React from "react";

interface IGrayArrowV2 {

}

export const GrayArrowV2: React.FC<IGrayArrowV2> = (props) => {
  return (
    <svg
      width={6}
      height={10}
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.5.592a.83.83 0 000 1.175l3.233 3.234L.5 8.234a.83.83 0 101.175 1.175L5.5 5.584a.83.83 0 000-1.175L1.675.584A.838.838 0 00.5.592z"
        fill="#6D7D8B"
      />
    </svg>
  );
};
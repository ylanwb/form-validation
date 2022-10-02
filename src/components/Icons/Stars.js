import * as React from "react";

const Stars = (props) => {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="#FFBC01"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 14.52l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L6.19 5.88l-4.83.41C.48 6.36.12 7.46.79 8.04l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08L9 14.52z"
        fill="#FFBC01"
      />
    </svg>

  );
};
export default Stars;
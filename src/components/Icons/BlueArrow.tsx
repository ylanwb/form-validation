import * as React from "react";

interface IBlueArrow {

}

export const BlueArrow: React.FC<IBlueArrow> = (props) => {
  return (
    <svg
      width={16}
      height={8}
      viewBox="0 0 16 8"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.119 3.004H1.109c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35v1.8z"
        fill="#4DA0FD;"
      />
    </svg>
  );
};

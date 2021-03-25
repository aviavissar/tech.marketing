import React from "react";

const Link = ({ text, src = "#", className }) => {
  return (
    <li className={`list-none  2xl:inline sm:block`}>
      <a className={`${className} list-none 2xl:inline`} href={src}>
        {text}
      </a>
    </li>
  );
};

export default Link;

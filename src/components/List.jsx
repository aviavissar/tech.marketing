import React from "react";
import Link from "./link.jsx";

const List = ({ listArr = [], linkstyle, className }) => {
  return (
    <ul className={className}>
      {listArr.map((item, index) => {
        return (
          <Link
            className={linkstyle}
            key={index}
            text={item.text}
            src={item.src}
          ></Link>
        );
      })}
    </ul>
  );
};

export default List;

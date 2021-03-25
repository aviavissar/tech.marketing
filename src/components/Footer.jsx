import React, { useState, useEffect } from "react";
import FooterLinks from "../FakeDB/footerLinks.json";
import Languages from "../FakeDB/Languages.json";
import List from "./List.jsx";

const Footer = () => {
  const languages = Languages.languages;

  const [mobileArr, setMobile] = useState([]);

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      setMobile((state) => [...state, languages[i]]);
    }
  }, []);

  return (
    <div className="flex flex-col sm:flex-row max-w-980px m-auto sm:max-w-xs">
      <section className="">
        <List
          listArr={languages}
          linkstyle="sm:hidden text-footertxtcolor pr-10 text-xs"
        />
      </section>
      <div className=" sm:flex sm:flex-row 2xl:hidden">
        <List
          className="sm:block"
          listArr={mobileArr}
          linkstyle="text-footertxtcolor pr-10 text-xs"
        />
        <List
          className="sm:block"
          listArr={mobileArr}
          linkstyle=" text-footertxtcolor pr-10 text-xs"
        />
      </div>
      <hr />
      <section className="sm:hidden">
        <List
          linkstyle="text-footertxtcolor  pr-10px text-xs sm:hidden"
          listArr={FooterLinks.footerlinks}
        />
      </section>
    </div>
  );
};

export default Footer;

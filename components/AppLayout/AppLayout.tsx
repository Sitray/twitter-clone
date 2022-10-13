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
    <>
      <Head>
        <title>{titleHead}</title>
      </Head>
      <main className="flex justify-center content-center pt-4 flex-col">
        {/* <Navbar /> */}
        {children}
      </main>
    </>
  );
}

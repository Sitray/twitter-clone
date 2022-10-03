import Head from "next/head";
import React, { ReactNode } from "react";

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
        {children}
      </main>
    </>
  );
}

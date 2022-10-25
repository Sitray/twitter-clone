import Head from 'next/head';
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';

interface AppLayout {
  children: JSX.Element[] | JSX.Element;
  titleHead?: string;
}

export default function AppLayout({
  children,
  titleHead = 'Twitter',
}: AppLayout) {
  const [darkMode, setDarkMode] = useState<string>('');
  return (
    <div
      className={` ${darkMode} grid place-items-center h-screen font-sans overflow-hidden`}
    >
      {/**TODO: THIS IS FOR TEST, REMOVE WHEN THE DARK THEME IS COMPLETED */}
      {/* <button
        onClick={() => setDarkMode('dark')}
        className="absolute top-0 left-3"
      >
        Dark
      </button> */}
      <Head>
        <title>{titleHead}</title>
      </Head>
      <main className="bg-white font-sans dark:bg-black dark:text-gray-500 shadow-2xl rounded-xl container md:mx-auto lg:w-2/3 h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

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
    <div className={` ${darkMode} grid place-items-center h-screen font-sans`}>
      <button
        onClick={() => setDarkMode('dark')}
        className="absolute top-0 left-3"
      >
        Dark
      </button>
      <Head>
        <title>{titleHead}</title>
      </Head>
      <main className="bg-white dark:bg-black dark:text-gray-500 shadow-2xl rounded-xl container md:h-90 md:mx-auto lg:w-2/3 h-screen">
        {children}
      </main>
    </div>
  );
}

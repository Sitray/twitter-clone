import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AppLayout from "../components/AppLayout/AppLayout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <AppLayout>
        <h1 className="text-center m-0 leading-5 text-2xl">Twitter</h1>
        <nav className="text-center pt-8">
          <Link href="/timeline">
            <a>Timeline</a>
          </Link>
        </nav>
      </AppLayout>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Link from "next/link";
import AppLayout from "../components/AppLayout/AppLayout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <nav className="text-center pt-8">
        <Link href="/timeline">
          <a>Timeline</a>
        </Link>
      </nav>
    </>
  );
};

export default Home;

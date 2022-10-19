import type { NextPage } from "next";
import Image from "next/image";
import Button from "../components/Button/Button";
import GitHub from "../components/Icons/Github";

const Home: NextPage = () => {
  return (
    <>
      <section className="text-center grid h-full place-items-center place-content-center pt-8 text-2xl">
        <Image
          src="/twitter-logo.svg"
          alt="twitter logo"
          width="120"
          height="120"
        />
        <h1 className="text-primary font-extrabold mb-3 mt-3">Twitter</h1>
        <h2 className="text-secondary text-2xl">Talk about anything</h2>
        <div className="mt-3">
          <Button>
            <GitHub fill="white" width="24" height="24" />
            <span className="ml-2">Login with Github</span>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;

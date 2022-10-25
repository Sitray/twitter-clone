import { useEffect } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Button from '../components/Button/Button';
import GitHub from '../components/Icons/Github';
import { loginWithGithub } from '../firebase/client';
import { useRouter } from 'next/router';
import Loader from '../components/Spinner/Loader';
import useUser, { USER_STATES } from '../hooks/useUser';

const Home: NextPage = () => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace('/home');
  }, [user]);

  const handleOnLogin = () => {
    loginWithGithub().catch((err) => {
      throw new err();
    });
  };

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
          {user === USER_STATES.NOT_LOGGED && (
            <Button onClick={handleOnLogin}>
              <GitHub fill="white" width="24" height="24" />
              <span className="ml-2">Login with Github</span>
            </Button>
          )}
          {user === USER_STATES.NOT_KNOWN && <Loader />}
        </div>
      </section>
    </>
  );
};

export default Home;

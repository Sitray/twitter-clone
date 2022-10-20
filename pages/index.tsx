import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Button from '../components/Button/Button';
import GitHub from '../components/Icons/Github';
import { loginWithGithub, onAuthState } from '../firebase/client';
import IGithub from '../interfaces/IGithub';

const Home: NextPage = () => {
  const [user, setUser] = useState<IGithub | undefined | null>(undefined);

  useEffect(() => {
    onAuthState(setUser);
  }, []);

  const handleOnLogin = () => {
    loginWithGithub()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
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
          {user === null && (
            <Button onClick={handleOnLogin}>
              <GitHub fill="white" width="24" height="24" />
              <span className="ml-2">Login with Github</span>
            </Button>
          )}
          {user && user.avatar && (
            <div>
              <Image src={user.avatar} alt="avatar" width="120" height="120" />
              <strong>{user.userName}</strong>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Home;

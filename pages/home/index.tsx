import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Tuit from '../../components/Tuit/Tuit';
import { getLatestTuits } from '../../firebase/client';
import useUser from '../../hooks/useUser';
import IHomeTimeline from '../../interfaces/IHomeTimeline';

export default function HomePage() {
  const [timeline, setTimeline] = useState<any>([]);
  const user = useUser();

  useEffect(() => {
    user && getLatestTuits().then(setTimeline);
  }, [user]);

  console.log('timeline', timeline);
  return (
    <>
      <section>
        <Navbar
          avatar={timeline.length > 0 ? timeline[0].avatar : ''}
          altImage={timeline.length > 0 ? timeline[0].username : ''}
          text="Inicio"
        />
        <section className="mb-1">
          {timeline.map((twit: IHomeTimeline) => {
            return (
              <div key={twit.id}>
                <Tuit
                  id={twit.id}
                  avatar={twit.avatar}
                  userName={twit.userName}
                  content={twit.content}
                  createdAt={twit.createdAt}
                />
              </div>
            );
          })}
        </section>
        <Link href="/compose/tweet">
          <div className="absolute bottom-20 right-4 md:right-4 lg:right-48 desktop:right-64">
            <FloatingButton>
              <Image
                src="/pen.svg"
                alt="vercel svg"
                width="49px"
                height="49px"
                className="bg-transparent rounded-full"
              />
            </FloatingButton>
          </div>
        </Link>
        <Footer />
      </section>
    </>
  );
}

import { useEffect, useState } from 'react';
import Tuit from '../../components/Tuit/Tuit';
import IHomeTimeline from '../../interfaces/IHomeTimeline';

export default function HomePage() {
  const [timeline, setTimeline] = useState<any>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/statuses/home_timeline')
      .then((res) => res.json())
      .then(setTimeline);
  }, []);

  return (
    <>
      <section>
        <header className="h-12 sticky top-0  rounded-b-sm border-2 border-black flex items-center">
          <h2 className="font-extrabold text-lg">Inicio</h2>
        </header>
        <section className="">
          {timeline.map((twit: IHomeTimeline) => {
            return (
              <Tuit
                id={twit.id}
                avatar={twit.avatar}
                username={twit.username}
                message={twit.message}
                name={twit.name}
              />
            );
          })}
        </section>
        <nav className="fixed bottom-0 border-t-2 border-black h-12 lg:w-2/3 md:w-90 w-screen">
          <h1>Bottom</h1>
        </nav>
      </section>
    </>
  );
}

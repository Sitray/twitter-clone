import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
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
        <header className="w-full">
          <Navbar
            avatar={timeline.length > 0 ? timeline[0].avatar : ''}
            altImage={timeline.length > 0 ? timeline[0].username : ''}
            text="Inicio"
          />
        </header>
        <section className="mb-1">
          {timeline.map((twit: IHomeTimeline) => {
            return (
              <div key={twit.id}>
                <Tuit
                  id={twit.id}
                  avatar={twit.avatar}
                  username={twit.username}
                  message={twit.message}
                  name={twit.name}
                />
              </div>
            );
          })}
        </section>
        <nav className="sticky bottom-0 border-t-2 border-black h-12"></nav>
      </section>
    </>
  );
}

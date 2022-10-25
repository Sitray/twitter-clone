import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Tuit from '../../components/Tuit/Tuit';
import useUser from '../../hooks/useUser';
import IHomeTimeline from '../../interfaces/IHomeTimeline';

export default function HomePage() {
  const [timeline, setTimeline] = useState<any>([]);
  const user = useUser();

  useEffect(() => {
    user &&
      fetch('http://localhost:3000/api/statuses/home_timeline')
        .then((res) => res.json())
        .then(setTimeline);
  }, [user]);

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
                  username={twit.username}
                  message={twit.message}
                  name={twit.name}
                />
              </div>
            );
          })}
        </section>
        <Footer />
      </section>
    </>
  );
}

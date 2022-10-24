import IHomeTimeline from '../../interfaces/IHomeTimeline';
import Avatar from '../Avatar/Avatar';

export default function Tuit({
  id,
  avatar,
  username,
  message,
  name,
}: IHomeTimeline) {
  return (
    <>
      <article key={id} className="flex my-3 mx-4 border-b">
        <div className="mr-3 w-auto object-none">
          <Avatar image={avatar} alt={username} withText={false} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>
    </>
  );
}

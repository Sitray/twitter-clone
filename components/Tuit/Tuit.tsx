import IHomeTimeline from '../../interfaces/IHomeTimeline';
import Avatar from '../Avatar/Avatar';

export default function Tuit({
  id,
  avatar,
  userName,
  content,
  createdAt,
}: IHomeTimeline) {
  return (
    <>
      <article key={id} className="flex my-3 mx-4 border-b">
        <div className="mr-3 w-auto object-none">
          <Avatar image={avatar} alt={userName} withText={false} />
        </div>
        <section className="mb-2">
          <header className="flex flex-row space-x-2">
            <strong>{userName}</strong>
            <p>{createdAt}</p>
          </header>
          <p>{content}</p>
        </section>
      </article>
    </>
  );
}

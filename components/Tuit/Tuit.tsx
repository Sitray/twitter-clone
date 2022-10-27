import Link from 'next/link';
import useDateTimeFormat from '../../hooks/useDateFormat';
import IHomeTimeline from '../../interfaces/IHomeTimeline';
import Avatar from '../Avatar/Avatar';

export default function Tuit({
  id,
  avatar,
  userName,
  content,
  createdAt,
}: IHomeTimeline) {
  console.log('created', createdAt);
  //const useFormatedData = useDateTimeFormat(createdAt);

  return (
    <>
      <article key={id} className="flex my-3 mx-4 border-b">
        <div className="mr-3 w-auto object-none">
          <Avatar image={avatar} alt={userName} withText={false} />
        </div>
        <Link href={`/tuit/${id}`}>
          <section className="mb-2 w-screen break-words cursor-pointer">
            <header className="flex flex-row items-center space-x-2">
              <strong>{userName}</strong>
              <span className="text-gray-400">·</span>
              <time className="text-xs text-gray-400">{createdAt}</time>
            </header>
            <span className="cursor-default">{content}</span>
          </section>
        </Link>
      </article>
    </>
  );
}

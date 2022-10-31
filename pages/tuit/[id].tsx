import Tuit from '../../components/Tuit/Tuit';

interface Tuit {
  avatar: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: string;
  likesCount: number;
  retuitsCount: number;
}

export default function TwitterPage({
  avatar,
  userId,
  userName,
  content,
  likesCount,
  retuitsCount,
  createdAt,
}: Tuit) {
  return (
    <>
      <Tuit
        avatar={avatar}
        id={userId}
        userName={userName}
        content={content}
        createdAt={createdAt}
      />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { params } = context;
  const { id } = params;

  return fetch(`http://localhost:3000/api/tuits/${id}`).then((res) => {
    if (res.ok) {
      return {
        props: res.json(),
      };
    }
  });
}

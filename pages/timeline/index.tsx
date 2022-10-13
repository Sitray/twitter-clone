import { InferGetStaticPropsType } from "next";
import AppLayout from "../../components/AppLayout/AppLayout";

export default function TimeLine({
  userName,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1>This is the timeline {userName} </h1>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch("http://localhost:3000/api/hello").then((res) =>
    res.json()
  );
  const { userName } = data;

  return {
    props: {
      userName,
    },
  };
}

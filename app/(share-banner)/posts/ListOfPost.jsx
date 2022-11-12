import Link from "next/link";
import { LikeButton } from "./LikeButton";

function fetchPost() {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
    next: {
      revalidate: 120,
    },
  }).then((res) => res.json());
}

export default async function ListOfPost() {
  const posts = await fetchPost();

  return (
    <>
      {posts.slice(0, 5).map((post) => (
        <article key={post.id}>
          <Link href="/posts/[id]" as={`posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
          <LikeButton />
        </article>
      ))}
    </>
  );
}

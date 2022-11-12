import Link from "next/link";

function fetchSinglePost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
    next: {
      revalidate: 120,
    },
  }).then((res) => res.json());
}

export default async function SinglePost({ params: { id }, children }) {
  const post = await fetchSinglePost(id);

  return (
    <article>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  );
}

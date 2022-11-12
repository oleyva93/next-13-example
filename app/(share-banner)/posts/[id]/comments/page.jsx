function fetchComments(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    cache: "no-store",
    next: {
      revalidate: 120,
    },
  }).then((res) => res.json());
}

export default async function Comments({ params: { id } }) {
  const comments = await fetchComments(id);

  return (
    <ul
      style={{
        background: "#4444",
        fontSize: "12px",
        borderRadius: "5px",
        padding: "5px 25px",
      }}
    >
      {comments.map((comment) => (
        <li key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}

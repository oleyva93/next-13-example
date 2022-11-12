import { Suspense } from "react";
import ListOfPost from "./ListOfPost";

export default function PostPage() {
  return (
    <section>
      <Suspense fallback={<div>Cargando posts...</div>}>
        <ListOfPost />
      </Suspense>
    </section>
  );
}

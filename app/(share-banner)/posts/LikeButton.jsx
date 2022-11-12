"use client";

import { useState } from "react";

export function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked((lik) => !lik)}>
      {liked ? "🧡" : "🤍"}
    </button>
  );
}

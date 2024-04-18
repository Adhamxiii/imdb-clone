"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  if (!error.digest) {
    return null;
  }

  return (
    <div className="text-center mt-10 space-y-4">
      <h1>Something went wrong. Please try again later.</h1>
      <button
        type="button"
        className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}

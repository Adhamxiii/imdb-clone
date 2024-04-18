"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!search) return;

    router.push(`/search/${search}`);
  };

  return (
    <form
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="Search keyword..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
        disabled={!search}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;

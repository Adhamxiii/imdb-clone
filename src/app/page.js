import Results from "@/components/Results";
import React from "react";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTrending" ? "trending/all/week" : `movie/top_rated`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  console.log(data);

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
};

export default Home;

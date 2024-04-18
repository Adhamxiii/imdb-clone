import React from "react";
import Card from "./Card";

const Results = ({ results }) => {
  return (
    <div className="px-5 py-4 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:flex flex-wrap justify-center max-w-6xl mx-auto w-full">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;

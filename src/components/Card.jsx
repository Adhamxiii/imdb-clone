import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:hover:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 ease-in">
      <Link href="/movie/[id]" as={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt=""
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="truncate text-lg font-bold mt-1 text-amber-500">
            {result.title || result.name}
          </h2>
          <p className="flex items-center justify-between ">
            {result.release_date || result.first_air_date}
            <span className="ml-1 flex items-center">
              <FiThumbsUp className="h-5 mr-1 ml-3" />
              {result.vote_count}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;

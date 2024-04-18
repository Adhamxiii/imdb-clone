"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Link
          className={`hover:text-amber-600 font-semibold ${
            genre &&
            genre === param &&
            "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
          }`}
          href={`/?genre=${param}`}
        >
          {title}
        </Link>
      </div>
    </Suspense>
  );
};

export default NavbarItem;

import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

const Navigation = () => {
  const { favourites } = useAppSelector((state) => state.github);

  return (
    <nav className="flex justify-between items-center h-[50px] px-8 bg-gray-500 text-white shadow-md">
      <h3 className="font-bold">Github Search</h3>

      <span>
        <Link to="/" className="mr-2">
          Home
        </Link>
        <Link to="/favourites" className="relative">
          Favourites{" "}
          {favourites && (
            <span className="px-2 py-1 text-xs font-medium absolute -top-3 -right-4 bg-red-500 rounded-full">
              {favourites.length}
            </span>
          )}
        </Link>
      </span>
    </nav>
  );
};

export default Navigation;

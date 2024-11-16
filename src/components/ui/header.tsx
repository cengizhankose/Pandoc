import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  SearchIcon,
  PenLineIcon,
  HomeIcon,
  TvIcon,
  FilmIcon,
  BookmarkIcon,
} from "lucide-react";

export function Header() {
  return (
    <>
      {/* Main Header (visible on both desktop and mobile) */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Pandoc" className="h-8 w-8" />
            {/* <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-pink-700">
              Pandoc
            </span> */}
          </Link>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white">
              <SearchIcon className="h-5 w-5" />
            </Button>
            <Button className="hidden md:block bg-amber-800 hover:bg-amber-900 text-white">
              <PenLineIcon className="mr-2 h-4 w-4" />
              <span className="">Write Story</span>
            </Button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block container mx-auto px-4 pb-4">
          <div className="flex justify-center space-x-8">
            <Link
              to="/homepage"
              className="hover:text-amber-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/shows"
              className="hover:text-amber-600 transition-colors"
            >
              TV Shows
            </Link>
            <Link
              to="/movies"
              className="hover:text-amber-600 transition-colors"
            >
              Movies
            </Link>
            <Link
              to="/my-list"
              className="hover:text-amber-600 transition-colors"
            >
              My List
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 w-full bg-black/95 border-t border-gray-800 z-50">
        <div className="flex items-center justify-around py-3 px-2 relative">
          <Link
            to="/homepage"
            className="flex flex-col items-center space-y-1 text-gray-400 hover:text-amber-600"
          >
            <HomeIcon className="h-6 w-6" />
            <span className="text-xs">Home</span>
          </Link>

          <Link
            to="/shows"
            className="flex flex-col items-center space-y-1 text-gray-400 hover:text-amber-600"
          >
            <TvIcon className="h-6 w-6" />
            <span className="text-xs">Shows</span>
          </Link>

          <Link
            to="/write-story"
            className="flex flex-col items-center -mt-8 relative"
          >
            <div className="p-4 rounded-full bg-amber-800 hover:bg-amber-900 shadow-lg">
              <PenLineIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-xs mt-1 text-amber-600">Write</span>
          </Link>

          <Link
            to="/movies"
            className="flex flex-col items-center space-y-1 text-gray-400 hover:text-amber-600"
          >
            <FilmIcon className="h-6 w-6" />
            <span className="text-xs">Movies</span>
          </Link>

          <Link
            to="/my-list"
            className="flex flex-col items-center space-y-1 text-gray-400 hover:text-amber-600"
          >
            <BookmarkIcon className="h-6 w-6" />
            <span className="text-xs">My List</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

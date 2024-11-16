import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { RocketIcon, SearchIcon, Upload } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <RocketIcon className="h-8 w-8 text-purple-500" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Pandoc
          </span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-purple-400 transition-colors">
            TV Shows
          </Link>
          <Link to="/" className="hover:text-purple-400 transition-colors">
            Movies
          </Link>
          <Link to="/" className="hover:text-purple-400 transition-colors">
            My List
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white">
            <SearchIcon className="h-5 w-5" />
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Upload className="mr-2 h-4 w-4" />
            Upload Story
          </Button>
        </div>
      </nav>
    </header>
  );
}

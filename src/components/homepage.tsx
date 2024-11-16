import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RocketIcon, SearchIcon, Upload } from "lucide-react";

export function Homepage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black to-transparent">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <RocketIcon className="h-8 w-8 text-purple-500" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Pandoc
            </span>
          </a>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              TV Shows
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Movies
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              My List
            </a>
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
        </div>
      </header>
      <main className="flex-grow">
        <section className="relative h-[80vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl font-bold mb-4">Cosmic Odyssey</h1>
            <p className="text-xl mb-6 max-w-xl">
              Embark on an interstellar journey through time and space. A
              mind-bending sci-fi epic that challenges the very fabric of
              reality.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200">
              Play
            </Button>
            <Button
              variant="outline"
              className="ml-4 bg-black bg-opacity-50 text-white border-white hover:bg-white hover:text-black transition-colors"
            >
              More Info
            </Button>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6">Trending Now</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-md group"
                >
                  <img
                    src={`/placeholder.svg?height=400&width=300&text=Sci-Fi+${i + 1}`}
                    alt={`Sci-Fi Movie ${i + 1}`}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-lg font-semibold">
                      Sci-Fi Title {i + 1}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-6">
              Top User-Generated Stories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-md group"
                >
                  <img
                    src={`/placeholder.svg?height=400&width=300&text=User+Story+${i + 1}`}
                    alt={`User Story ${i + 1}`}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-lg font-semibold">
                      User Story {i + 1}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Pandoc</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">For Creators</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Submit Your Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Creator Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Earnings
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Copyright
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Pandoc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

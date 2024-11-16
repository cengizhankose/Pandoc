import { Button } from "@/components/ui/button";

export function Homepage() {
  return (
    <>
      <main className="flex-grow">
        <section className="relative h-[60vh] sm:h-[80vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Cosmic Odyssey
            </h1>
            <p className="text-lg sm:text-xl mb-6 max-w-xl">
              Embark on an interstellar journey through time and space. A
              mind-bending sci-fi epic that challenges the very fabric of
              reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
              <Button className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto">
                Play
              </Button>
              <Button
                variant="outline"
                className="sm:ml-4 bg-black bg-opacity-50 text-white border-white hover:bg-white hover:text-black transition-colors w-full sm:w-auto"
              >
                More Info
              </Button>
            </div>
          </div>
        </section>
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Trending Now
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              Top User-Generated Stories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
    </>
  );
}

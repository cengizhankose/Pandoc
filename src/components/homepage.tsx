import { Button } from "@/components/ui/button";

// Define interfaces for your data
interface MediaItem {
  id: number;
  title: string;
  imageUrl: string;
}

// Create data arrays
const trendingItems: MediaItem[] = [
  {
    id: 1,
    title: `Sci-Fi Title 1`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHyEy1tw9kCUOQdoMlra1hNGjL6sJAKg83Dbp4I",
  },
  {
    id: 1,
    title: `Sci-Fi Title 1`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHywehH2z0zPqQRM1SkC7t8d6XHhO5omc9exNgn",
  },
  {
    id: 1,
    title: `Sci-Fi Title 1`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHy7dg9IOqVZDmTzd6rWoeIKYMCgPhRNtA91bun",
  },
  {
    id: 1,
    title: `Sci-Fi Title 1`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHyN2AVJ1FCqR6F07mrJ8Ch1vlx5uKbOUGQBZp9",
  },
  {
    id: 1,
    title: `Sci-Fi Title 1`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHyqkxMIe5FDYxisqryw29PpAS0bIGjULzB76Ee",
  },
  {
    id: 1,
    title: `Sci-Fi Title 1`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHyQZ1M15Y1js2Ezg5qRKD3VXoy9ea7NYdvAthS",
  },
  {
    id: 1,
    title: `Sci-Fi Title 1`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHyzIK2Imb4Qd6atqDx2nlON30Jjkoih5HfBK7U",
  },
];

const userStories: MediaItem[] = [
  {
    id: 1,
    title: `User Story 1`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHynMKX70SL5SdvgGauEMT8iHPhsA947RBlY0bF",
  },
  {
    id: 1,
    title: `User Story 1`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHyW3csqTMjuwBzY4tGiVLZEh3vRmyf5gF9kQaT",
  },
  {
    id: 1,
    title: `User Story 1`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHy7Elo0fdqVZDmTzd6rWoeIKYMCgPhRNtA91bu",
  },
];

// Create a reusable MediaCard component
function MediaCard({ title, imageUrl }: Omit<MediaItem, "id">) {
  return (
    <div className="relative overflow-hidden rounded-md group">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}

export function Homepage() {
  return (
    <>
      <main className="flex-grow">
        <section className="relative h-[60vh] sm:h-[80vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://utfs.io/f/KPU1Zt5N4JHyoKxJytXvCiFX8WUPmr04b9s5jqI1HuOa3hkp')",
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
            <div className="flex flex-row gap-4">
              <Button className="bg-amber-600 text-white  w-full sm:w-auto">
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
              {trendingItems.map((item) => (
                <MediaCard
                  key={item.id}
                  title={item.title}
                  imageUrl={item.imageUrl}
                />
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
              {userStories.map((item) => (
                <MediaCard
                  key={item.id}
                  title={item.title}
                  imageUrl={item.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

import { Button } from "@/components/ui/button";

// Define interfaces for your data
interface MediaItem {
  id: number;
  title: string;
  imageUrl: string;
  videoUrl?: string;
}

// Create data arrays
const trendingItems: MediaItem[] = [
  {
    id: 1,
    title: `Silent Carnival`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHyqTJvvkFDYxisqryw29PpAS0bIGjULzB76EeT",
    videoUrl:
      "https://utfs.io/f/KPU1Zt5N4JHynIuWW4SL5SdvgGauEMT8iHPhsA947RBlY0bF",
  },
  {
    id: 2,
    title: `Make it Real`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHymZZF46W7hWBRLVTjKOlgIDmfo1dGxv9nYtSN",
    videoUrl:
      "https://utfs.io/f/KPU1Zt5N4JHynIuWW4SL5SdvgGauEMT8iHPhsA947RBlY0bF",
  },
  {
    id: 3,
    title: `One Frame at a Time`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHyfB5pKmOlAw9JroXYO1zQDvb7GjqH3ET6Wh0S",
    videoUrl:
      "https://utfs.io/f/KPU1Zt5N4JHynIuWW4SL5SdvgGauEMT8iHPhsA947RBlY0bF",
  },
  {
    id: 4,
    title: `Movie`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHyISjfboMTfULpXj6VWKG4ZFt2igPDwIMAv9Ob",
    videoUrl:
      "https://utfs.io/f/KPU1Zt5N4JHynIuWW4SL5SdvgGauEMT8iHPhsA947RBlY0bF",
  },
  {
    id: 5,
    title: `Stellar Pursuit`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHybRH1bEhFUHT8qCnRNbGxzOI7v6MprZ3XoKhg",
    videoUrl:
      "https://utfs.io/f/KPU1Zt5N4JHynIuWW4SL5SdvgGauEMT8iHPhsA947RBlY0bF",
  },
  {
    id: 6,
    title: `Detective`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHyFQfhGoEqKagP6iAcWZhSCHMwjmOUB7Ib3op2",
    videoUrl:
      "https://utfs.io/f/KPU1Zt5N4JHynIuWW4SL5SdvgGauEMT8iHPhsA947RBlY0bF",
  },
  {
    id: 7,
    title: `Ghetto`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHybKv0zChFUHT8qCnRNbGxzOI7v6MprZ3XoKhg",
    videoUrl:
      "https://utfs.io/f/KPU1Zt5N4JHynIuWW4SL5SdvgGauEMT8iHPhsA947RBlY0bF",
  },
];

const userStories: MediaItem[] = [
  {
    id: 12,
    title: `Moonlight Sonata`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHyEy1tw9kCUOQdoMlra1hNGjL6sJAKg83Dbp4I",
    videoUrl:
      "https://utfs.io/f/KPU1Zt5N4JHynIuWW4SL5SdvgGauEMT8iHPhsA947RBlY0bF",
  },
  {
    id: 13,
    title: `Sleep Under the Stars`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHysbxJTQRN08xsSefwaOvX71dTJQgtzUq5nk4Z",
    videoUrl:
      "https://utfs.io/f/KPU1Zt5N4JHynIuWW4SL5SdvgGauEMT8iHPhsA947RBlY0bF",
  },
  {
    id: 14,
    title: `The Last of Us`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHyN2hIeLZCqR6F07mrJ8Ch1vlx5uKbOUGQBZp9",
    videoUrl:
      "https://utfs.io/f/KPU1Zt5N4JHynIuWW4SL5SdvgGauEMT8iHPhsA947RBlY0bF",
  },
  {
    id: 15,
    title: `Powerpuff Flowers`,
    imageUrl:
      "https://utfs.io/f/KPU1Zt5N4JHyO7xelrmysyPl41GXD9gENwhoZiLRB57pjHbA",
    videoUrl:
      "https://utfs.io/f/KPU1Zt5N4JHynIuWW4SL5SdvgGauEMT8iHPhsA947RBlY0bF",
  },
];

const openVideoPlayer = (videoUrl: string) => {
  // Create container div
  const containerDiv = document.createElement("div");
  containerDiv.className =
    "fixed inset-0 w-full h-full z-50 bg-black flex flex-col";

  // Create close button
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "✕";
  closeButton.className =
    "absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10";

  // Create video element
  const videoElement = document.createElement("video");
  videoElement.src = videoUrl;
  videoElement.className = "w-full h-full";
  videoElement.controls = true;
  videoElement.autoplay = true;

  // Add elements to container
  containerDiv.appendChild(closeButton);
  containerDiv.appendChild(videoElement);
  document.body.appendChild(containerDiv);

  // Handle close button click
  const handleClose = () => {
    document.body.removeChild(containerDiv);
    document.removeEventListener("keydown", handleEsc);
  };

  closeButton.onclick = handleClose;

  // Add event listener to exit fullscreen on ESC key
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };
  document.addEventListener("keydown", handleEsc);
};

// Create a reusable MediaCard component
function MediaCard({ title, imageUrl, videoUrl }: Omit<MediaItem, "id">) {
  return (
    <div
      className="relative overflow-hidden rounded-md group"
      onClick={() => videoUrl && openVideoPlayer(videoUrl)}
    >
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
                "url('https://utfs.io/f/KPU1Zt5N4JHyr8jc4wLwjUeziG8gLhFln4fcKVYXaHDImOMb')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Moonlight Sonata
            </h1>
            <p className="text-md sm:text-xl mb-6 max-w-xl text-white/65">
              A robot awakens to consciousness while learning to play Moonlight
              Sonata.
            </p>
            <div className="flex flex-row gap-4">
              <Button
                className="bg-amber-600 text-white w-full sm:w-auto"
                onClick={() =>
                  openVideoPlayer(
                    "https://utfs.io/f/KPU1Zt5N4JHyO98b0oysyPl41GXD9gENwhoZiLRB57pjHbAz"
                  )
                }
              >
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
                  videoUrl={item.videoUrl}
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
                  videoUrl={item.videoUrl}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

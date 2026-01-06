import Tag from "@/components/web/tag";
import Wrapper from "@/components/web/wrapper";
import Search from "./search";

const tags = [
  {
    name: "Final Fantasy (series)",
    id: 997,
  },
  {
    name: "Makima (Chainsaw Man)",
    id: 102137,
  },
  {
    name: "Phrolova (Wuthering Waves)",
    id: 155459,
  },
  {
    name: "WLOP",
    id: 24972,
  },
  {
    name: "futuristic",
    id: 15,
  },
  {
    name: "snow",
    id: 84,
  },
  {
    name: "bare shoulders",
    id: 21919,
  },
  {
    name: "Sousou No Frieren",
    id: 117482,
  },
  {
    name: "Wuthering Waves",
    id: 146214,
  },
  {
    name: "Studio Ghibli",
    id: 1748,
  },
  {
    name: "illustration",
    id: 24563,
  },
  {
    name: "femboy",
    id: 65219,
  },
  {
    name: "fantasy art",
    id: 853,
  },
  {
    name: "black background",
    id: 2575,
  },
  {
    name: "abstract",
    id: 74,
  },
  {
    name: "One Piece",
    id: 1394,
  },
  {
    name: "nature",
    id: 37,
  },
  {
    name: "Reze (Chainsaw Man)",
    id: 102138,
  },
  {
    name: "Tifa Lockhart",
    id: 8099,
  },
  {
    name: "Shorekeeper (Wuthering Waves)",
    id: 158425,
  },
  {
    name: "pixel art",
    id: 2321,
  },
  {
    name: "Frieren",
    id: 148110,
  },
];
export default function Hero() {
  return (
    <section className="relative mb-10 px-8 pt-20 pb-16">
      {/* Header */}
      <div className="relative z-10 mx-auto max-w-5xl space-y-10 text-center">
        <p className="text-5xl leading-none font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
          The best wallpapers for your
          <span className="text-gradient">digital life</span>.
        </p>
      </div>
      {/* Search.... */}
      <Search />
      {/* Tags */}
      <Wrapper className="mt-10 flex w-full flex-wrap justify-center gap-5">
        {tags.map((item) => (
          <Tag name={item.name} id={item.id} key={item.id} />
        ))}
      </Wrapper>
    </section>
  );
}

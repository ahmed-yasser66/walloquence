import Link from "next/link";

const colors = [
  "#475569",
  "#4c5880",
  "#c05382",
  "#ef4444",
  "#d84c68",
  "#426571",
  "#3a7478",
  "#8f5a9e",
  "#a85794",
  "#977668",
  "#1d4ed899",
];
function getColorFromHash(str: string) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % colors.length;
  return colors[index];
}
export default function Tag({ name, id }: { name: string; id: number }) {
  return (
    <Link
      href={`/search?q=${name}`}
      className="group relative cursor-pointer duration-500 hover:scale-105"
    >
      <div
        className="absolute inset-0 -z-10 rounded-full opacity-50 group-hover:opacity-100"
        style={{
          backgroundColor: getColorFromHash(name),
        }}
      />
      <div
        className="bg-surface-light dark:bg-surface-dark shadow-s m-0.5 flex h-10 items-center justify-center rounded-full p-4 text-lg font-bold before:font-normal before:content-['#'] sm:text-xl"
        style={{
          color: getColorFromHash(name),
        }}
      >
        {name}
      </div>
    </Link>
  );
}

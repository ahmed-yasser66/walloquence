import { Search as SearchIcon } from "lucide-react";
import { handleSearch } from "@/lib/actions";
export default function Search() {
  return (
    <form
      action={handleSearch}
      className="group relative mx-auto mt-10 max-w-3xl"
    >
      <div className="from-primary absolute -inset-1 rounded-2xl bg-linear-to-r via-purple-500 to-pink-500 opacity-20 blur transition duration-1000 group-hover:opacity-40 group-hover:duration-200" />
      <div className="dark:bg-surface-dark/80 focus-within:ring-primary/50 focus-within:border-primary relative flex items-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl backdrop-blur-xl transition-all focus-within:ring-2 dark:border-gray-700/50">
        <div className="px-6 text-gray-400">
          <SearchIcon />
        </div>
        <input
          className="w-full border-none bg-transparent py-5 pr-32 text-lg font-medium text-gray-900 placeholder-gray-400 outline-0 focus:ring-0 dark:text-white dark:placeholder-gray-500"
          placeholder="Search keywords..."
          type="text"
          name="input"
          autoComplete="off"
        />
        <div className="absolute right-2 flex items-center gap-1 rounded-xl border border-gray-100 bg-gray-50 p-1.5 dark:border-gray-700 dark:bg-gray-800/80">
          <button className="bg-primary hover:bg-primary-dark shadow-primary/20 rounded-lg px-4 py-2 text-sm font-medium text-white shadow-lg transition-colors">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

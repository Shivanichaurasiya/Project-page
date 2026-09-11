import {
  Search,
  X,
} from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative mt-7 ml-10 mr-10">

      <Search
        size={23}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks..."
        className="h-16 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-12 text-base outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
      />

      {search && (
        <button
          onClick={() => setSearch("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
        >
          <X size={20} />
        </button>
      )}

    </div>
  );
}

export default SearchBar;
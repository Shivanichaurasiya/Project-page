import {
  LayoutGrid,
  Circle,
  CheckCircle2,
} from "lucide-react";

function FilterTabs({ filter, setFilter }) {
  const filters = [
    {
      id: "all",
      label: "All",
      icon: LayoutGrid,
    },
    {
      id: "active",
      label: "Active",
      icon: Circle,
    },
    {
      id: "completed",
      label: "Completed",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="mt-7 ml-10 mr-10 flex flex-wrap gap-3">

      {filters.map((item) => {
        const Icon = item.icon;

        const active = filter === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setFilter(item.id)}
            className={`flex items-center gap-2 rounded-full px-6 py-3 font-medium transition ${
              active
                ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-md"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
            }`}
          >
            <Icon size={19} />
            {item.label}
          </button>
        );
      })}

    </div>
  );
}

export default FilterTabs;
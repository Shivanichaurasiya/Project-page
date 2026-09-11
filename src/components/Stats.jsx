import {
  ListTodo,
  CheckCircle2,
  Clock3,
} from "lucide-react";

function Stats({ total, completed, remaining }) {
  const stats = [
    {
      title: "Total",
      value: 8,
      icon: ListTodo,
      className: "bg-blue-50 text-blue-600",
    },
    {
      title: "Completed",
      value: 6,
      icon: CheckCircle2,
      className: "bg-emerald-50 text-emerald-600",
    },
    {
      title: "Remaining",
      value: 2,
      icon: Clock3,
      className: "bg-orange-50 text-orange-600",
    },
  ];

  return (
    <div className=" ml-10 mr-10 mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">

      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className={`flex items-center gap-5 rounded-2xl p-6 ${stat.className}`}
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/70">
              <Icon size={32} />
            </div>

            <div>
              <p className="font-semibold">
                {stat.title}
              </p>

              <p className="mt-1 text-3xl font-bold">
                {stat.value}
              </p>
            </div>

          </div>
        );
      })}

    </div>
  );
}

export default Stats;
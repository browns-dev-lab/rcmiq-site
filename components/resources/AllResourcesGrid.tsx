"use client";

interface Resource {
  title: string;
  type: string;
  link: string;
}

export default function AllResourcesGrid() {
  const resources: Resource[] = Array.from({ length: 18 }, (_, i) => ({
    title: `Resource ${i + 1}`,
    type: i % 3 === 0 ? "Guide" : i % 3 === 1 ? "Case Study" : "Blog",
    link: `/resources/resource-${i + 1}`,
  }));

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0">
        {resources.map((r, idx) => (
          <a
            key={r.title}
            href={r.link}
            className={`relative group flex items-center justify-center aspect-square text-center text-sm sm:text-base md:text-sm lg:text-base font-medium text-gray-700 hover:text-blue-600 transition
              ${idx % 6 !== 5 ? "border-r border-gray-200" : ""} 
              ${idx < 12 ? "border-b border-gray-200" : ""} 
              `}
            title={r.title}
          >
            <div className="px-2">
              <span className="block text-blue-500 font-semibold mb-1">
                {r.type}
              </span>
              <span className="block truncate">{r.title}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

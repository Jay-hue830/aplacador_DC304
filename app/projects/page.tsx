export const metadata = {
  title: "Projects | Jaycel Aplacador",
};

const projects = [
  {
    id: 1,
    name: "Project One",
    description: "A simple website created using Next.js.",
    category: "Web Development",
  },
  {
    id: 2,
    name: "Project Two",
    description: "A student project for practicing programming skills.",
    category: "Programming",
  },
  {
    id: 3,
    name: "Project Three",
    description: "A personal project showcasing my creativity and skills.",
    category: "Personal Project",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-6 py-16">
      <div className="mb-12">
        <p className="mb-3 font-semibold uppercase tracking-widest text-blue-400">
          My Portfolio
        </p>

        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          My Projects
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
          Here are some of my projects and activities that showcase
          my creativity, knowledge, and programming skills.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border border-gray-700 bg-gray-900 p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/10"
          >
            <span className="mb-5 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              {project.category}
            </span>

            <h2 className="mb-4 text-2xl font-bold text-white">
              {project.name}
            </h2>

            <p className="leading-relaxed text-gray-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
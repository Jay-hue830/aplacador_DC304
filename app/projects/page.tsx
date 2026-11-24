export const metadata = {
  title: "Projects | Jaycel Aplacador",
};

const projects = [
  {
    id: 1,
    name: "Project One",
    description: "A simple website created using Next.js.",
  },
  {
    id: 2,
    name: "Project Two",
    description: "A student project for practicing programming skills.",
  },
  {
    id: 3,
    name: "Project Three",
    description: "A personal project showcasing my creativity and skills.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="p-8">
      <h1 className="mb-6 text-3xl font-bold">Projects</h1>

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
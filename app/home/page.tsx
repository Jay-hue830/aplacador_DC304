import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <section className="max-w-3xl">
        <p className="mb-4 font-medium text-blue-600">
          Welcome to my personal website
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight">
          Hello, my name is Jaycel Aplacador.
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          I am an IT student who loves learning about programming, web development,
          and technology. I am continuously improving my skills and building
          projects that help me gain experience as a future developer.
        </p>

        <Link
          href="/projects"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          See my projects →
        </Link>
      </section>
    </main>
  );
}
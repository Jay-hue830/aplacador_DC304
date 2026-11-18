
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center text-center p-10">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
          Welcome to My Website!
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-gray-900 dark:text-white">
          Jaycel Aplacador
        </h2>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Welcome to my Next.js Application.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Created by Jaycel Aplacador
        </p>
      </main>
    </div>
  );
}

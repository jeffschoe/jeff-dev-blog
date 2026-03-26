import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <head>
        <title>Jeff-Schoe-Dev</title>
      </head>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold">
            Jeff&#39;s Dev Blog
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Documenting my journey to becoming a self-taught developer—projects, lessons learned, and a bit of real life along the way.
            </p>
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white dark:bg-white dark:text-black"
          >
            View Blog
          </Link>
        </div>
        <div>
          <a 
          href="https://github.com/jeffschoe"
          className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white dark:bg-white dark:text-black"
          >
            My Github
          </a>
        </div>
      </main>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

// For client-side routing

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-center sm:text-left">
          About Page
        </h1>

        {/* Remote image from LoremFlickr */}
        <Image
          className="dark:invert"
          src="https://loremflickr.com/cache/resized/65535_53826827743_23af52a939_400_300_nofilter.jpg" // LoremFlickr image
          alt="Remote Image"
          width={400}
          height={300}
          id="about-remote-image-1"
        />

        {/* Another remote image from LoremFlickr */}
        <Image
          className="dark:invert"
          src="https://loremflickr.com/cache/resized/65535_53055778657_229afb9091_400_300_nofilter.jpg" // Another LoremFlickr image
          alt="Another Remote Image"
          width={400}
          height={300}
          id="about-remote-image-2"
        />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {/* Link to the Home page */}
          <Link
            href="/"
            className="rounded-full bg-blue-500 text-white py-2 px-6 mt-4 hover:bg-blue-600 transition"
          >
            Go to Home Page
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}

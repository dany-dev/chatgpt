import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Next.js sample app</h1>
      <p>
        Go to <Link href="/about">About page</Link>
      </p>
    </main>
  );
}

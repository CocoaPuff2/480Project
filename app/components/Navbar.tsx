import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex gap-4 mt-4" aria-label="Main navigation">
      <Link href="/">
        <a
          className="underline focus:outline focus:outline-2 focus:outline-blue-500"
          accessKey="h" // Shortcut for 'Home'
          aria-label="Home"
        >
          Home
        </a>
      </Link>
      <Link href="/things-to-read">
        <a
          className="underline focus:outline focus:outline-2 focus:outline-blue-500"
          accessKey="t" // Shortcut for 'Things to Read'
          aria-label="Things to Read"
        >
          Things to Read
        </a>
      </Link>
      <Link href="/keyboard-documentation">
              <a
                className="underline focus:outline focus:outline-2 focus:outline-blue-500"
                accessKey="k" // Shortcut for 'Keyboard Documentation'
                aria-label="Keyboard Documentation"
              </a>
       </Link>
       <Link href="/car-gallery">
                     <a
                       className="underline focus:outline focus:outline-2 focus:outline-blue-500"
                       accessKey="c" // Shortcut for 'Car Gallery'
                       aria-label="Car Gallery"
                     </a>
              </Link>
    </nav>
  );
}

import Link from "next/link";
import { introduction } from "../../lib/data";

export default function Navigation() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p></p>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            Volume 1 (The Fellowship of the Ring)
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">Volume 2 (The Two Towers)</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            Volume 3 (The Return of the King)
          </Link>
        </li>
      </ul>
    </>
  );
}

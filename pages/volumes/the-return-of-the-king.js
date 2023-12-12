import Link from "next/link";
import { volumes } from "@/resources/lib/data";

export default function Volume1() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <div>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => (
          <li key={book.id}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Link href="/volumes">← All Volumes</Link>
    </div>
  );
}

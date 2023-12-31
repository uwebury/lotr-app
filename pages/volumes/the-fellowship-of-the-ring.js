import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/resources/lib/data";

export default function Volume1() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
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
        <Image
          src="/images/the-fellowship-of-the-ring.png"
          width={140}
          height={230}
          alt="Book cover: The Fellowship of the Ring"
        ></Image>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="/volumes">← All Volumes</Link>
        <Link href="/volumes/the-two-towers"> Next volume →</Link>
      </div>
    </>
  );
}

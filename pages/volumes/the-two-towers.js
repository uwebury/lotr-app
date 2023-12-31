import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/resources/lib/data";

export default function Volume1() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");

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
          src="/images/the-two-towers.png"
          width={140}
          height={230}
          alt="Book cover: The Two Towers"
        ></Image>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="/volumes/the-fellowship-of-the-ring">
          ← Previous Volume
        </Link>
        <Link href="/volumes/the-return-of-the-king"> Next volume →</Link>
      </div>
    </>
  );
}

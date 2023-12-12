import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/resources/lib/data";

export default function Volume1() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");

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
          src="/images/the-return-of-the-king.png"
          width={140}
          height={230}
          alt="Book cover: The Return of the King"
        ></Image>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="/volumes/the-two-towers">← Previous Volume</Link>
        <Link href="/volumes/"> All volumes →</Link>
      </div>
    </>
  );
}
